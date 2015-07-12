
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
var data = [12, 11,9, 11,1,13,14];
var col_s = 0xB2B200;
visualObjectSphereColumn(data,col_s,0,80,GL.scene );
var col_n = 0x4DB84D;
visualObjectSphereColumn(data,col_n,0,-80,GL.scene );
var col_p10 = 0xD63385;

visualObjectSphereColumn(data,col_p10,80,0,GL.scene );
var col_p2 = 0xFF4747;
visualObjectSphereColumn(data,col_p2,-80,0,GL.scene );

//visualObjectSphere(10,0,20,0,GL.scene);




function sphere_animate()
{


}



// Main loop
window.now = 0;
(function glLoop(){
  window.requestAnimationFrame(glLoop);
  window.elapsed = Date.now() - window.now;

  // Update logic
  // Render logic

  sphere_animate();

  GL.update(window.elapsed);
  GL.render(window.elapsed);

  window.now = Date.now();
})();
