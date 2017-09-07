














// let galleryImages = [
// 'img/img.jpg'
// ]










// let viewerContainer = document.getElementById('viever');

// let clock = new THREE.clock();

// let camera;
// let scene;
// let renderer;
// let textureLoader;
// let viewer;

// function init() {
// 	scene = new THREE.Scene();
// 	camera = new THREE.PerspectiveCamera(70, Window.innerWidth / window.innerHeight, 0.1, 1000);
// 	textureLoader = THREE.TextureLoader();

// 	//image viewer
// 	let viewerGeometry = new THREE.SphereGeometry(500, 60, 40);
// 	viewerGeometry.scale(-1, 1, 1);

// 	let viewerMaterial = new THREE.MeshBasicMaterial({
// 		map: textureLoader.load(galleryImages[0])
// 	});

// 	viewer = new THREE.Mesh(viewerGeometry, viewerMaterial);
// 	viewer.rotation.y = -Math.PI /2;
// 	scene.add(viewer);

// 	//render
// 	render = new THREE.WebGLRender({antialias: true});
// 	camera.setPixelRatio(window.devicePixelRatio);
// 	renderContainer.appendChild(render.domElement);

// 	//window resizing
// 	function onWindowResizing(){
// 		camera.aspect = window.innerWidth / window.innerHeight;
// 		camera.updateProjecttionMatrix();

// 		render.setSize(window.innerWidth, window.innerHeight);
// 	}
// 	window.addEventListener('resize', onWindowResize, false);

// 	animate();
// }





// function animate() {
// 	let delta = clock.getDelta()*60;

// 	renderer.render(scene, camera);

// 	window.requestAnimationFrame(animate);
// }

// init();