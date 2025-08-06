/**
 * Converts a string into a URL-friendly slug.
 *
 * Examples:
 *   slugify("Hello World!") => "hello-world"
 *   slugify("  This is a Test -- 123 ") => "this-is-a-test-123"
 *
 * @param text - The input string to be slugified
 * @returns A lowercased, hyphen-separated string suitable for URLs
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD") // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Collapse multiple hyphens
}