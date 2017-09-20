var cubeLength = 150;
var container, stats;

var camera, scene, renderer;

var cube, plane;

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {

				// container = document.createElement( 'div' );
				// document.body.appendChild( container );

				// var info = document.createElement( 'div' );
				// info.style.position = 'absolute';
				// info.style.top = '10px';
				// info.style.width = '100%';
				// info.style.textAlign = 'center';
				// info.innerHTML = 'Drag to spin the cube';
				// container.appendChild( info );

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.y = 150;
				camera.position.z = 500;

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xf0f0f0 );


				// Cube
				function createCube() {
					var cube;
					randomWidth = Math.random() * 100 + 50;
					var geometry = new THREE.BoxGeometry( randomWidth, 2, 1 );


					var material = new THREE.MeshBasicMaterial( { color: 0x000066, overdraw: 0.5 } );
					material.opacity = Math.random() - .1;

					cube = new THREE.Mesh( geometry, material );
					// cube.position.y = window.innerHeight/.9 *Math.random() -300;
					var randomX = window.innerWidth *2 * Math.random() + 100;
					scene.add( cube );
					cube.position.set(randomX,150,0)
					cube.rotation.z = 45;
					cube.rotation.y = 0;

					
					speed = Math.random() * 10 + 5;
					function runCube() {
						if(cube.position.x < -window.innerWidth) {
							cube.position.x = randomX;
							cube.position.y = window.innerHeight;
						}else {
							cube.position.x -= speed
						}
						if(cube.position.y < -500) {
							cube.position.y = window.innerHeight/.9 *Math.random() +600;
							cube.position.x = window.innerWidth * Math.random();
						} else {
							cube.position.y -= speed
						}

					}
					setInterval(runCube, 10)
				}
				
				for (var i = cubeLength; i >= 0; i--) {
					createCube()
				}
				

				// Plane

				var geometry = new THREE.PlaneBufferGeometry( window.innerWidth, window.innerHeight/2 );
				geometry.rotateX( 0 );

				var material = new THREE.MeshBasicMaterial( { color: 0x8B4513, overdraw: 1 } );

				plane = new THREE.Mesh( geometry, material );
				plane.position.z = -300;
				plane.position.y = -150;
				scene.add( plane );

				var plane2;
				var geometry2 = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight );
				geometry2.rotateX( 0 );

				var material2 = new THREE.MeshBasicMaterial( { color: 0xFF4500, overdraw: 1 } );

				plane2 = new THREE.Mesh( geometry2, material2 );
				plane2.position.z = -400;
				plane2.position.y = window.innerHeight/2;
				scene.add( plane2 );

				renderer = new THREE.CanvasRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				stats = new Stats();
				document.body.appendChild( stats.dom );

				// document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				// document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				// document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}
function animate() {

	requestAnimationFrame( animate );
	render();
}

function render() {
	renderer.render( scene, camera );
}
function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

console.log(window.innerHeight);
