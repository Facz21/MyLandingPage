import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputPublicDir = path.join(rootDir, ".output", "public");

async function generateStaticHtml() {
  console.log("🚀 Generating static HTML from Nitro SSR render...");

  const serverEntry = path.join(rootDir, ".output", "server", "index.mjs");
  const nitro = await import(`file://${serverEntry}`);

  // Execute SSR fetch on "/"
  const res = await nitro.default.fetch(
    new Request("http://localhost/"),
    { ASSETS: {} },
    { waitUntil: () => {} }
  );

  if (res.status !== 200) {
    throw new Error(`SSR render failed with status ${res.status}`);
  }

  let html = await res.text();

  // Replace all absolute references to relative references everywhere in the HTML
  // (attributes, script JSON manifests, modulepreloads, and style links)
  html = html.replaceAll('"/assets/', '"./assets/');
  html = html.replaceAll("'/assets/", "'./assets/");
  html = html.replaceAll('href="/assets/', 'href="./assets/');
  html = html.replaceAll('src="/assets/', 'src="./assets/');
  html = html.replaceAll('"/favicon.ico"', '"./favicon.ico"');
  html = html.replaceAll('"/robots.txt"', '"./robots.txt"');
  html = html.replaceAll('href="/favicon.ico"', 'href="./favicon.ico"');
  html = html.replaceAll('href="/robots.txt"', 'href="./robots.txt"');

  // Write index.html and 404.html for SPA fallback
  const indexPath = path.join(outputPublicDir, "index.html");
  const notFoundPath = path.join(outputPublicDir, "404.html");
  const noJekyllPath = path.join(outputPublicDir, ".nojekyll");
  const cnamePath = path.join(outputPublicDir, "CNAME");

  await fs.writeFile(indexPath, html, "utf8");
  await fs.writeFile(notFoundPath, html, "utf8");
  await fs.writeFile(noJekyllPath, "", "utf8");
  await fs.writeFile(cnamePath, "afcortesdev.com\n", "utf8");

  console.log(`✅ Static HTML successfully generated! (${html.length} bytes)`);
  console.log(`✅ Created: ${indexPath}`);
  console.log(`✅ Created: ${notFoundPath}`);
  console.log(`✅ Created: ${noJekyllPath}`);
  console.log(`✅ Created: ${cnamePath}`);
}

generateStaticHtml().catch((err) => {
  console.error("❌ Error generating static HTML:", err);
  process.exit(1);
});
