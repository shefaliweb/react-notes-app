import { motion } from 'framer-motion';

export default function Input({
  type = 'text',
  value,
  onChange,
  placeholder,
  className = '',
  id,
  label,
  error,
  ...props
}) {
  const inputId = id || `input-${Math.random().toString(36).slice(2)}`;
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <motion.input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.15 }}
        className={`
          w-full rounded-xl border bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm
          border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100
          placeholder-gray-500 dark:placeholder-gray-400
          px-4 py-2.5 text-base
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          transition-colors
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
