/* MediaPipe runs in a classic worker so its WASM loader can use importScripts. This is a plain
 * public/ file (not a Vite module), so it has no build-time base-path config; deriving BASE from
 * this script's own URL instead makes it work unmodified whether the site is served from "/" or
 * a subpath like GitHub Pages' "/repo-name/" — a hardcoded "/mediapipe/..." 404s under the latter. */
const BASE = self.location.href.replace(/pose-worker\.js(?:\?.*)?$/, '');
self.exports = {};
importScripts(BASE + 'mediapipe/vision_bundle.js');
const vision = self.exports;
let model;
let previousHip;
self.onmessage = async ({data}) => {
  try {
    if (data.type === 'init') {
      const files = await vision.FilesetResolver.forVisionTasks(BASE + 'mediapipe/wasm');
      model = await vision.PoseLandmarker.createFromOptions(files, {
        baseOptions: { modelAssetPath: BASE + 'models/pose_landmarker_full.task', delegate: 'CPU' },
        runningMode: 'VIDEO', numPoses: 2, minPoseDetectionConfidence: 0.45,
        minPosePresenceConfidence: 0.45, minTrackingConfidence: 0.5,
      });
      self.postMessage({ type:'ready' });
    } else if (data.type === 'frame') {
      let result;
      try { result = model.detectForVideo(data.bitmap, data.time * 1000); }
      finally { data.bitmap.close(); }
      let index = -1, best = -Infinity;
      result.landmarks.forEach((points,i) => {
        const hip = { x:(points[23].x+points[24].x)/2, y:(points[23].y+points[24].y)/2 };
        const size = Math.hypot(points[11].x-points[23].x, points[11].y-points[23].y);
        const score = previousHip ? -Math.hypot(hip.x-previousHip.x, hip.y-previousHip.y) + size*0.15 : size;
        if (score > best) { best = score; index = i; }
      });
      let landmarks = result.landmarks[index] ?? null;
      let world = result.worldLandmarks[index] ?? null;
      if (landmarks) {
        const hip = {x:(landmarks[23].x+landmarks[24].x)/2,y:(landmarks[23].y+landmarks[24].y)/2};
        if (previousHip && Math.hypot(hip.x-previousHip.x,hip.y-previousHip.y) > 0.3) {
          landmarks = null; world = null;
        } else { previousHip = hip; }
      }
      self.postMessage({type:'result', frame:{time:data.time, landmarks, world}});
    }
  } catch(error) { self.postMessage({type:'error', message: String(error?.message ?? error)}); }
};
