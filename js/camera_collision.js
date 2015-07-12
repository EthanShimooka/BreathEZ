function Camera(cam) {
  this.camera = cam;
  this.ray = THREE.Ray(
    new THREE.Vector3(
      this.camera.position.x,
      this.camera.position.y,
      this.camera.position.z
    ),
    new THREE.Vector3(0, 0, 0)
  );
  this.colliders = [];

  this.active_collision = false;
  this.active_collider  = undefined;
}

Camera.prototype.setDirection = function() {
  // Set this.ray to direction of quaternion
  this.ray.direction =
    new THREE.Vector3(0,0,0).applyQuaternion(this.camera.quaternion).normalize();
}

Camera.prototype.addCollider = function(object) {
  this.colliders.push(object);
};

Camera.prototype.delCollider = function(object) {
  // Remove mesh from collider list
  //this.colliders.push(object);
};

Camera.prototype.checkCollisions = function() {
  var collision = null;
  var collider  = null;

  for(var i = 0; i < this.colliders.length; i++) {
    // TODO: replace with actual bounding box key
    if(this.colliders[i].bboxed === undefined) {
      console.log("Collider does not have a bounding box");
      continue;
    } else {
      // Check if ray is colliding
      switch(this.colliders[i].bboxed_type) {
        case "Box":
          collision = this.ray.intersectBox(this.colliders[i].bboxed);
          break;
        case "Sphere":
          collision = this.ray.intersectSphere(this.colliders[i].bboxed);
          break;
      }

      if(collision != null) {
        // Exit on first collision
        collider = this.colliders[i];
        this.active_collider   = collider;
        this.active_collision  = true;
        console.log("Collision");
        break;
      }
    }
  }

  if(this.active_collision) {
    // Camera was already pointing at an object
    if(this.active_collider === null) {
      this.active_collider  = null; // Deselect object
      this.active_collision = false;
    }
  }
}
