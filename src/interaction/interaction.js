import * as THREE from 'three';

// Setup raycasting and mouse interaction
export function setupInteraction(scene, camera, canvas, product) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const infoPanel = document.getElementById('info-panel');
  let originalMaterial = null;
  
  canvas.addEventListener('click', (event) => {
    // Calculate mouse position in device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Update raycaster
    raycaster.setFromCamera(mouse, camera);
    
    // Find intersected objects
    const intersects = raycaster.intersectObjects(product.children);
    
    if (intersects.length > 0) {
      const selectedMesh = intersects[0].object;
      
      // Show part name
      infoPanel.style.display = 'block';
      infoPanel.textContent = selectedMesh.userData.name;
      
      // Brief scale animation
      selectedMesh.scale.set(1.1, 1.1, 1.1);
      setTimeout(() => {
        selectedMesh.scale.set(1, 1, 1);
      }, 200);
      
      // Change color temporarily
      if (!originalMaterial) {
        originalMaterial = selectedMesh.material.clone();
      }
      selectedMesh.material.color.set(0xff0000);
      setTimeout(() => {
        selectedMesh.material = originalMaterial;
        originalMaterial = null;
      }, 200);
    } else {
      infoPanel.style.display = 'none';
    }
  });
  
  return { raycaster, mouse };
}