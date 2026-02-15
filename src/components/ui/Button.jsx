import { motion } from 'framer-motion';

const variants = {
  tap: { scale: 0.97 },
  hover: { scale: 1.02 },
};

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}) {
  const base = 'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-60 disabled:pointer-events-none px-4 py-2.5';
  const styles = {
    primary: 'bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600',
    secondary: 'bg-white/80 dark:bg-white/10 text-gray-800 dark:text-gray-100 hover:bg-white dark:hover:bg-white/20 focus:ring-indigo-400 border border-gray-200/50 dark:border-white/10',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    ghost: 'bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={variants.tap}
      whileHover={disabled ? undefined : variants.hover}
      className={`${base} ${styles[variant] || styles.primary} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
