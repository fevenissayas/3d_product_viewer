import * as THREE from 'three';

// Create our chair
export function createProduct() {
  const product = new THREE.Group();
  
  // the Seat 
  const seatGeometry = new THREE.BoxGeometry(2, 0.2, 2);
  const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x3366cc });
  const seat = new THREE.Mesh(seatGeometry, seatMaterial.clone());
  seat.position.y = 1;
  seat.userData = { name: 'Seat' };
  product.add(seat);
  
  // the Backrest
  const backrestGeometry = new THREE.BoxGeometry(2, 2, 0.2);
  const backrestMaterial = new THREE.MeshStandardMaterial({ color: 0x3366cc });
  const backrest = new THREE.Mesh(backrestGeometry, backrestMaterial.clone());
  backrest.position.set(0, 2, -0.9);
  backrest.userData = { name: 'Backrest' };
  product.add(backrest);
  
  // the Legs
  const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
  const legMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
  for (let i = 0; i < 4; i++) {
    const leg = new THREE.Mesh(legGeometry, legMaterial.clone());
    leg.position.set((i % 2 === 0 ? 0.8 : -0.8), 0.5, (i < 2 ? 0.8 : -0.8));
    leg.userData = { name: `Leg ${i + 1}` };
    product.add(leg);
  }
  
  // Center product
  product.position.set(0, 0, 0);
  
  return product;
}