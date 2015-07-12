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
    var smaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
    var sphereA = new THREE.Mesh(sgeometry,smaterial);

    sphereA.position.set(x,y,z);

    GL.scene.add(sphereA);

}

//visualObjectSmokeStack()
//draws chimnay at x, and y

function visualObjectSmokeStack(x,y,z, scene) {

    this.x = x;
    this.y = y;
    this.z = z;

    this.scene = scene;

    var scale = 10; //vertex optimization fornula here
    var sgeometry = new THREE.CylinderGeometry(2, 6, 40, 52);
    var smaterial = new THREE.MeshPhongMaterial({
        color: 0xCC6699,
        specular: 0xffffff,
        shininess: 5,
        shading: THREE.FlatShading
        //map: texture,
        //  specularMap: spectexture
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
    var geometry = new THREE.BoxGeometry( 10, 10, 10 );
    var smaterial = new THREE.MeshPhongMaterial({
        color: 0xCC6699,
        specular: 0xffffff,
        shininess: 5,
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

function visualObjectLighting() {

    var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
    GL.scene.add(light);
}

function visualObjectPointLighting() {
    var objlight = new THREE.PointLight(0xffffff, 0.7);
    objlight.position.set(0, 50, 70);
    GL.scene.add(objlight);
}










