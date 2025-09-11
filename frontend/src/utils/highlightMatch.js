import React from "react";

export default function highlightMatch(text, query) {
  if (!query) return text;

  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return text;

  const regex = new RegExp(`(${terms.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, idx) =>
    regex.test(part)
      ? React.createElement(
          "span",
          {
            key: idx,
            className: "bg-yellow-100 text-yellow-800 font-semibold rounded px-1",
          },
          part
        )
      : part
  );
}
