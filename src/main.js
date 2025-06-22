import { initScene } from './core/initScene.js';
import { createProduct } from './product/createProduct.js';
import { addLighting } from './core/addLighting.js';
import { setupInteraction } from './interaction/interaction.js';
import { animateCamera } from './core/cameraAnimation.js';

// Initialize scene, camera, renderer, and controls
const { scene, camera, renderer, controls } = initScene();

// Create the product which is our chair and add to scene
const product = createProduct();
scene.add(product);

// Add lighting to our scene
addLighting(scene);

// Setup interaction for product parts
const interactionData = setupInteraction(scene, camera, renderer.domElement, product);

// Animation loop
let isUserInteracting = false;
controls.addEventListener('start', () => { isUserInteracting = true; });
controls.addEventListener('end', () => { isUserInteracting = false; });

function animate(time) {
  requestAnimationFrame(animate);
  
  // Update product animation (slight float)
  product.position.y = Math.sin(time * 0.001) * 0.1;
  
  // Animate camera if not user-controlled
  if (!isUserInteracting) {
    animateCamera(camera, time);
  }
  
  renderer.render(scene, camera);
}
animate(0);