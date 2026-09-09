/* The MediaPipe half of the pose engine, written so it can run in either place it has to: inside
 * pose-worker.js (the normal case) or on the main thread. MediaPipe's own bundle only uses an
 * OffscreenCanvas on browsers it trusts to have a working one; everywhere else it falls back to
 * document.createElement, which a Worker doesn't have — on those browsers src/inference.ts loads
 * this same file on the main thread instead, and nothing else about the pipeline changes. */
(function (root) {
  let model, previousHip;
  root.PoseCore = {
    async init(vision, base) {
      const files = await vision.FilesetResolver.forVisionTasks(base + 'mediapipe/wasm');
      model = await vision.PoseLandmarker.createFromOptions(files, {
        baseOptions: { modelAssetPath: base + 'models/pose_landmarker_full.task', delegate: 'CPU' },
        runningMode: 'VIDEO', numPoses: 2, minPoseDetectionConfidence: 0.45,
        minPosePresenceConfidence: 0.45, minTrackingConfidence: 0.5,
      });
      previousHip = undefined;
    },
    /* One sampled frame. Picks the person closest to last frame's hips (with a small bonus for
     * size), and drops the track if the best candidate still jumped more than 30% of the frame. */
    detect(bitmap, time) {
      let result;
      try { result = model.detectForVideo(bitmap, time * 1000); }
      finally { bitmap.close(); }
      let index = -1, best = -Infinity;
      result.landmarks.forEach((points, i) => {
        const hip = { x: (points[23].x + points[24].x) / 2, y: (points[23].y + points[24].y) / 2 };
        const size = Math.hypot(points[11].x - points[23].x, points[11].y - points[23].y);
        const score = previousHip ? -Math.hypot(hip.x - previousHip.x, hip.y - previousHip.y) + size * 0.15 : size;
        if (score > best) { best = score; index = i; }
      });
      let landmarks = result.landmarks[index] ?? null;
      let world = result.worldLandmarks[index] ?? null;
      if (landmarks) {
        const hip = { x: (landmarks[23].x + landmarks[24].x) / 2, y: (landmarks[23].y + landmarks[24].y) / 2 };
        if (previousHip && Math.hypot(hip.x - previousHip.x, hip.y - previousHip.y) > 0.3) {
          landmarks = null; world = null;
        } else { previousHip = hip; }
      }
      return { time, landmarks, world };
    },
    dispose() { model?.close?.(); model = undefined; previousHip = undefined; },
  };
})(typeof self !== 'undefined' ? self : globalThis);
