//SCENE SHIT

// var camera, scene, renderer;
// var container;
var previousX;
var previousY;
var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;
// scene = new THREE.Scene();
// scene.background = new THREE.Color( 0x000000 );

// container = document.createElement( 'div' );
// document.body.appendChild( container );

// camera = new THREE.PerspectiveCamera( 90, window.innerWidth / (window.innerWidth*(9/16)), 1, 1500 );
// camera.position.y = 150;
// camera.position.z = 1;

// renderer = new THREE.CanvasRenderer();
// renderer.setPixelRatio( window.devicePixelRatio );
// renderer.setSize( window.innerWidth+10, (window.innerWidth*(9/16)) );
// container.appendChild( renderer.domElement );

// window.addEventListener( 'resize', onWindowResize, false );
// window.addEventListener( 'mousemove', onMouseMove, false );


//PAGE BOOLEANS

var buildings = false;



// LOADER


var loader = new THREE.TextureLoader();
	loader.crossOrigin = true;

//MULTIPLE
var backgroundLoad = loader.load('img/caught/background.png');
var backgroundMaterial = new THREE.MeshBasicMaterial({map: backgroundLoad});
var backgroundGeo = new THREE.PlaneBufferGeometry(3200,1800);
var groundGeo = new THREE.PlaneBufferGeometry( 2900, 900 );
var groundMaterial = new THREE.MeshBasicMaterial( { color: 0x1A130A, overdraw: 0.5, opacity:.75 } ); 
var ground2Material = new THREE.MeshBasicMaterial( { color: 0x000000, overdraw: 0.5, opacity:.75 } ); 
var cloudLoad = loader.load('img/clouds.png');
var cloudMaterial = new THREE.MeshBasicMaterial({map: cloudLoad,transparent: true, opacity: 0});
var cloudOverlayMaterial = new THREE.MeshBasicMaterial( { color: 0x222222, overdraw: 0.5, opacity:0 } ); 



// CAUGHT LOAD VARIABLES

var barrelsLoad = loader.load('img/caught/barrels.png');
var barrelMaterial = new THREE.MeshBasicMaterial({map: barrelsLoad});
var puddleLoad = loader.load('img/caught/puddle.png');
var puddleMaterial = new THREE.MeshBasicMaterial({map:puddleLoad});
var fuseLoad = loader.load('img/caught/fuse.png');
var fuseMaterial = new THREE.MeshBasicMaterial({map:fuseLoad});
var lanternLoad = loader.load('img/caught/lantern.png');
var lanternMaterial = new THREE.MeshBasicMaterial({map: lanternLoad});
var badGuysLoad = loader.load('img/caught/badGuys.png');
var badGuysMaterial = new THREE.MeshBasicMaterial({map: badGuysLoad});
var fawkesLoad = loader.load('img/caught/fawkes.png');
var fawkesMaterial = new THREE.MeshBasicMaterial({map: fawkesLoad});
var columnsLoad = loader.load('img/caught/columns.png');
var columnsMaterial = new THREE.MeshBasicMaterial({map: columnsLoad});
var rainLoad = loader.load('img/caught/rain.png');
var rainMaterial = new THREE.MeshBasicMaterial({map:rainLoad});

// BUILDINGS LOAD VARIABLES

var mainBuildingLoad = loader.load("img/buildings/mainBuilding.png");
var mainBuildingMaterial = new THREE.MeshBasicMaterial({map: mainBuildingLoad});
var groundFrontLoad = loader.load("img/buildings/groundFront.png");
var groundFrontMaterial = new THREE.MeshBasicMaterial({map: groundFrontLoad});
var lampPostLoad = loader.load("img/buildings/lampPost.png");
var lampPostMaterial = new THREE.MeshBasicMaterial({map: lampPostLoad});
var leftBackLoad = loader.load("img/buildings/leftBack.png");
var leftBackMaterial = new THREE.MeshBasicMaterial({map: leftBackLoad});
var leftFrontLoad = loader.load("img/buildings/leftFront.png");
var leftFrontMaterial = new THREE.MeshBasicMaterial({map: leftFrontLoad});
var leftMidLoad = loader.load("img/buildings/leftMid.png");
var leftMidMaterial = new THREE.MeshBasicMaterial({map: leftMidLoad});
var rightBuildingLoad = loader.load("img/buildings/rightBuilding.png");
var rightBuildingMaterial = new THREE.MeshBasicMaterial({map: rightBuildingLoad});
var rightTopBuildingLoad = loader.load("img/buildings/rightTopBuilding.png");
var rightTopBuildingMaterial = new THREE.MeshBasicMaterial({map: rightTopBuildingLoad});
var signLoad = loader.load("img/buildings/sign.png");
var signMaterial = new THREE.MeshBasicMaterial({map: signLoad});
var sideManLoad = loader.load("img/buildings/sideMan.png");
var sideManMaterial = new THREE.MeshBasicMaterial({map: sideManLoad});
var frontManLoad = loader.load("img/buildings/frontMan.png");
var frontManMaterial = new THREE.MeshBasicMaterial({map: frontManLoad});
var buildingCarLoad = loader.load("img/buildings/buildingCar.png");
var buildingCarMaterial = new THREE.MeshBasicMaterial({map: buildingCarLoad});


