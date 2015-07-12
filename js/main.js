// Main loop
window.now = 0;
(function glLoop(){
  window.requestAnimationFrame(glLoop);
  window.elapsed = Date.now() - window.now;

  // Update logic
  // Render logic
  GL.update(window.elapsed);
  GL.render(window.elapsed);

  window.now = Date.now();
})();
