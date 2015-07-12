
visualObjectLighting();
visualObjectPointLighting();
visualObjectGrid();

visualObjectSmokeStack(0,0,80,GL.scene);
visualObjectSmokeStack(0,0,-80,GL.scene);
visualObjectSmokeStack(-80,0,0,GL.scene);
visualObjectSmokeStack(80,0,0,GL.scene);
visualObjectBuilding(0,0,80,GL.scene);
visualObjectBuilding(0,0,-80,GL.scene);
visualObjectBuilding(-80,0,0,GL.scene);
visualObjectBuilding(80,0,0,GL.scene);




//if (flag === true)
  //do logic


visualObjectSphere(10,0,20,0,GL.scene);




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
