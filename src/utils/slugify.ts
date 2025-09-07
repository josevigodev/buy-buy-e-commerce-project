export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-');
}
