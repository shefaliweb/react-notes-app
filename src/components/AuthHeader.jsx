import { motion } from 'framer-motion';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import Button from './ui/Button';

export default function AuthHeader({ darkMode, onToggleDarkMode }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between py-6 px-1"
    >
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Notes
      </h1>
      <Button
        variant="secondary"
        onClick={() => onToggleDarkMode((prev) => !prev)}
        className="gap-2"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <MdLightMode className="w-5 h-5" /> : <MdDarkMode className="w-5 h-5" />}
        <span className="hidden sm:inline">{darkMode ? 'Light' : 'Dark'}</span>
      </Button>
    </motion.header>
  );
}
