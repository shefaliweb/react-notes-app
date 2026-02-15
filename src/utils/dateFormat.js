/**
 * Format date for display (locale string).
 * @param {string} [dateStr] - Optional date string from note
 * @returns {string}
 */
export function formatNoteDate(dateStr) {
  if (!dateStr) return new Date().toLocaleDateString();
  return dateStr;
}
