// Generates public/sitemap.xml from the file-based routes in src/routes.
// Run manually (`bun run sitemap`) or automatically before every build.
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = process.env.SITE_URL ?? "https://brain.net.pk";
const root = fileURLToPath(new URL("..", import.meta.url));
const routesDir = join(root, "src", "routes");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (/\.tsx?$/.test(entry)) out.push(full);
  }
  return out;
}

function toUrlPath(file) {
  let id = relative(routesDir, file).split(sep).join("/").replace(/\.tsx?$/, "");
  if (id === "__root") return null;
  if (id.startsWith("api/")) return null;
  const segments = id
    .split("/")
    .flatMap((part) => part.split("."))
    .filter((part) => part && !part.startsWith("_")) // pathless layout segments
    .filter((part) => part !== "index");
  // Dynamic params, splats and non-page files are not listed.
  if (segments.some((part) => part.startsWith("$"))) return null;
  // Legacy 301 redirect stubs (old /cloud, /sms, ... URLs) are not indexable.
  if (/statusCode:\s*301/.test(readFileSync(file, "utf8"))) return null;
  return "/" + segments.join("/");
}

const paths = [
  ...new Set(walk(routesDir).map(toUrlPath).filter((p) => p !== null)),
].sort();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}${p === "/" ? "/" : p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${p === "/" ? "1.0" : p.split("/").length <= 2 ? "0.8" : "0.6"}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(root, "public", "sitemap.xml"), xml);
console.log(`sitemap.xml written with ${paths.length} URLs (${SITE_URL})`);
