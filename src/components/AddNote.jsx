import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const CHARACTER_LIMIT = 200;

export default function AddNote({ onAddNote }) {
  const [noteText, setNoteText] = useState('');

  const handleChange = (e) => {
    if (CHARACTER_LIMIT - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSave = () => {
    const trimmed = noteText.trim();
    if (trimmed.length > 0) {
      onAddNote(trimmed);
      setNoteText('');
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 border-dashed p-5 min-h-[180px] flex flex-col shadow-lg"
    >
      <textarea
        rows={6}
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
        maxLength={CHARACTER_LIMIT}
        aria-label="New note content"
        className="w-full resize-none bg-transparent border-none text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none text-base"
      />
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
        <small className="text-sm text-gray-500 dark:text-gray-400">
          {CHARACTER_LIMIT - noteText.length} remaining
        </small>
        <Button onClick={handleSave} disabled={!noteText.trim()}>
          Save
        </Button>
      </div>
    </motion.div>
  );
}
