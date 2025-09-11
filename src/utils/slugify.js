// src/utils/slugify.js
export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/^dr\.\s*/, "")   // remove "Dr. " at start
    .replace(/[^\w\s-]/g, "")  // strip punctuation
    .trim()
    .replace(/\s+/g, "-");
}
