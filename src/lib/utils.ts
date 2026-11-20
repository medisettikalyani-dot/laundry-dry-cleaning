/**
 * Laundry & Dry Cleaning Project Utilities
 */

/**
 * Conditionally joins CSS class names into a single string.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a number as Indian Rupee currency (INR, en-IN).
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
