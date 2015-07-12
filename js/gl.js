var canvas_id = "gl_container";

window.GL = (function(canvas) {
  // Set up renderer and canvas
  this.renderer = new THREE.WebGLRenderer({ alpha: true });
  this.renderer.setClearColor( 0x53538A, 1);

  // Render canvas onto page
  this.canvas = this.renderer.domElement;
  this.container = document.getElementById(canvas)
  this.container.appendChild(this.canvas);;

  // Set up camera
  this.camera = new THREE.PerspectiveCamera(
    90,   // FOV
    1,    // Aspect ratio
    0.1,  // Near
    10000 // Far
  );
  this.camera.position.set(0, 20, 0);

  // Set up orbit controls
  this.controls = new THREE.OrbitControls(this.camera, this.canvas);
  this.controls.rotateUp(Math.PI / 4);
  this.controls.target.set(
    this.camera.position.x,
    this.camera.position.y + 0.1,
    this.camera.position.z - 0.1
  );
  this.controls.noZoom = true;
  this.controls.noPan  = true;

  // Resize logic
  function resize() {
    var width  = this.container.offsetWidth;
    var height = this.container.offsetHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    // effect.setSize(width, height);
  }
  window.addEventListener('resize', resize, false);

  this.fullScreen = function() {
    if (this.container.requestFullscreen) {
      this.container.requestFullscreen();
    } else if (this.container.msRequestFullscreen) {
      this.container.msRequestFullscreen();
    } else if (this.container.mozRequestFullScreen) {
      this.container.mozRequestFullScreen();
    } else if (this.container.webkitRequestFullscreen) {
      this.container.webkitRequestFullscreen();
    }
  }
  this.canvas.addEventListener("click", this.fullscreen, false);

  // VR Orientation controls
  this.setOrientationControls = function(e) {
    if (!e.alpha) {
      return;
    }

    this.controls = new THREE.DeviceOrientationControls(this.camera, true);
    if(this.controls !== undefined) {
      this.controls.connect();
      this.controls.update();

      window.removeEventListener("deviceorientation", this.setOrientationControls, true);
    }
  }
  window.addEventListener("deviceorientation", this.setOrientationControls, true);

  // Update logic
  this.update = function(dt) {
    resize();

    this.camera.updateProjectionMatrix();
    this.controls.update(dt);
  };

  this.render = function(dt) {
    this.renderer.render(scene, camera);
  };

  this.scene = new THREE.Scene();
  this.scene.add( this.camera );

  return this;
})(canvas_id);
