function RayCamera() {
  this.raycaster = new THREE.Raycaster();
  this.raycaster.setFromCamera(new THREE.Vector2(0, 0), GL.camera);
  console.log(this.raycaster);
  this.arrow = new THREE.ArrowHelper(
    this.raycaster.ray.direction,
    this.raycaster.ray.origin,
    100, 0xFFFFFF
  );
  GL.scene.add(this.arrow);
  this.colliders = [];

  this.active_collision = false;
  this.active_collider  = undefined;
  return this;
}

RayCamera.prototype.setDirection = function() {
  this.raycaster.setFromCamera(new THREE.Vector2(0, 0), GL.camera);
  this.arrow.setDirection(this.raycaster.ray.direction);
};

RayCamera.prototype.addCollider = function(mesh) {
  this.colliders.push(mesh);
};

RayCamera.prototype.delCollider = function(mesh) {
  // Remove mesh from collider list
  //this.colliders.push(mesh);
};

RayCamera.prototype.checkCollisions = function() {
  var collisions = this.raycaster.intersectObjects(this.colliders);
  if(collisions.length > 0) {
    // Only set first collision
    this.active_collider   = collisions[0];
    this.active_collision  = true;
    console.log(this.active_collider);
  } else {
    this.active_collider    = null;
    this.active_collision  = false;
  }

  if(this.active_collision) {
    // RayCamera was already pointing at an object
    if(this.active_collider === null) {
      this.active_collider  = null; // Deselect object
      this.active_collision = false;
    }
  }
};
