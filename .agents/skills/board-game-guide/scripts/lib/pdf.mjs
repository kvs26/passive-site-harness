import { readFile } from 'node:fs/promises';

let pdfjs;
export async function loadPdf(file) {
  pdfjs ??= await import('pdfjs-dist/legacy/build/pdf.mjs');
  const data = new Uint8Array(typeof file === 'string' ? await readFile(file) : file);
  return pdfjs.getDocument({ data, useSystemFonts: true, verbosity: 0 }).promise;
}

// Headless Chromium writes named destinations equal to the HTML element ids, so every internal
// link annotation tells us which page its target landed on. Returns { links, pages } where
// links = [{ from, dest, page }] (page = null if unresolved) and pages = { dest: page }.
export async function internalLinks(pdf) {
  const links = [], pages = {};
  for (let p = 1; p <= pdf.numPages; p++) {
    for (const a of await (await pdf.getPage(p)).getAnnotations()) {
      if (a.subtype !== 'Link' || typeof a.dest !== 'string') continue;
      let page = null;
      try {
        const d = await pdf.getDestination(a.dest);
        if (Array.isArray(d) && d[0] != null) page = typeof d[0] === 'object' ? (await pdf.getPageIndex(d[0])) + 1 : Number(d[0]) + 1;
      } catch { /* unresolved */ }
      links.push({ from: p, dest: a.dest, page });
      if (page) pages[a.dest] = page;
    }
  }
  return { links, pages };
}

export async function externalUrls(pdf) {
  const urls = [];
  for (let p = 1; p <= pdf.numPages; p++)
    for (const a of await (await pdf.getPage(p)).getAnnotations()) if (a.subtype === 'Link' && a.url) urls.push({ page: p, url: a.url });
  return urls;
}

export async function pageTexts(pdf) {
  const out = [];
  for (let p = 1; p <= pdf.numPages; p++) {
    const tc = await (await pdf.getPage(p)).getTextContent();
    out.push(tc.items.map(i => i.str).join(' ').replace(/\s+/g, ' ').trim());
  }
  return out;
}
