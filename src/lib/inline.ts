// Inline Markdown for short frontmatter strings (FAQ answers, Arc comparison
// items): `code`, **bold**, *emphasis*, [links](/path/) and <kbd> keys written
// as [[⌘T]]. Everything else is escaped, so frontmatter can't inject markup.

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Root-relative paths, fragments and https URLs. "//host" and "/\host" are
// protocol-relative to browsers, so they don't count as root-relative.
const safeHref = (href: string) => (/^(\/(?![/\\])|#|https:\/\/)/.test(href) ? href : "#");

// Link text may contain [[key]] tokens; the href stops at the first ")" or space.
const LINK = /\[((?:\[\[[^\]]+\]\]|[^[\]])+)\]\(([^)\s]+)\)/g;

/** Keys, bold and emphasis in text that is neither code nor an href. */
function format(text: string): string {
  return escape(text)
    .replace(/\[\[([^\]]+)\]\]/g, "<kbd>$1</kbd>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

/** Links first, so an href is escaped but never formatted. */
function span(text: string): string {
  let html = "";
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    html += format(text.slice(last, m.index));
    html += `<a href="${escape(safeHref(m[2]))}">${format(m[1])}</a>`;
    last = m.index + m[0].length;
  }
  return html + format(text.slice(last));
}

export function inline(source: string): string {
  // Code spans are literal: split them out so no other rule runs inside them.
  return source
    .split(/(`[^`]+`)/)
    .map((part, i) => (i % 2 ? `<code>${escape(part.slice(1, -1))}</code>` : span(part)))
    .join("");
}
