/* MediaPipe runs in a classic worker so its WASM loader can use importScripts. This is a plain
 * public/ file (not a Vite module), so it has no build-time base-path config; deriving BASE from
 * this script's own URL instead makes it work unmodified whether the site is served from "/" or
 * a subpath like GitHub Pages' "/repo-name/" — a hardcoded "/mediapipe/..." 404s under the latter.
 * The actual work lives in pose-core.js, shared with the main-thread path (see there for why). */
const BASE = self.location.href.replace(/pose-worker\.js(?:\?.*)?$/, '');
self.exports = {};
importScripts(BASE + 'mediapipe/vision_bundle.js', BASE + 'pose-core.js');
const vision = self.exports;
self.onmessage = async ({ data }) => {
  try {
    if (data.type === 'init') {
      await self.PoseCore.init(vision, BASE);
      self.postMessage({ type: 'ready' });
    } else if (data.type === 'frame') {
      self.postMessage({ type: 'result', frame: self.PoseCore.detect(data.bitmap, data.time) });
    }
  } catch (error) { self.postMessage({ type: 'error', message: String(error?.message ?? error) }); }
};
