let codereg = new RegExp(
  "<h1 class='equation main-equation well'>\n(.*?)</h1>",
  "g",
);
export function handler(code: string): string {
  let html = code.match(codereg)[0];
  let reaction = html
    .replace(/>/g, ">\n")
    .split("\n")
    .filter(Boolean)
    .map((str) => str.trim())
    .filter((item) => !item.startsWith("<"))
    .map((text) => text.replace(/<(.*?)>/g, ""))
    .map((node) => (node === "&rarr;" ? "\u2192" : node))
    .map((node) => (node === "&nbsp;" ? " " : node))
    .join("");
  return reaction;
}
