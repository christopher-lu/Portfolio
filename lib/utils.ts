/**
 * Conditionally joins CSS class names.
 *
 * Usage:
 * className={cn(
 *   "rounded-lg",
 *   isActive && "bg-blue-500",
 *   className
 * )}
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}