import * as THREE from 'three';

// Animate camera to orbit around the product
export function animateCamera(camera, time) {
  const radius = 5;
  const speed = 0.0005;
  const angle = time * speed;
  
  // Update camera position using polar coordinates
  camera.position.x = radius * Math.cos(angle);
  camera.position.z = radius * Math.sin(angle);
  camera.position.y = 3;
  
  // Keep camera looking at the product
  camera.lookAt(0, 1, 0);
}