// BRIDGE TEXTURES

var bridgebridgeLoad = loader.load("img/bridge/bridge.png");
var bridgebridgeMaterial = new THREE.MeshBasicMaterial({map: bridgebridgeLoad});
var bridgebuildingBackgroundLoad = loader.load("img/bridge/buildingBackground.png");
var bridgebuildingBackgroundMaterial = new THREE.MeshBasicMaterial({map: bridgebuildingBackgroundLoad});
var bridgecarriageLoad = loader.load("img/bridge/carriage.png");
var bridgecarriageMaterial = new THREE.MeshBasicMaterial({map: bridgecarriageLoad});
var bridgecarriageWheelLoad = loader.load("img/bridge/carriageWheel.png");
var bridgecarriageWheelMaterial = new THREE.MeshBasicMaterial({map: bridgecarriageWheelLoad});
var bridgehorseLoad = loader.load("img/bridge/horse.png");
var bridgehorseMaterial = new THREE.MeshBasicMaterial({map: bridgehorseLoad});
var bridgelampPostLoad = loader.load("img/bridge/lampPost.png");
var bridgelampPostMaterial = new THREE.MeshBasicMaterial({map: bridgelampPostLoad});
var bridgeleftManLoad = loader.load("img/bridge/leftMan.png");
var bridgeleftManMaterial = new THREE.MeshBasicMaterial({map: bridgeleftManLoad});
var bridgeshadowCarriageLoad = loader.load("img/bridge/shadowCarriage.png");
var bridgeshadowCarriageMaterial = new THREE.MeshBasicMaterial({map: bridgeshadowCarriageLoad});
var bridgetextureGroundLoad = loader.load("img/bridge/textureGround.png");
var bridgetextureGroundMaterial = new THREE.MeshBasicMaterial({map: bridgetextureGroundLoad});
var bridgeumbrellaLoad = loader.load("img/bridge/umbrella.png");
var bridgeumbrellaMaterial = new THREE.MeshBasicMaterial({map: bridgeumbrellaLoad});
var bridgewavesLoad = loader.load("img/bridge/waves.png");
var bridgewavesMaterial = new THREE.MeshBasicMaterial({map: bridgewavesLoad});
var bridgeglowLoad = loader.load("img/bridge/glow.png");
var bridgeglowMaterial = new THREE.MeshBasicMaterial({map: bridgeglowLoad});

// DEATH TEXTURES 

var deathbackCrowdLoad = loader.load("img/death/backCrowd.png");
var deathbackCrowdMaterial = new THREE.MeshBasicMaterial({map: deathbackCrowdLoad, transparent: true, opacity: 0.7});
var deathbuildingsLoad = loader.load("img/death/buildings.png");
var deathbuildingsMaterial = new THREE.MeshBasicMaterial({map: deathbuildingsLoad});
var deathcrossLoad = loader.load("img/death/cross.png");
var deathcrossMaterial = new THREE.MeshBasicMaterial({map: deathcrossLoad});
var deathfawkesLoad = loader.load("img/death/fawkes.png");
var deathfawkesMaterial = new THREE.MeshBasicMaterial({map: deathfawkesLoad});
var deathfrontCrowdLoad = loader.load("img/death/frontCrowd.png");
var deathfrontCrowdMaterial = new THREE.MeshBasicMaterial({map: deathfrontCrowdLoad, transparent: true, opacity: 0.7});
var deathhorsemanLoad = loader.load("img/death/horseman.png");
var deathhorsemanMaterial = new THREE.MeshBasicMaterial({map: deathhorsemanLoad});
var deathlastBuildingLoad = loader.load("img/death/lastBuilding.png");
var deathlastBuildingMaterial = new THREE.MeshBasicMaterial({map: deathlastBuildingLoad});
var deathmidCrowdLoad = loader.load("img/death/midCrowd.png");
var deathmidCrowdMaterial = new THREE.MeshBasicMaterial({map: deathmidCrowdLoad, transparent: true, opacity: 0.7});
var deathnooseLoad = loader.load("img/death/noose.png");
var deathnooseMaterial = new THREE.MeshBasicMaterial({map: deathnooseLoad});
var deathwaversLoad = loader.load("img/death/wavers.png");
var deathwaversMaterial = new THREE.MeshBasicMaterial({map: deathwaversLoad});

