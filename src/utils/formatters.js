/**
 * Formats a numeric value as standard Indian Rupee currency string.
 * Preserves exact visual presentation used across Shagun widgets.
 */
export const formatCurrency = (val) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
};
