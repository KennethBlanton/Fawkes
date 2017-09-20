
var cubeLength = 200;
var container;
console.log('hello World')

var camera, scene, renderer;
var backgroundImage;

var cube, plane;
var fawkes, badGuys;

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;
var maxHeight = (window.innerWidth*(9/16));
var maxWidth = window.innerWidth;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = (window.innerWidth*(9/16)) / 2;
var borderLeft,borderRight,borderTop,borderBottom;

init();
animate();

function init() {

	var loader = new THREE.TextureLoader();
	loader.crossOrigin = true;

	var barrelsLoad = loader.load('img/barrels.png');
	var badGuysLoad = loader.load('img/badGuys.png');
	var fawkesLoad = loader.load('img/fawkes.png');
	var lanternLoad = loader.load('img/lantern.png');
	var columnsLoad = loader.load('img/columns.png');
	var backgroundLoad = loader.load('img/background.png');
	var rainLoad = loader.load('img/rain.png');
	var puddleLoad = loader.load('img/puddle.png');
	var fuseLoad = loader.load('img/fuse.png');
	var rainMaterial = new THREE.MeshBasicMaterial({map:rainLoad});
	var barrelMaterial = new THREE.MeshBasicMaterial({map: barrelsLoad});
	var badGuysMaterial = new THREE.MeshBasicMaterial({map: badGuysLoad});
	var fawkesMaterial = new THREE.MeshBasicMaterial({map: fawkesLoad});
	var lanternMaterial = new THREE.MeshBasicMaterial({map: lanternLoad});
	var columnsMaterial = new THREE.MeshBasicMaterial({map: columnsLoad});
	var puddleMaterial = new THREE.MeshBasicMaterial({map:puddleLoad});
	var backgroundMaterial = new THREE.MeshBasicMaterial({map: backgroundLoad});
	var fuseMaterial = new THREE.MeshBasicMaterial({map:fuseLoad});
	var backgroundGeo = new THREE.PlaneBufferGeometry(window.innerWidth*5,maxHeight*12);
	var barrelsGeo = new THREE.PlaneBufferGeometry(windowHalfX*1.2,windowHalfY*.6);
	var badGuysGeo = new THREE.PlaneBufferGeometry(windowHalfX*.4,windowHalfY*.3);
	var fawkesGeo = new THREE.PlaneBufferGeometry(windowHalfX*.08,windowHalfY*.3);
	var lanternGeo = new THREE.PlaneBufferGeometry(windowHalfX*.09,windowHalfY*.15);
	var columnsGeo = new THREE.PlaneBufferGeometry(windowHalfX*1.1,windowHalfY*1.2);
	var puddleGeo = new THREE.PlaneBufferGeometry(windowHalfX*.08,windowHalfY*.07);
	var fuseGeo = new THREE.PlaneBufferGeometry(windowHalfX*.6,windowHalfY*.35);
	backgroundImage = new THREE.Mesh(backgroundGeo,backgroundMaterial); 
	var barrels = new THREE.Mesh(barrelsGeo,barrelMaterial);
	badGuys = new THREE.Mesh(badGuysGeo, badGuysMaterial);
	fawkes = new THREE.Mesh(fawkesGeo, fawkesMaterial);
	var lantern = new THREE.Mesh(lanternGeo,lanternMaterial);
	var columns = new THREE.Mesh(columnsGeo, columnsMaterial);
	var groundMaterial = new THREE.MeshBasicMaterial( { color: 0x1A130A, overdraw: 0.5 } ); 
	var groundGeo = new THREE.PlaneBufferGeometry( windowHalfX*5, windowHalfY*2.5 );
	var ground = new THREE.Mesh(groundGeo,groundMaterial);
	var fuse = new THREE.Mesh(fuseGeo,fuseMaterial);
	var puddle1 = new THREE.Mesh(puddleGeo,puddleMaterial);
	var puddle2 = new THREE.Mesh(puddleGeo,puddleMaterial);
	var lanternLeft = new THREE.Mesh(lanternGeo, lanternMaterial);
	groundMaterial.opacity = .75; 
	backgroundImage.position.set(0,0,-800);
	backgroundImage.material.depthTest = false;
    backgroundImage.material.depthWrite = false;
    columns.position.set(10,windowHalfY*.35,-100);
    barrels.position.set(0,windowHalfY/2,-400);
    ground.position.set(0,-windowHalfY,-550)
    badGuys.position.set(windowHalfX*.39,0,-200)
    fawkes.position.set(-windowHalfX*.35,0,-200);
    // fawkes.rotation.y = Math.PI / 2;
    lantern.position.set(windowHalfX*.28,windowHalfY*.045,-250);
    lanternLeft.position.set(-windowHalfX*.5,windowHalfY*.045,-450);
    puddle1.position.set(-windowHalfX*.6,-windowHalfY*.04,-500);
    puddle2.position.set(0,-windowHalfY*.3,-500);
    fuse.position.set(-windowHalfX*0.2,windowHalfY*0.08,-500)


    borderLeft = new THREE.Mesh(new THREE.PlaneBufferGeometry(windowHalfX*.8,maxHeight*2),new THREE.MeshBasicMaterial({color: 0x000000}));
    borderRight = new THREE.Mesh(new THREE.PlaneBufferGeometry(windowHalfX*.3,windowHalfY*2),new THREE.MeshBasicMaterial({color: 0x000000}));
    borderTop = new THREE.Mesh(new THREE.PlaneBufferGeometry(windowHalfX*2,windowHalfY*.7),new THREE.MeshBasicMaterial({color: 0x000000}));
    borderBottom = new THREE.Mesh(new THREE.PlaneBufferGeometry(windowHalfX*2,windowHalfY*.2),new THREE.MeshBasicMaterial({color: 0x000000}));

    borderLeft.position.set(-maxWidth*.8,windowHalfY*1.2,0);
    borderRight.position.set(windowHalfX*.6,0,0);
    borderTop.position.set(0,windowHalfY*1.5,0);
    borderBottom.position.set(0,-windowHalfY*.2,0);
	// var cbgeometry = new THREE.PlaneBufferGeometry(windowHalfX*1,windowHalfY/2,200);
	// test = new THREE.Mesh( cbgeometry, cbmaterial );
	// test.position.set(0,windowHalfY/3,0);


	container = document.createElement( 'div' );
	document.body.appendChild( container );
	backgroundImage.position.y = -maxHeight*2.2;



	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / (window.innerWidth*(9/16)), 1, 2000 );
	camera.position.y = 150;
	camera.position.z = 500;

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xf0f0f0 );
	scene.add(backgroundImage);
	scene.add(barrels,badGuys,fawkes,lantern,columns,ground,borderBottom,borderTop,borderRight,borderLeft,puddle1,puddle2, fuse, lanternLeft);

	renderer = new THREE.CanvasRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, (window.innerWidth*(9/16)) );
	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener( 'mousemove', onMouseMove, false );
	var counter = 5;
	
	for (var i = 0; i < counter; i++) {
		setTimeout(makeRainDrop, counter*500);
		counter--;
	}

	function makeRainDrop() {
		var rainGeo = new THREE.PlaneBufferGeometry(5,5);
		var rain = new THREE.Mesh(rainGeo,rainMaterial);
		var randomX = Math.random() * windowHalfX;
		var randomSign;
		if(Math.random() > .49) {
			randomSign = 1;
		} else {
			randomSign = -1;
		}
		scene.add(rain);
		rain.position.set(randomSign * randomX*.5, windowHalfY,-100);
		setInterval(function(){
			var randomX = Math.random() * windowHalfX;
			rain.position.y -=3;
			if(rain.position.y <= -windowHalfY) {
				rain.position.y = windowHalfY;
				rain.position.x = randomSign*randomX*.5;
				// rain.position.z = Math.random() *-900;
			}
		},10)
		counter++;
	}

}