// HALLWAY TEXTURES

var hallwaycenterColumnLoad = loader.load("img/hallway/centerColumn.png");
var hallwaycenterColumnMaterial = new THREE.MeshBasicMaterial({map: hallwaycenterColumnLoad});
var hallwaydarkGradientLoad = loader.load("img/hallway/darkGradient.png");
var hallwaydarkGradientMaterial = new THREE.MeshBasicMaterial({map: hallwaydarkGradientLoad, transparent: true, opacity: 0.7});
var hallwayleftColumnLoad = loader.load("img/hallway/leftColumn.png");
var hallwayleftColumnMaterial = new THREE.MeshBasicMaterial({map: hallwayleftColumnLoad});
var hallwayleftTorchLoad = loader.load("img/hallway/leftTorch.png");
var hallwayleftTorchMaterial = new THREE.MeshBasicMaterial({map: hallwayleftTorchLoad});
var hallwayrightColumnLoad = loader.load("img/hallway/rightColumn.png");
var hallwayrightColumnMaterial = new THREE.MeshBasicMaterial({map: hallwayrightColumnLoad});
var hallwayrightTorchLoad = loader.load("img/hallway/rightTorch.png");
var hallwayrightTorchMaterial = new THREE.MeshBasicMaterial({map: hallwayrightTorchLoad});

// KING TEXTURES

var kingbarsLoad = loader.load("img/king/bars.png");
var kingbarsMaterial = new THREE.MeshBasicMaterial({map: kingbarsLoad});
var kinghatManLoad = loader.load("img/king/hatMan.png");
var kinghatManMaterial = new THREE.MeshBasicMaterial({map: kinghatManLoad});
var kingkingLoad = loader.load("img/king/king.png");
var kingkingMaterial = new THREE.MeshBasicMaterial({map: kingkingLoad});
var kingleftLanternLoad = loader.load("img/king/leftLantern.png");
var kingleftLanternMaterial = new THREE.MeshBasicMaterial({map: kingleftLanternLoad});
var kingleftManLoad = loader.load("img/king/leftMen.png");
var kingleftManMaterial = new THREE.MeshBasicMaterial({map: kingleftManLoad});
var kingrightLanternLoad = loader.load("img/king/rightLantern.png");
var kingrightLanternMaterial = new THREE.MeshBasicMaterial({map: kingrightLanternLoad});
var kingleftMenLoad = loader.load("img/king/leftMen.png");
var kingleftMenMaterial = new THREE.MeshBasicMaterial({map: kingleftMenLoad});
var kingrightLanternLoad = loader.load("img/king/rightLantern.png");
var kingrightLanternMaterial = new THREE.MeshBasicMaterial({map: kingrightLanternLoad});
var kingsideManLoad = loader.load("img/king/sideMan.png");
var kingsideManMaterial = new THREE.MeshBasicMaterial({map: kingsideManLoad});
var kingthroneLoad = loader.load("img/king/throne.png");
var kingthroneMaterial = new THREE.MeshBasicMaterial({map: kingthroneLoad});
var kingbackgroundLoad = loader.load("img/king/background.png");
var kingbackgroundMaterial = new THREE.MeshBasicMaterial({map: kingbackgroundLoad});
var kingfawkesLoad = loader.load("img/king/fawkes.png");
var kingfawkesMaterial = new THREE.MeshBasicMaterial({map: kingfawkesLoad});

// SENTENCE TEXTURES

