# Interactive 3D Product Viewer

An interactive 3D viewer built with [Three.js](https://threejs.org/) that displays a product (a wooden chair) with smooth floating animation, camera auto-rotation, part highlighting on click, and dynamic info display.

---

## Features

- Realistic 3D chair made of geometric primitives
- Smooth floating animation and auto-rotating camera
- Clickable chair parts with temporary highlight and name display
- Responsive resizing
- Clean modular structure using ES Modules

---

## Folder Structure

```plaintext
project/
├── public/
│   ├── index.html           # Entry HTML file
│   └── styles/
│       └── main.css         # Basic styling
├── src/
│   ├── core/
│   │   ├── initScene.js        # Initializes scene, camera, renderer, controls
│   │   ├── addLighting.js      # Adds ambient and directional lights
│   │   └── cameraAnimation.js  # Auto-rotating camera animation
│   ├── product/
│   │   └── createProduct.js    # Builds the 3D chair
│   ├── interaction/
│   │   └── interaction.js      # Handles raycasting and user clicks
│   └── main.js              # Entry point: glues everything together
```

---

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/interactive_3d_product_viewer.git
cd interactive_3d_product_viewer
```

### 2. Install Dependencies (Optional, if using build tools)

If you're using a bundler like **Vite**, **Parcel**, or **Webpack**:

```bash
npm install
```

Otherwise, you can run directly using a static server.

### 3. Run Locally

Using a simple development server:

```bash
# If you have Python installed
python -m http.server --directory public
```

Then open your browser at [http://localhost:8000](http://localhost:8000)

Alternatively, use the VSCode extension **Live Server** to serve the `public/` folder.

---

## How to Use

* Click on chair parts (seat, backrest, legs) to:
  * Show part name
  * Briefly highlight in red
  * Animate with a quick scale-up effect

* The camera orbits around the chair unless you are dragging (panning/zooming).

* Double-clicking or interacting won’t stop the auto-rotation (by design).

---

## Built With

* [Three.js](https://threejs.org/) – WebGL library
* [JavaScript ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* Basic HTML/CSS

---

## License

MIT License. Feel free to use and adapt.

---