import * as THREE from 'three';

// Add ambient and directional lighting to the scene
export function addLighting(scene) {
  // Ambient light for general illumination
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);
  
  // Directional light for highlights and shadows
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(5, 5, 5);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
}