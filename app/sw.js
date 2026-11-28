const VERSION = 'be89481f281e';
const CACHE = 'grac-' + VERSION;
const FILES = ["./", "fonts/atkinson-hyperlegible-latin-400-normal.woff2", "fonts/atkinson-hyperlegible-latin-700-normal.woff2", "fonts/baloo-2-latin-400-normal.woff2", "fonts/baloo-2-latin-600-normal.woff2", "fonts/baloo-2-latin-700-normal.woff2", "fonts/baloo-2-latin-800-normal.woff2", "fonts/fonts.css", "fonts/lora-latin-600-normal.woff2", "fonts/lora-latin-700-normal.woff2", "fonts/noto-music-latin-400-normal.woff2", "fonts/noto-music-music-400-normal.woff2", "fonts/nunito-latin-400-normal.woff2", "fonts/nunito-latin-500-normal.woff2", "fonts/nunito-latin-600-normal.woff2", "fonts/nunito-latin-700-normal.woff2", "fonts/nunito-latin-800-normal.woff2", "fonts/nunito-latin-900-normal.woff2", "fonts/playfair-display-latin-500-normal.woff2", "fonts/playfair-display-latin-700-normal.woff2", "fonts/press-start-2p-latin-400-normal.woff2", "grac/cplus.png", "grac/grac_word.png", "grac/index.html", "grac/interpreta.html", "grac/logo.png", "grac/notas.html", "grac/orquesta.html", "grac/poster1.jpg", "grac/poster2.jpg", "grac/repasa.html", "grac/scene1.mp4", "grac/scene2.mp4", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "index.html", "manifest.webmanifest", "navidades-juego/assets/grac.png", "navidades-juego/assets/inst/flauta/A4.mp3", "navidades-juego/assets/inst/flauta/A5.mp3", "navidades-juego/assets/inst/flauta/A6.mp3", "navidades-juego/assets/inst/flauta/C5.mp3", "navidades-juego/assets/inst/flauta/C6.mp3", "navidades-juego/assets/inst/flauta/E5.mp3", "navidades-juego/assets/inst/flauta/E6.mp3", "navidades-juego/assets/inst/guitarra/A2.mp3", "navidades-juego/assets/inst/guitarra/A3.mp3", "navidades-juego/assets/inst/guitarra/A4.mp3", "navidades-juego/assets/inst/guitarra/A5.mp3", "navidades-juego/assets/inst/guitarra/As5.mp3", "navidades-juego/assets/inst/guitarra/B1.mp3", "navidades-juego/assets/inst/guitarra/B2.mp3", "navidades-juego/assets/inst/guitarra/B3.mp3", "navidades-juego/assets/inst/guitarra/B4.mp3", "navidades-juego/assets/inst/guitarra/Cs3.mp3", "navidades-juego/assets/inst/guitarra/Cs4.mp3", "navidades-juego/assets/inst/guitarra/Cs5.mp3", "navidades-juego/assets/inst/guitarra/D2.mp3", "navidades-juego/assets/inst/guitarra/D3.mp3", "navidades-juego/assets/inst/guitarra/D5.mp3", "navidades-juego/assets/inst/guitarra/Ds4.mp3", "navidades-juego/assets/inst/guitarra/E2.mp3", "navidades-juego/assets/inst/guitarra/E3.mp3", "navidades-juego/assets/inst/guitarra/E4.mp3", "navidades-juego/assets/inst/guitarra/E5.mp3", "navidades-juego/assets/inst/guitarra/Fs2.mp3", "navidades-juego/assets/inst/guitarra/Fs3.mp3", "navidades-juego/assets/inst/guitarra/Fs4.mp3", "navidades-juego/assets/inst/guitarra/Fs5.mp3", "navidades-juego/assets/inst/guitarra/G3.mp3", "navidades-juego/assets/inst/guitarra/G5.mp3", "navidades-juego/assets/inst/guitarra/Gs2.mp3", "navidades-juego/assets/inst/guitarra/Gs4.mp3", "navidades-juego/assets/inst/guitarra/Gs5.mp3", "navidades-juego/assets/inst/piano/A2.mp3", "navidades-juego/assets/inst/piano/A3.mp3", "navidades-juego/assets/inst/piano/A4.mp3", "navidades-juego/assets/inst/piano/A5.mp3", "navidades-juego/assets/inst/piano/C2.mp3", "navidades-juego/assets/inst/piano/C3.mp3", "navidades-juego/assets/inst/piano/C4.mp3", "navidades-juego/assets/inst/piano/C5.mp3", "navidades-juego/assets/inst/piano/C6.mp3", "navidades-juego/assets/inst/piano/Ds2.mp3", "navidades-juego/assets/inst/piano/Ds3.mp3", "navidades-juego/assets/inst/piano/Ds4.mp3", "navidades-juego/assets/inst/piano/Ds5.mp3", "navidades-juego/assets/inst/piano/Fs2.mp3", "navidades-juego/assets/inst/piano/Fs3.mp3", "navidades-juego/assets/inst/piano/Fs4.mp3", "navidades-juego/assets/inst/piano/Fs5.mp3", "navidades-juego/assets/inst/violin/A3.mp3", "navidades-juego/assets/inst/violin/A4.mp3", "navidades-juego/assets/inst/violin/A5.mp3", "navidades-juego/assets/inst/violin/C4.mp3", "navidades-juego/assets/inst/violin/C5.mp3", "navidades-juego/assets/inst/violin/C6.mp3", "navidades-juego/assets/inst/violin/E4.mp3", "navidades-juego/assets/inst/violin/E5.mp3", "navidades-juego/assets/inst/violin/G3.mp3", "navidades-juego/assets/inst/violin/G4.mp3", "navidades-juego/assets/inst/violin/G5.mp3", "navidades-juego/assets/monroy.webp", "navidades-juego/assets/perc/bombo.mp3", "navidades-juego/assets/perc/cajachina.mp3", "navidades-juego/assets/perc/cajon.mp3", "navidades-juego/assets/perc/cascabeles.mp3", "navidades-juego/assets/perc/claves.mp3", "navidades-juego/assets/perc/maracas.mp3", "navidades-juego/assets/perc/pandereta.mp3", "navidades-juego/assets/perc/pandero.mp3", "navidades-juego/assets/perc/triangulo.mp3", "navidades-juego/assets/scores.js", "navidades-juego/assets/sf/glockenspiel.json", "navidades-juego/index.html", "orquesta/index.html", "ritmo-historia/index.html"];

