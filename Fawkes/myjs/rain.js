var cubeLength = 200;
var container;

var camera, scene, renderer;

var cube, plane;

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = (window.innerWidth*9/16) / 2;

init();
animate();

function init() {

	var loader = new THREE.TextureLoader();
	loader.crossOrigin = true;

	var texture = loader.load('img/barrels.png');
	var cbmaterial = new THREE.MeshBasicMaterial({map: texture});
	var cbgeometry = new THREE.PlaneBufferGeometry(windowHalfX*1,windowHalfY/2,200);
	test = new THREE.Mesh( cbgeometry, cbmaterial );
	test.position.set(0,windowHalfY/3,0);


	container = document.createElement( 'div' );
	document.body.appendChild( container );

	// var info = document.createElement( 'div' );
	// info.style.position = 'absolute';
	// info.style.top = '10px';
	// info.style.width = '100%';
	// info.style.textAlign = 'center';
	// info.innerHTML = 'Drag to spin the cube';
	// container.appendChild( info );

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / (window.innerWidth*9/16), 1, 1000 );
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
			if(cube.position.x < -windowHalfX*2) {
				cube.position.x = randomX;
				cube.position.y = windowHalfY*2;
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

	var geometry = new THREE.PlaneBufferGeometry( windowHalfX*5, windowHalfY );
	geometry.rotateX( 0 );

	var material = new THREE.MeshBasicMaterial( { color: 0x8B4513, overdraw: 1 } );

	plane = new THREE.Mesh( geometry, material );
	plane.position.z = -300;
	plane.position.y = -150;
	scene.add( plane );

	var plane2;

	//Plane2
	var geometry2 = new THREE.PlaneBufferGeometry(windowHalfX*10, windowHalfY*10 );
	geometry2.rotateX( 0 );

	var material2 = new THREE.MeshBasicMaterial( { color: 0xFF4500, overdraw: 1 } );

	plane2 = new THREE.Mesh( geometry2, material2 );
	plane2.position.z = -400;
	plane2.position.y = 0;
	scene.add( plane2 );

	renderer = new THREE.CanvasRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerWidth *9/16 );
	container.appendChild( renderer.domElement );

	// stats = new Stats();
	// container.appendChild( stats.dom );

	// document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	// document.addEventListener( 'touchstart', onDocumentTouchStart, false );
	// document.addEventListener( 'touchmove', onDocumentTouchMove, false );

	//

	window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener( 'mousemove', onMouseMove, false );
	function onMouseMove(e) {
		var mouseY = e.clientY;
		var mouseX = e.clientX;
		console.log(mouseY,previousY);
		if(previousY < mouseY) {
			// plane.position.y -= 5;
			// plane2.position.y -= 1;
			// test.position.y -= 1;
			camera.position.y +=1;

		} else if (previousY > mouseY) {
			// plane.position.y += 5;
			// test.position.y += 1;
			// plane2.position.y -= 1;
			camera.position.y -=1;
		}
		if(previousX < mouseX) {
			// plane.position.x += 5;
			// test.position.x += 1;
			// plane2.position.y -= 1;
			camera.position.x +=1;	
		} else if (previousX > mouseX) {
			// plane.position.x -= 5;
			// test.position.x -= 1;
			// plane2.position.y -= 1;
			camera.position.x -=1;
		}
		previousY = mouseY;
		previousX = mouseX;
	}
	scene.add( test );

}


//

function animate() {

	requestAnimationFrame( animate );

	// stats.begin();
	render();
	// stats.end();

}

function render() {

	// plane.rotation.y = cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
	renderer.render( scene, camera );

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = (window.innerWidth*9/16) / 2;

	camera.aspect = window.innerWidth / (window.innerWidth*9/16);
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerWidth*9/16 );

}
var previousX;
var previousY;

// camera.rotation.y = 0.02;