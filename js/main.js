visualObjectLighting();
visualObjectPointLighting();
visualObjectGrid();

var objects = [];
objects.push(visualObjectSmokeStack(0,0,80,GL.scene));
objects.push(visualObjectSmokeStack(0,0,-80,GL.scene));
objects.push(visualObjectSmokeStack(-80,0,0,GL.scene));
objects.push(visualObjectSmokeStack(80,0,0,GL.scene));
visualObjectBuilding(0,0,80,GL.scene);
visualObjectBuilding(0,0,-80,GL.scene);
visualObjectBuilding(-80,0,0,GL.scene);
visualObjectBuilding(80,0,0,GL.scene);

objects.push(visualObjectSphere(10,0,20,0,GL.scene));

// Create camera lookat collisions
var raycam = new RayCamera();
raycam.setDirection();
for(var i = 0; i < objects.length; i++) {
  // Objects MUST have a mesh property
  raycam.addCollider(objects[i].mesh);
}


// Main loop
window.now = 0;
(function glLoop(){
  window.requestAnimationFrame(glLoop);
  window.elapsed = Date.now() - window.now;

  // Update logic
  raycam.setDirection();
  raycam.checkCollisions();

  // Render logic
  GL.update(window.elapsed);
  GL.render(window.elapsed);

  window.now = Date.now();
})();
