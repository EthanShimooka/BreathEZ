/**
 * Created by E on 7/11/2015.
 */

//visualObject.js contains functions for drawing objects using the three.js d3.js library


//visualObjectSphere() --
// Takes a radius and a set of coordinates, converts to a Three.Vector3 Object, and maps it, with radius to a
// THREE.Sphere object. Returns THREE.Sphere Object.

function visualObjectSphere(radius, x, y, z, scene){

    this.x = x;
    this.y = y;
    this.z =  z;
    this.radius = radius;
    this.scene = scene;

    var scale = 10; //vertex optimization fornula here
    var sgeometry = new THREE.SphereGeometry(radius,scale ,scale);
    var smaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
    var sphereA = new THREE.Mesh(sgeometry,smaterial);

    sphereA.position.set(x,y,z);

    scene.add(sphere);

    return this;
}