var sentencebackgroundCoverLoad = loader.load("img/sentence/backgroundCover.png");
var sentencebackgroundCoverMaterial = new THREE.MeshBasicMaterial({map: sentencebackgroundCoverLoad,transparent: true, opacity: 0.9});
var sentencebrickTextureLoad = loader.load("img/sentence/brickTexture.png");
var sentencebrickTextureMaterial = new THREE.MeshBasicMaterial({map: sentencebrickTextureLoad});
var sentencecolumnLoad = loader.load("img/sentence/column.png");
var sentencecolumnMaterial = new THREE.MeshBasicMaterial({map: sentencecolumnLoad});
var sentencegossiperLoad = loader.load("img/sentence/gossiper.png");
var sentencegossiperMaterial = new THREE.MeshBasicMaterial({map: sentencegossiperLoad});
var sentencehangingManLoad = loader.load("img/sentence/hangingMan.png");
var sentencehangingManMaterial = new THREE.MeshBasicMaterial({map: sentencehangingManLoad});
var sentenceleftTorchLoad = loader.load("img/sentence/leftTorch.png");
var sentenceleftTorchMaterial = new THREE.MeshBasicMaterial({map: sentenceleftTorchLoad});
var sentencepikemanLoad = loader.load("img/sentence/pikeman.png");
var sentencepikemanMaterial = new THREE.MeshBasicMaterial({map: sentencepikemanLoad});
var sentencepointerLoad = loader.load("img/sentence/pointer.png");
var sentencepointerMaterial = new THREE.MeshBasicMaterial({map: sentencepointerLoad});
var sentencerightColumnLoad = loader.load("img/sentence/rightColumn.png");
var sentencerightColumnMaterial = new THREE.MeshBasicMaterial({map: sentencerightColumnLoad});
var sentencerightTorchLoad = loader.load("img/sentence/rightTorch.png");
var sentencerightTorchMaterial = new THREE.MeshBasicMaterial({map: sentencerightTorchLoad});
var sentencewallLoad = loader.load("img/sentence/wall.png");
var sentencewallMaterial = new THREE.MeshBasicMaterial({map: sentencewallLoad});
var sentencebackgroundLoad = loader.load("img/sentence/background.png");
var sentencebackgroundMaterial = new THREE.MeshBasicMaterial({map: sentencebackgroundLoad});


// TORTURE TEXTURES

var torturebackgroundLoad = loader.load("img/torture/background.png");
var torturebackgroundMaterial = new THREE.MeshBasicMaterial({map: torturebackgroundLoad});
var torturebrickTextureLoad = loader.load("img/torture/brickTexture.png");
var torturebrickTextureMaterial = new THREE.MeshBasicMaterial({map: torturebrickTextureLoad});
var tortureceilingLoad = loader.load("img/torture/ceiling.png");
var tortureceilingMaterial = new THREE.MeshBasicMaterial({map: tortureceilingLoad});
var torturefawkesLoad = loader.load("img/torture/fawkes.png");
var torturefawkesMaterial = new THREE.MeshBasicMaterial({map: torturefawkesLoad});
var torturegroundLoad = loader.load("img/torture/ground.png");
var torturegroundMaterial = new THREE.MeshBasicMaterial({map: torturegroundLoad});
var tortureleftManLoad = loader.load("img/torture/leftMan.png");
var tortureleftManMaterial = new THREE.MeshBasicMaterial({map: tortureleftManLoad});
var torturerackLoad = loader.load("img/torture/rack.png");
var torturerackMaterial = new THREE.MeshBasicMaterial({map: torturerackLoad})
var torturerightManLoad = loader.load("img/torture/rightMan.png");
var torturerightManMaterial = new THREE.MeshBasicMaterial({map: torturerightManLoad});
var tortureropesLoad = loader.load("img/torture/ropes.png");
var tortureropesMaterial = new THREE.MeshBasicMaterial({map: tortureropesLoad});

// EVENTS AND FUNCTIONS


// function newScene() {


// 	var cloudOverlayGeo = new THREE.PlaneBufferGeometry(1922,1500);
// 	cloudOverlay = new THREE.Mesh(cloudOverlayGeo,cloudOverlayMaterial);
// 	cloudOverlay.position.set(0,0,-400);
// 	// cloudOverlay.scale.set(0,0,1);
	
// 	var cloudGeo = new THREE.PlaneBufferGeometry(1922,1000);
// 	cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
	
// 	cloud2 = new THREE.Mesh(cloudGeo,cloudMaterial);
	
// 	cloud2.rotation.set(0,0,3.14);
// 	cloud2.position.set(0,50,-300);
// 	cloud.position.set(0,250,-300);
// 	scene.add(cloudOverlay,cloud,cloud2);

// 	var cloudOverlayFadeIn = {opacity:0};
// 	var cloudFadeIn = {opacity:0,top:500};
// 	var cloud2FadeIn = {top:-200};
// 	// , "-=.2"

// 	var tl = new TimelineMax();

// 		tl.to(cloudFadeIn, 1, {opacity:1,top:250, onUpdate:cloudIn});
// 		tl.to(cloud2FadeIn, 1, {top:50, onUpdate:cloud2In}, "-=1");
// 		tl.to(cloudOverlayFadeIn, 0.7, {opacity:.9, onUpdate:cloudOverlayIn}, "-=.3" );

// 		function cloudOverlayIn() {
// 			console.log('fired');
// 			cloudOverlayMaterial.opacity = cloudOverlayFadeIn.opacity;