function onMouseMove(e) {
	var mouseY = e.clientY;
	var mouseX = e.clientX;

	console.log(camera.position.x);
	// console.log(camera.position.y);
	if(camera.position.x < 50 && camera.position.x > -50 && camera.position.y <200 && camera.position.y >100) {
		if(previousY < mouseY) {
			// plane.position.y -= 5;
			// plane2.position.y -= 1;
			// test.position.y -= 1;
			camera.position.y +=.5;

		} else if (previousY > mouseY) {
			// plane.position.y += 5;
			// test.position.y += .5;
			// plane2.position.y -= .5;
			camera.position.y -=.5;
		}
		if(previousX < mouseX) {
			// plane.position.x += 5;
			// test.position.x += .5;
			// plane2.position.y -= .5;
			camera.position.x +=1;	
		} else if (previousX > mouseX) {
			// plane.position.x -= 5;
			// test.position.x -= .5;
			// plane2.position.y -= .5;
			camera.position.x -=1;
		}
			previousY = mouseY;
			previousX = mouseX;
	} else {
		console.log('fired');
		if (camera.position.x >= 50) {
			camera.position.x = camera.position.x-1;
		} else if(camera.position.x <= -50){
			camera.position.x = camera.position.x+1;
		} else if (camera.position.y <= 200) {
			camera.position.y = camera.position.y+1;
		} else if (camera.position.y >=100) {
			camera.position.y = camera.position.y-1;
		}

	}


// scene.add( test );

}


//

function animate() {

	requestAnimationFrame( animate );

	// stats.begin();
	render();
	// stats.end();

}

function render() {

	// camera position updates here

	// plane.rotation.y = cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
	renderer.render( scene, camera );

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = (window.innerWidth*(9/16)) / 2;

	camera.aspect = window.innerWidth / (window.innerWidth*(9/16));
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, (window.innerWidth*(9/16)) );

}


// camera.rotation.y = 0.02;