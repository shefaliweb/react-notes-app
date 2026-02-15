import { motion } from 'framer-motion';
import { MdDarkMode, MdLightMode, MdLogout } from 'react-icons/md';
import Button from './ui/Button';

export default function Navbar({ darkMode, onToggleDarkMode, user, onLogout }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between py-6 px-1"
    >
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Notes
      </h1>
      <div className="flex items-center gap-2">
        {user && onLogout && (
          <Button
            variant="ghost"
            onClick={onLogout}
            className="gap-2 text-gray-600 dark:text-gray-300"
            aria-label="Log out"
          >
            <MdLogout className="w-5 h-5" />
            <span className="hidden sm:inline">Log out</span>
          </Button>
        )}
        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            variant="secondary"
            onClick={() => onToggleDarkMode((prev) => !prev)}
            className="gap-2"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <MdLightMode className="w-5 h-5" /> : <MdDarkMode className="w-5 h-5" />}
            <span className="hidden sm:inline">{darkMode ? 'Light' : 'Dark'}</span>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
