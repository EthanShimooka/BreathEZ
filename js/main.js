visualObjectLighting();
visualObjectPointLighting();
visualObjectGrid();
visualObjectSkybox();


var objects = [];
objects.push(visualObjectSmokeStack(0,0,160,GL.scene));
objects.push(visualObjectSmokeStack(0,0,-160,GL.scene));
objects.push(visualObjectSmokeStack(-160,0,0,GL.scene));
objects.push(visualObjectSmokeStack(160,0,0,GL.scene));
visualObjectBuilding(0,0,160,GL.scene);
visualObjectBuilding(0,0,-160,GL.scene);
visualObjectBuilding(-160,0,0,GL.scene);
visualObjectBuilding(160,0,0,GL.scene);

objects.push(visualObjectSphere(10,0,20,0,GL.scene));

// Create 4 smoke stacks

// Create camera lookat collisions
var raycam = new RayCamera();
raycam.setDirection();
for(var i = 0; i < objects.length; i++) {
  // Objects MUST have a mesh property
  raycam.addCollider(objects[i].mesh);
}

/*
d3.csv("airdata.csv", function(d) {
  return {
    year: +d.Year,
    sulphur: +d.SulphurDioxide,
    nitrogen: +d.NitrogenDioxide,
    pm10: +d.ParticulateMatterPM10,
    pm2: +d.ParticulateMatterPM2_5

  };
}, function(error, rows) {
  console.log(rows);

});
*/

//test data
var data  = [12, 11,9, 11,1,13,14];
var data2 = [22, 2,22,23,25,25,25];
var data3 = [27,28,29,26,27,29,31];
var data4 = [19,16,19,17,17,19,20];

var col_s = 0xB2B200;
var col_n = 0x4DB84D;
var col_p2 = 0xFF4747;
var col_p10 = 0xD63385;

var v1 = visualObjectSphereColumn(data,  col_s,     0,  180, GL.scene, raycam);
var v2 = visualObjectSphereColumn(data2, col_n,     0, -180, GL.scene, raycam);
var v3 = visualObjectSphereColumn(data3, col_p10, 180,    0, GL.scene, raycam);
var v4 = visualObjectSphereColumn(data4, col_p2, -180,    0, GL.scene, raycam);

//visualObjectSphere(10,0,20,0,GL.scene);




// Main loop
window.now = 0;
(function glLoop(){
  window.requestAnimationFrame(glLoop);
  window.elapsed = Date.now() - window.now;

  // Update logic
  raycam.setDirection();
  raycam.checkCollisions();
  for(var i = 0; i < v1.spheres.length; i++) {
    v1.spheres[i].update();
    v2.spheres[i].update();
    v3.spheres[i].update();
    v4.spheres[i].update();
  }

  // Render logic
  GL.update(window.elapsed);
  GL.render(window.elapsed);

  window.now = Date.now();
})();
