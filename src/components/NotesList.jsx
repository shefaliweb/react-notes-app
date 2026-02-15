import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NoteCard from './NoteCard';
import AddNote from './AddNote';
import EmptyState from './EmptyState';
import Modal from './ui/Modal';
import Button from './ui/Button';

const CHARACTER_LIMIT = 200;

const container = {
  animate: {
    transition: { staggerChildren: 0.05 },
  },
};

export default function NotesList({
  notes,
  onAddNote,
  onEditNote,
  onDeleteNote,
  hasSearchQuery = false,
}) {
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [editNote, setEditNote] = useState(null);
  const [editText, setEditText] = useState('');

  const handleConfirmDelete = () => {
    if (deleteTarget) {
      onDeleteNote(deleteTarget);
      setDeleteTarget(null);
    }
  };
  const handleCancelDelete = () => setDeleteTarget(null);

  const handleEditClick = (note) => {
    setEditNote(note);
    setEditText(note.text);
  };
  const handleSaveEdit = () => {
    if (editNote && editText.trim()) {
      onEditNote(editNote.id, editText.trim());
      setEditNote(null);
      setEditText('');
    }
  };
  const handleCloseEdit = () => {
    setEditNote(null);
    setEditText('');
  };

  const showEmptyState = notes.length === 0;

  return (
    <>
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
      >
        <AnimatePresence mode="popLayout">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              text={note.text}
              date={note.date}
              onEdit={handleEditClick}
              onDelete={(id) => setDeleteTarget(id)}
            />
          ))}
        </AnimatePresence>
        <AddNote onAddNote={onAddNote} />
      </motion.div>

      {showEmptyState && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6"
        >
          <EmptyState hasSearchQuery={hasSearchQuery} />
        </motion.div>
      )}

      <Modal
        isOpen={!!deleteTarget}
        onClose={handleCancelDelete}
        title="Delete note?"
      >
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This note will be permanently deleted. This action cannot be undone.
        </p>
        <div className="flex gap-3 justify-end">
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </div>
      </Modal>

      <Modal
        isOpen={!!editNote}
        onClose={handleCloseEdit}
        title="Edit note"
      >
        <textarea
          value={editText}
          onChange={(e) =>
            e.target.value.length <= CHARACTER_LIMIT && setEditText(e.target.value)
          }
          rows={6}
          maxLength={CHARACTER_LIMIT}
          placeholder="Note content..."
          className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
          autoFocus
          aria-label="Note content"
        />
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {CHARACTER_LIMIT - editText.length} remaining
          </span>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={handleCloseEdit}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} disabled={!editText.trim()}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
