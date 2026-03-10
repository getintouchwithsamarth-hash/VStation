import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const TARGET_DIR = "src/foundations";
const INLINE_STYLE_PATTERN = /style=\{\{/g;

function collectTsxFiles(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...collectTsxFiles(fullPath));
      continue;
    }

    if (fullPath.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = collectTsxFiles(TARGET_DIR);
const violations = [];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const matches = source.match(INLINE_STYLE_PATTERN);
  if (matches && matches.length > 0) {
    violations.push(`${file}: ${matches.length} inline style occurrence(s)`);
  }
}

if (violations.length > 0) {
  console.error("Inline styles are not allowed in src/foundations.");
  console.error(violations.join("\n"));
  process.exit(1);
}

console.log("OK: no inline styles found in src/foundations.");
