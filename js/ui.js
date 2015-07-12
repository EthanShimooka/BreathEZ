// Create UI plane
function UI(x, y, width, height, scene) {
  this.x = x;
  this.y = y;
  this.scene = scene;

  this.elements = [];
}

UI.prototype.add3DElement = function(x, y) {
  // Add a 3D element to the UI
}

UI.prototype.addElement = function(x, y, element) {
  // Add a 2D element to the UI
}

UI.prototype.setCursor = function(x, y) {
  // Set UI's cursor to this location
};

UI.prototype.select = function() {
  // If an element is at this position, do element's callback
}

UI.prototype.render = function(dt) {
  // UPdate all UI elements, and base element
}



// UI Elements
function UIElement(width, height, dimension) {
  this.action = function() { return undefined; };
}

UIElement.prototype.setAction(callback) {
  this.action = callback;
}

function UI3DElement(object) {
  return this;
}

UI3Delement.prototype.setAction(callback) {
  this.action = callback;
}