async function tell(msg) {
  const cs = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
  cs.forEach(c => c.postMessage(msg));
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    let done = 0;
    const queue = FILES.slice();
    async function worker() {
      while (queue.length) {
        const url = queue.shift();
        const req = new Request(url, { cache: 'reload' });
        let res = null;
        for (let i = 0; i < 3 && !res; i++) {
          try { const r = await fetch(req); if (r.ok) res = r; } catch (e) {}
        }
        if (!res) throw new Error('No se pudo descargar ' + url);
        await cache.put(url, res);
        done++;
        tell({ type: 'progress', done, total: FILES.length });
      }
    }
    await Promise.all([worker(), worker(), worker(), worker()]);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE && k.startsWith('grac-')) await caches.delete(k);
    await self.clients.claim();
    tell({ type: 'ready', version: VERSION });
  })());
});

self.addEventListener('message', event => {
  if (event.data === 'version') event.source.postMessage({ type: 'version', version: VERSION });
});

async function rangeResponse(request, res) {
  const range = request.headers.get('range');
  if (!range) return res;
  const buf = await res.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(range);
  const total = buf.byteLength;
  let start = m && m[1] ? parseInt(m[1], 10) : 0;
  let end = m && m[2] ? parseInt(m[2], 10) : total - 1;
  if (m && !m[1] && m[2]) { start = total - parseInt(m[2], 10); end = total - 1; }
  end = Math.min(end, total - 1);
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Type': res.headers.get('Content-Type') || 'application/octet-stream',
      'Content-Range': `bytes ${start}-${end}/${total}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes'
    }
  });
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    let hit = await cache.match(req, { ignoreSearch: true, ignoreVary: true });
    if (!hit && req.mode === 'navigate' && url.pathname.endsWith('/')) hit = await cache.match(url.pathname + 'index.html');
    if (hit) return rangeResponse(req, hit);
    try { return await fetch(req); }
    catch (e) {
      if (req.mode === 'navigate') return (await cache.match('./')) || Response.error();
      return Response.error();
    }
  })());
});
