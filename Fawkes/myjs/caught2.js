var cubeLength = 200;
var container;
console.log('hello World')

var camera, scene, renderer;
var backgroundImage;

var cube, plane;
var fawkes, badGuys;


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


	var backgroundLoad = loader.load('img/background.png');
	var backgroundMaterial = new THREE.MeshBasicMaterial({map: backgroundLoad});
	
	backgroundImage = new THREE.Mesh(backgroundGeo,backgroundMaterial); 
	backgroundImage.position.set(0,150,-1000);


	var groundMaterial = new THREE.MeshBasicMaterial( { color: 0x1A130A, overdraw: 0.5 } ); 

	var ground = new THREE.Mesh(groundGeo,groundMaterial);
	groundMaterial.opacity = .75; 
	ground.position.set(0,-220,-900);


	var barrelsLoad = loader.load('img/barrels.png');
	var barrelMaterial = new THREE.MeshBasicMaterial({map: barrelsLoad});
	var barrelsGeo = new THREE.PlaneBufferGeometry(1500,400);
	var barrels = new THREE.Mesh(barrelsGeo,barrelMaterial);
	barrels.position.set(0,300,-600);


	var puddleLoad = loader.load('img/puddle.png');
	var puddleMaterial = new THREE.MeshBasicMaterial({map:puddleLoad});
	var puddleGeo = new THREE.PlaneBufferGeometry(100,50);

	var puddle1 = new THREE.Mesh(puddleGeo,puddleMaterial);
	puddle1.position.set(0,-100,-899);

	var puddle2 = new THREE.Mesh(puddleGeo,puddleMaterial);
	puddle2.position.set(-700,-200,-700);


	var fuseLoad = loader.load('img/fuse.png');
	var fuseMaterial = new THREE.MeshBasicMaterial({map:fuseLoad});
	var fuseGeo = new THREE.PlaneBufferGeometry(1000,300);
	var fuse = new THREE.Mesh(fuseGeo,fuseMaterial);
	fuse.position.set(-300,0,-801);

	var lanternLoad = loader.load('img/lantern.png');
	var lanternMaterial = new THREE.MeshBasicMaterial({map: lanternLoad});
	var lanternGeo = new THREE.PlaneBufferGeometry(100,100);
	var lantern = new THREE.Mesh(lanternGeo,lanternMaterial);
	lantern.position.set(-420,50,-400)

	var lantern2Geo = new THREE.PlaneBufferGeometry(80,80);
	var lantern2 = new THREE.Mesh(lantern2Geo,lanternMaterial);
	lantern2.position.set(170,65,-250)


	var badGuysLoad = loader.load('img/badGuys.png');
	var badGuysMaterial = new THREE.MeshBasicMaterial({map: badGuysLoad});
	var badGuysGeo = new THREE.PlaneBufferGeometry(300,200);
	var badGuys = new THREE.Mesh(badGuysGeo, badGuysMaterial);
	badGuys.position.set(300,0,-300);

	var fawkesLoad = loader.load('img/fawkes.png');
	var fawkesMaterial = new THREE.MeshBasicMaterial({map: fawkesLoad});
	var fawkesGeo = new THREE.PlaneBufferGeometry(100,200);
	var fawkes = new THREE.Mesh(fawkesGeo, fawkesMaterial);
	fawkes.position.set(-300,0,-300);

	var columnsLoad = loader.load('img/columns.png');
	var columnsMaterial = new THREE.MeshBasicMaterial({map: columnsLoad});
	var columnsGeo = new THREE.PlaneBufferGeometry(500,300);
	var columns = new THREE.Mesh(columnsGeo, columnsMaterial);
	columns.position.set(0,100,-150)





    // fawkes.rotation.y = Math.PI / 2;
	// var cbgeometry = new THREE.PlaneBufferGeometry(windowHalfX*1,windowHalfY/2,200);
	// test = new THREE.Mesh( cbgeometry, cbmaterial );
	// test.position.set(0,windowHalfY/3,0);
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x000000 );
	scene.add(backgroundImage,barrels,ground,puddle1,puddle2,fuse,lantern,badGuys,lantern2, fawkes, columns);

	container = document.createElement( 'div' );
	document.body.appendChild( container );
	// backgroundImage.position.y = -maxHeight*2.2;



	camera = new THREE.PerspectiveCamera( 90, window.innerWidth / (window.innerWidth*(9/16)), 1, 2000 );
	camera.position.y = 150;
	camera.position.z = 1;



	renderer = new THREE.CanvasRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, (window.innerWidth*(9/16)) );
	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener( 'mousemove', onMouseMove, false );

	windowHalfX = window.innerWidth / 2;
	windowHalfY = (window.innerWidth*(9/16)) / 2;

	camera.aspect = window.innerWidth / (window.innerWidth*(9/16));
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, (window.innerWidth*(9/16)) );


}



function onMouseMove(e) {
	var mouseY = e.clientY;
	var mouseX = e.clientX;
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
	maxHeight = (window.innerWidth*(9/16));
	maxWidth = window.innerWidth;
	windowHalfX = window.innerWidth / 2;
	windowHalfY = (window.innerWidth*(9/16)) / 2;

	camera.aspect = window.innerWidth / (window.innerWidth*(9/16));
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, (window.innerWidth*(9/16)) );

}
var previousX;
var previousY;

// camera.rotation.y = 0.02;