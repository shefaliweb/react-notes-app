import { motion } from 'framer-motion';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { formatNoteDate } from '../utils/dateFormat';

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95 },
};

export default function NoteCard({ id, text, date, onDelete, onEdit }) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 p-5 min-h-[180px] flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => onEdit?.({ id, text, date })}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onEdit?.({ id, text, date });
        }
      }}
      aria-label="Edit note"
    >
      <p className="text-gray-800 dark:text-gray-100 whitespace-pre-wrap break-words flex-1 pr-16">
        {text}
      </p>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
        <small className="text-sm text-gray-500 dark:text-gray-400">
          {formatNoteDate(date)}
        </small>
        <div className="flex gap-1">
          <motion.button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.({ id, text, date });
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1.5 rounded-lg text-indigo-500 hover:bg-indigo-500/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            aria-label="Edit note"
          >
            <MdEdit className="w-5 h-5" />
          </motion.button>
          <motion.button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1.5 rounded-lg text-red-500 hover:bg-red-500/10 focus:outline-none focus:ring-2 focus:ring-red-500/50"
            aria-label="Delete note"
          >
            <MdDeleteForever className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
