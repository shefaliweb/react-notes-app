import { motion } from 'framer-motion';
import { MdNoteAdd } from 'react-icons/md';

export default function EmptyState({ hasSearchQuery }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-16 px-4 rounded-2xl bg-white/60 dark:bg-gray-800/40 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-4 p-4 rounded-2xl bg-indigo-100/50 dark:bg-indigo-900/20"
      >
        <MdNoteAdd className="w-16 h-16 text-indigo-500 dark:text-indigo-400" />
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
        {hasSearchQuery ? 'No notes match your search' : 'No notes yet'}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-center max-w-sm">
        {hasSearchQuery
          ? 'Try a different search term.'
          : 'Add a note using the card below to get started.'}
      </p>
    </motion.div>
  );
}
