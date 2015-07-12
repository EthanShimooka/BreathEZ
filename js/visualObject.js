/**
 * Created by E on 7/11/2015.
 */

//visualObject.js contains functions for drawing objects using the three.js d3.js library


//visualObjectSphere() --
// Takes a radius and a set of coordinates, converts to a Three.Vector3 Object, and maps it, with radius to a
// THREE.Sphere object. Returns THREE.Sphere Object.

function visualObjectSphere(radius, x, y, z, scene, colors){

    this.x = x;
    this.y = y;
    this.z =  z;
    this.radius = radius;
    this.scene = scene;
    this.colors = colors;

    var scale = 10; //vertex optimization fornula here
    var sgeometry = new THREE.SphereGeometry(radius,scale ,scale);
    var smaterial = new THREE.MeshPhongMaterial({color: colors});
    var sphereA = new THREE.Mesh(sgeometry,smaterial);


    this.bboxed = THREE.Sphere(THREE.Vector3(x,y,z),radius);
    this.bboxed_type = "Sphere";

    sphereA.position.set(x,y,z);




    GL.scene.add(sphereA);

}



function visualObjectSphere(radius, x, y, z, scene, colors){

    this.x = x;
    this.y = y;
    this.z =  z;
    this.radius = radius;
    this.scene = scene;
    this.colors = colors;

    var scale = 10; //vertex optimization fornula here
    var sgeometry = new THREE.SphereGeometry(radius,scale ,scale);
    var smaterial = new THREE.MeshPhongMaterial({color: colors});
    var sphereA = new THREE.Mesh(sgeometry,smaterial);


    this.bboxed = THREE.Sphere(THREE.Vector3(x,y,z),radius);
    this.bboxed_type = "Sphere";

    sphereA.position.set(x,y,z);




    GL.scene.add(sphereA);

}





//VisualObjectSphereColumn() - takes in array and produces data plume
// PARAMS:
//
//   data : an Array, with position as Year, from [0],being earliest, to .length, being latest
//   color: Base Color hex value
//   x: x coord of plume axis
//   z: z coord of plume axis

function visualObjectSphereColumn(data, color, x,z,scene )
{
    this.x = x;
    this.z = z;
    this.data = data;
    this.color = color;
    this.scene = scene;
    var y = 20;
for(i = 0; i < data.length; i++)
{

    color+=10;


    visualObjectSphere(Math.pow(((0.2)*data[i]),2), x, (y+=(3*(data[i]))), z, scene, color);

}


}



//visualObjectSmokeStack()
//draws chimnay at x, and y

function visualObjectSmokeStack(x,y,z, scene) {

    this.x = x;
    this.y = y;
    this.z = z;

    this.scene = scene;

    var sgeometry = new THREE.CylinderGeometry(2, 6, 50, 52);
    this.bboxed = new THREE.Box3(THREE.Vector3(x,y,z),THREE.Vector3(x+13,y+51,z+13));
    this.bboxed_type = "Box";
    var smaterial = new THREE.MeshPhongMaterial({
        color: 0x331A00,
        specular: 0xffffff,
        shininess: 1,
        shading: THREE.FlatShading

    });

    var smoke = new THREE.Mesh(sgeometry, smaterial);
    smoke.position.set(x, y, z);

    GL.scene.add(smoke);
}


function visualObjectBuilding(x,y,z,scene){


    this.x = x;
    this.y = y;
    this.z = z;

    this.scene = scene;
    var geometry = new THREE.BoxGeometry( 15, 10, 13 );
    var smaterial = new THREE.MeshPhongMaterial({
        color: 0x754719,
        specular: 0xffffff,
        shininess: 1,
        shading: THREE.FlatShading
        //map: texture,
        //  specularMap: spectexture
    });
    var cube = new THREE.Mesh( geometry, smaterial );
    cube.position.set(x+3,y,z);

    GL.scene.add( cube );
}


//visualObjectGrid() -- draws grid mesh
//

function visualObjectGrid() {

    var texture = THREE.ImageUtils.loadTexture(
        'textures/patterns/citytile.png'
    );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat = new THREE.Vector2(50, 50);
    texture.anisotropy = renderer.getMaxAnisotropy();

  /* spectexture = THREE.ImageUtils.loadTexture(
        'textures/patterns/yellowchecker.png'
    );
    spectexture.wrapS = THREE.RepeatWrapping;
    spectexture.wrapT = THREE.RepeatWrapping;
    spectexture.repeat = new THREE.Vector2(50, 50);
    spectexture.anisotropy = renderer.getMaxAnisotropy();
*/

    var material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        shininess:0.2,
        shading: THREE.FlatShading,
        map: texture

    });

    var geometry = new THREE.PlaneGeometry(1000, 1000);

    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    GL.scene.add(mesh);

}

//Ambiant light
function visualObjectLighting() {

    var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
    GL.scene.add(light);
}

//Adds point Light
//
function visualObjectPointLighting() {

    var objlight = new THREE.PointLight(0xffffff, 0.3);
    objlight.position.set(0, 150, 70);
    GL.scene.add(objlight);
}



