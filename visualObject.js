/**
 * Created by E on 7/11/2015.
 */

//visualObject.js contains functions for drawing objects using the three.js d3.js library


//visualObjectSphere() --
// Takes a radius and a set of coordinates, converts to a Three.Vector3 Object, and maps it, with radius to a
// THREE.Sphere object. Returns THREE.Sphere Object.

function visualObjectSphere(radius, x, y, z){

    var center = new THREE.Vector3(x,y, z);

    var sphereA = new THREE.Sphere(center, radius);
    return sphereA;

}