// 		}
// 		function cloudIn() {
// 			cloudMaterial.opacity = cloudFadeIn.opacity;
// 			cloud.position.y = cloudFadeIn.top;
// 		}
// 		function cloud2In() {
// 			cloud2.position.y = cloud2FadeIn.top;
// 		}
// }
// function startScene() {
	
// 	var cloudOverlayGeo = new THREE.PlaneBufferGeometry(1922,1500);
// 	cloudOverlay = new THREE.Mesh(cloudOverlayGeo,cloudOverlayMaterial);
// 	cloudOverlay.position.set(0,0,-400);
// 	// cloudOverlay.scale.set(0,0,1);
	
// 	var cloudGeo = new THREE.PlaneBufferGeometry(1922,1000);
// 	cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
	
// 	cloud2 = new THREE.Mesh(cloudGeo,cloudMaterial);
	
// 	cloud2.rotation.set(0,0,3.14);
// 	cloud2.position.set(0,-200,-300);
// 	cloud.position.set(0,500,-300);
// 	scene.add(cloudOverlay,cloud,cloud2);

// 	var cloudOverlayFadeIn = {opacity:1};
// 	var cloudFadeIn = {opacity:.9,top:250};
// 	var cloud2FadeIn = {top:50};
// 	// , "-=.2"
// 	var tl = new TimelineMax();
// 		tl.to(cloudOverlayFadeIn, 0.7, {opacity:0, onUpdate:cloudOverlayIn});
// 		tl.to(cloudFadeIn, 1, {opacity:0,top:500, onUpdate:cloudIn});
// 		tl.to(cloud2FadeIn, 1, {top:-200, onUpdate:cloud2In}, "-=1");
		

// 		function cloudOverlayIn() {
// 			console.log('fired');
// 			cloudOverlayMaterial.opacity = cloudOverlayFadeIn.opacity;

// 		}
// 		function cloudIn() {
// 			cloudMaterial.opacity = cloudFadeIn.opacity;
// 			cloud.position.y = cloudFadeIn.top;
// 		}
// 		function cloud2In() {
// 			cloud2.position.y = cloud2FadeIn.top;
// 		}
// }


// function animate() {

// 	requestAnimationFrame( animate );

// 	// stats.begin();
// 	render();
// 	// stats.end();

// }

// function render() {
// 	// camera position updates here

// 	// plane.rotation.y = cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
// 	renderer.render( scene, camera );

// }
// function onMouseMove(e) {
// 	// console.log('working')
// 	var mouseY = e.clientY;
// 	var mouseX = e.clientX;
// 	if(camera.position.x < 50 && camera.position.x > -50 && camera.position.y <200 && camera.position.y >100) {
// 		if(previousY < mouseY) {
// 			// plane.position.y -= 5;
// 			// plane2.position.y -= 1;
// 			// test.position.y -= 1;
// 			camera.position.y +=.3;

// 		} else if (previousY > mouseY) {
// 			// plane.position.y += 5;
// 			// test.position.y += .5;
// 			// plane2.position.y -= .5;
// 			camera.position.y -=.3;
// 		}
// 		if(previousX < mouseX) {
// 			// plane.position.x += 5;
// 			// test.position.x += .5;
// 			// plane2.position.y -= .5;
// 			camera.position.x +=.5;	
// 		} else if (previousX > mouseX) {
// 			// plane.position.x -= 5;
// 			// test.position.x -= .5;
// 			// plane2.position.y -= .5;
// 			camera.position.x -=.5;
// 		}
// 			previousY = mouseY;
// 			previousX = mouseX;
// 	} else {
// 		console.log('fired');
// 		if (camera.position.x >= 50) {
// 			camera.position.x = camera.position.x-1;
// 		} else if(camera.position.x <= -50){
// 			camera.position.x = camera.position.x+1;
// 		} else if (camera.position.y <= 200) {
// 			camera.position.y = camera.position.y+1;
// 		} else if (camera.position.y >=100) {
// 			camera.position.y = camera.position.y-1;
// 		}

// 	}


// // scene.add( test );

// }

// function onWindowResize() {
// 	maxHeight = (window.innerWidth*(9/16));
// 	maxWidth = window.innerWidth;
// 	windowHalfX = window.innerWidth / 2;
// 	windowHalfY = (window.innerWidth*(9/16)) / 2;

// 	camera.aspect = window.innerWidth / (window.innerWidth*(9/16));
// 	camera.updateProjectionMatrix();

// 	renderer.setSize( window.innerWidth, (window.innerWidth*(9/16)) );

// }
