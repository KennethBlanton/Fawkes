var camera, renderer;
var container;
var scene;
var Buildings = {
	init: function() {


				scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x000000 );

		if(document.querySelector( '.buildings' )) {
			container = document.querySelector( '.buildings' );
		} else {
			container = document.createElement('div');
			container.classList.add('buildings');
			document.querySelector('.container').appendChild(container);
		}

		camera = new THREE.PerspectiveCamera( 90, window.innerWidth / (window.innerWidth*(9/16)), 1, 1500 );
		camera.position.y = 150;
		camera.position.z = 1;

		renderer = new THREE.CanvasRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth+10, (window.innerWidth*(9/16)) );
		container.appendChild( renderer.domElement );

		caught = false;
		buildings = true;
		// Caught.removeScene();
		backgroundImage = new THREE.Mesh(backgroundGeo,backgroundMaterial); 
		backgroundImage.position.set(0,150,-1000);



		ground = new THREE.Mesh(groundGeo,groundMaterial);
		groundMaterial.opacity = .75; 
		ground.position.set(0,-220,-900);
		ground.position.y = -700;
		backgroundImage.scale.set(1.2,1.1,1)
		ground.scale.set(1.2,1.3,1);

		var groundOverlay = new THREE.Mesh(groundGeo,ground2Material);
		groundOverlay.position.set(0,-500,-900);
		groundOverlay.scale.set(1.2,.9,1);

		var mainBuildingGeo = new THREE.PlaneBufferGeometry(700,650);
		mainBuilding = new THREE.Mesh(mainBuildingGeo,mainBuildingMaterial);
		mainBuildingGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 325, 0) );
		mainBuilding.position.set(-220,-150,-450);
		// mainBuilding.rotation.x = -1.5;
		// mainBuilding.scale.set(.7,.7,1);

		var groundFrontGeo = new THREE.PlaneBufferGeometry(2650,500);
		groundFront = new THREE.Mesh(groundFrontGeo,groundFrontMaterial);
		groundFrontGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		groundFront.position.set(-350,-680,-899);

		var leftFrontGeo = new THREE.PlaneBufferGeometry(1150,400);
		leftFront = new THREE.Mesh(leftFrontGeo,leftFrontMaterial);
		leftFrontGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		leftFront.position.set(-1190,-150,-500);
		// leftFront.rotation.x = -1;
		// leftFront.scale.set(.7,.7,1);

		var leftMidGeo = new THREE.PlaneBufferGeometry(200,500);
		leftMid = new THREE.Mesh(leftMidGeo,leftMidMaterial);
		leftMidGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		leftMid.position.set(-800,0,-600);
		// leftMid.rotation.x = -1;
		// leftMid.scale.set(.7,.7,1);

		var leftBackGeo = new THREE.PlaneBufferGeometry(300,800);
		leftBack = new THREE.Mesh(leftBackGeo,leftBackMaterial);
		leftBackGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 400, 0) );
		leftBack.position.set(-1500,-100,-800);
		// leftBack.rotation.x = -1;
		// leftBack.scale.set(.7,.7,1);

		var rightBuildingGeo = new THREE.PlaneBufferGeometry(950,550);
		rightBuilding = new THREE.Mesh(rightBuildingGeo,rightBuildingMaterial);
		rightBuildingGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		rightBuilding.position.set(600,-130,-500);
		// rightBuilding.rotation.x = -1;
		// rightBuilding.scale.set(.7,.7,1);

		var rightTopBuildingGeo = new THREE.PlaneBufferGeometry(600,600);
		rightTopBuilding = new THREE.Mesh(rightTopBuildingGeo,rightTopBuildingMaterial);
		rightTopBuildingGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		rightTopBuilding.position.set(500,0,-800);
		// rightTopBuilding.rotation.x = -1;
		// rightTopBuilding.scale.set(.7,.7,1);

		var buildingCarGeo = new THREE.PlaneBufferGeometry(150,100);
		buildingCar = new THREE.Mesh(buildingCarGeo,buildingCarMaterial);
		buildingCarGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		buildingCar.position.set(450,-220,-300);
		// buildingCar.rotation.x = -1;
		// buildingCar.scale.set(.7,.7,1);

		var sideManGeo = new THREE.PlaneBufferGeometry(25,100);
		sideMan = new THREE.Mesh(sideManGeo,sideManMaterial);
		sideMan2 = new THREE.Mesh(sideManGeo,sideManMaterial);
		sideManGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sideMan.position.set(300,-250,-300);
		sideMan2.position.set(0,-250,-350);
		// sideMan.rotation.x = -1;
		sideMan.scale.set(.7,.7,1);
		// sideMan2.rotation.x = -1;
		// sideMan2.scale.set(.7,.7,1);
		// sideMan2.scale.set(1,.8,1);

		var frontManGeo = new THREE.PlaneBufferGeometry(25,100);
		frontMan = new THREE.Mesh(frontManGeo,frontManMaterial);
		frontManGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		frontMan.position.set(-500,-260,-400);
		// frontMan.rotation.x = -1;
		// frontMan.scale.set(.7,.7,1);

		var lampPostGeo = new THREE.PlaneBufferGeometry(50,150);
		lampPost = new THREE.Mesh(lampPostGeo,bridgelampPostMaterial);
		lampPostGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		lampPost.position.set(-200,-230,-325);
		// lampPost.rotation.x = -1;
		// lampPost.scale.set(.7,.7,1);

		var glowGeo = new THREE.PlaneBufferGeometry(225,225);
		glow = new THREE.Mesh(glowGeo,bridgeglowMaterial);
		glow2 = new THREE.Mesh(glowGeo,bridgeglowMaterial);
		// Bridgeglow2 = new THREE.Mesh(BridgeglowGeo,bridgeglowMaterial);
		glow.position.set(-365,490,-325);
		glow2.position.set(-200,18,-325);
		glow2.scale.set(.3,.3,1);
		// Bridgeglow2.position.set(275,490,-500);
		// Bridgeglow.scale.set(0.001,0.001,1);
		// Bridgeglow2.scale.set(0.001,0.001,1);

		var signGeo = new THREE.PlaneBufferGeometry(90,130);
		sign = new THREE.Mesh(signGeo,signMaterial);
		signGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, -10, 0) );
		sign.position.set(-70,100,-450);
		sign.rotation.z = 0;
		// sign.scale.set(.3,.3,1);



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
			document.querySelector('.background1').style.height = window.innerWidth*(9/16) + 'px';
			document.querySelector('.background2').style.height = window.innerWidth*(9/16) + 'px';
		}
		window.addEventListener( 'resize', onWindowResize, false );
		window.addEventListener( 'mousemove', onMouseMove, false );
		function onMouseMove(e) {
			// console.log('working')
			var mouseY = e.clientY;
			var mouseX = e.clientX;
			if(camera.position.x < 50 && camera.position.x > -50 && camera.position.y <200 && camera.position.y >100) {
				if(previousY < mouseY) {
					// plane.position.y -= 5;
					// plane2.position.y -= 1;
					// test.position.y -= 1;
					camera.position.y +=.3;

				} else if (previousY > mouseY) {
					// plane.position.y += 5;
					// test.position.y += .5;
					// plane2.position.y -= .5;
					camera.position.y -=.3;
				}
				if(previousX < mouseX) {
					// plane.position.x += 5;
					// test.position.x += .5;
					// plane2.position.y -= .5;
					camera.position.x +=.5;	
				} else if (previousX > mouseX) {
					// plane.position.x -= 5;
					// test.position.x -= .5;
					// plane2.position.y -= .5;
					camera.position.x -=.5;
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

		}
		function newScene() {


			var cloudOverlayGeo = new THREE.PlaneBufferGeometry(1922,1500);
			cloudOverlay = new THREE.Mesh(cloudOverlayGeo,cloudOverlayMaterial);
			cloudOverlay.position.set(0,0,-400);
			// cloudOverlay.scale.set(0,0,1);
			
			var cloudGeo = new THREE.PlaneBufferGeometry(1922,1000);
			cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
			
			cloud2 = new THREE.Mesh(cloudGeo,cloudMaterial);
			
			cloud2.rotation.set(0,0,3.14);
			cloud2.position.set(0,50,-300);
			cloud.position.set(0,250,-300);
			scene.add(cloudOverlay,cloud,cloud2);

			var cloudOverlayFadeIn = {opacity:0};
			var cloudFadeIn = {opacity:0,top:500};
			var cloud2FadeIn = {top:-200};
			// , "-=.2"

			var tl = new TimelineMax();

				tl.to(cloudFadeIn, 1, {opacity:1,top:250, onUpdate:cloudIn});
				tl.to(cloud2FadeIn, 1, {top:50, onUpdate:cloud2In}, "-=1");
				tl.to(cloudOverlayFadeIn, 0.7, {opacity:.9, onUpdate:cloudOverlayIn}, "-=.3" );

				function cloudOverlayIn() {
					console.log('fired');
					cloudOverlayMaterial.opacity = cloudOverlayFadeIn.opacity;

				}
				function cloudIn() {
					cloudMaterial.opacity = cloudFadeIn.opacity;
					cloud.position.y = cloudFadeIn.top;
				}
				function cloud2In() {
					cloud2.position.y = cloud2FadeIn.top;
				}
		}















		scene.add(glow,glow2,backgroundImage,ground,groundOverlay,mainBuilding,groundFront,leftFront,leftMid,leftBack, rightBuilding, rightTopBuilding, buildingCar, sideMan, sideMan2, frontMan, lampPost, sign);

		Buildings.createTheRain();
		animate();
		this.hitLights();
	},
	createTheRain: function(){
		var cubeLength = 100;
		function createCube() {
			var cube;
			randomWidth = Math.random() * 50 + 10;
			var geometry = new THREE.BoxGeometry( randomWidth, 2, 1 );


			var material = new THREE.MeshBasicMaterial( { color: 0x000000, overdraw: 0.5 } );
			material.opacity = Math.random() - .1;

			cube = new THREE.Mesh( geometry, material );
			// cube.position.y = window.innerHeight/.9 *Math.random() -300;
			var randomX = window.innerWidth *2 * Math.random() + 100;
			scene.add( cube );
			cube.position.set(randomX,150,-250)
			cube.rotation.z = 45;
			cube.rotation.y = 0;

			
			speed = Math.random() * 10 + 5;
			function runCube() {
				if(cube.position.x < -window.innerWidth/2) {
					cube.position.x = randomX;
					cube.position.y = (window.innerWidth*(9/16)) + 50;
				}else {
					cube.position.x -= speed
				}
				if(cube.position.y < -500) {
					cube.position.y = (window.innerWidth*(9/16))/.9 *Math.random() +600;
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
	},
	standup: function () {
		var leftBackScale = {stand:-1,scaleX:.7,scaleY:.7};
		var rightTopScale = {stand:-1,scaleX:.7,scaleY:.7};
		var leftMidScale = {stand:-1,scaleX:.7,scaleY:.7};
		var rightScale = {stand:-1,scaleX:.7,scaleY:.7};
		var leftScale = {stand:-1,scaleX:.7,scaleY:.7};
		var midScale = {stand:-1,scaleX:.7,scaleY:.7};
		var peopleScale = {stand:-1,scaleX:.7,scaleY:.7};
		var buildingCarScale = {stand:-1,scaleX:.7,scaleY:.7};
		var lampPostScale = {stand:-1,scaleX:.7,scaleY:.7};
		var signScale = {stand:-1,scaleX:.7,scaleY:.7};

		var tl = new TimelineMax();

		tl.to(leftBackScale, 0.5, {stand:0,scaleX:1,scaleY:1, onUpdate:leftBackStand});
		tl.to(rightTopScale, 0.5, {stand:0,scaleX:1,scaleY:1, onUpdate:rightTopStand}, "-=.2");
		tl.to(leftMidScale, 0.5, {stand:0,scaleX:1,scaleY:1, onUpdate:leftMidStand}, "-=.2");
		tl.to(rightScale, 0.5, {stand:0,scaleX:1,scaleY:1, onUpdate:rightStand}, "-=.2");
		tl.to(leftScale, 0.5, {stand:0,scaleX:1,scaleY:1, onUpdate:leftStand}, "-=.2");
		tl.to(midScale, 0.7, {stand:0,scaleX:1,scaleY:1, onUpdate:midStand}, "-=.2");
		tl.to(peopleScale, 0.5, {stand:0,scaleX:1,scaleY:1, onUpdate:peopleStand}, "-=.2");
		tl.to(buildingCarScale, 0.5, {stand:0,scaleX:1,scaleY:1, onUpdate:buildingCarStand}, "-=.2");
		tl.to(lampPostScale, 0.5, {stand:0,scaleX:1,scaleY:1, onUpdate:lampPostStand}, "-=.2");
		

		function leftBackStand() {
			leftBack.rotation.x = leftBackScale.stand;
			leftBack.scale.set(leftBackScale.scaleX,leftBackScale.scaleY,1);
		}
		function rightTopStand() {
			rightTopBuilding.rotation.x = rightTopScale.stand;
			rightTopBuilding.scale.set(rightTopScale.scaleX,rightTopScale.scaleY,1);
		}
		function leftMidStand() {
			leftMid.rotation.x = leftMidScale.stand;
			leftMid.scale.set(leftMidScale.scaleX,leftMidScale.scaleY,1);
		}
		function rightStand() {
			rightBuilding.rotation.x = rightScale.stand;
			rightBuilding.scale.set(rightScale.scaleX,rightScale.scaleY,1);
		}
		function leftStand() {
			leftFront.rotation.x = leftScale.stand;
			leftFront.scale.set(leftScale.scaleX,leftScale.scaleY,1);
		}
		function midStand() {
			mainBuilding.rotation.x = midScale.stand;
			mainBuilding.scale.set(midScale.scaleX,midScale.scaleY,1);
			sign.rotation.x = midScale.stand;
			sign.scale.set(midScale.scaleX,midScale.scaleY,1);
		}
		function peopleStand() {
			sideMan.rotation.x = peopleScale.stand;
			sideMan.scale.set(peopleScale.scaleX,peopleScale.scaleY,1);
			sideMan2.rotation.x = peopleScale.stand;
			sideMan2.scale.set(peopleScale.scaleX,peopleScale.scaleY,1);
			frontMan.rotation.x = peopleScale.stand;
			frontMan.scale.set(peopleScale.scaleX,peopleScale.scaleY,1);
		}
		function buildingCarStand() {
			buildingCar.rotation.x = buildingCarScale.stand;
			buildingCar.scale.set(buildingCarScale.scaleX,buildingCarScale.scaleY,1);
		}
		function lampPostStand() {
			lampPost.rotation.x = lampPostScale.stand;
			lampPost.scale.set(lampPostScale.scaleX,lampPostScale.scaleY,1);
		}
		function signStand() {
			sign.rotation.x = signScale.stand;
			sign.scale.set(signScale.scaleX,signScale.scaleY,1);
		}

	},
	removeScene: function() {
		var buildings = {opacity:1};

		TweenMax.to(buildings, 2.3, {opacity:0, onUpdate:fadeOut, onComplete:remove});

		function fadeOut() {
			document.querySelector('.buildings').style.opacity = buildings.opacity;
		}
		function remove() {
			document.querySelector('.buildings').parentNode.removeChild(document.querySelector('.buildings'));
		}
	},
	startScene:function() {
		document.querySelector('.buildings').style.zIndex = 2;
		var cloudOverlayGeo = new THREE.PlaneBufferGeometry(1922,1500);
		cloudOverlay = new THREE.Mesh(cloudOverlayGeo,cloudOverlayMaterial);
		cloudOverlay.position.set(0,0,-400);
		// cloudOverlay.scale.set(0,0,1);
		
		var cloudGeo = new THREE.PlaneBufferGeometry(1922,1000);
		cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
		
		cloud2 = new THREE.Mesh(cloudGeo,cloudMaterial);
		
		cloud2.rotation.set(0,0,3.14);
		cloud2.position.set(0,-200,-300);
		cloud.position.set(0,500,-300);
		scene.add(cloudOverlay,cloud,cloud2);

		var cloudOverlayFadeIn = {opacity:1};
		var cloudFadeIn = {opacity:.9,top:250};
		var cloud2FadeIn = {top:50};
		// , "-=.2"
		var tl = new TimelineMax();
			tl.to(cloudOverlayFadeIn, 0.7, {opacity:0, onUpdate:cloudOverlayIn});
			tl.to(cloudFadeIn, 1, {opacity:0,top:500, onUpdate:cloudIn});
			tl.to(cloud2FadeIn, 1, {top:-200, onUpdate:cloud2In}, "-=1");
			

			function cloudOverlayIn() {
				console.log('fired');
				cloudOverlayMaterial.opacity = cloudOverlayFadeIn.opacity;

			}
			function cloudIn() {
				cloudMaterial.opacity = cloudFadeIn.opacity;
				cloud.position.y = cloudFadeIn.top;
			}
			function cloud2In() {
				cloud2.position.y = cloud2FadeIn.top;
			}
	},
	newScene:function() {


		var cloudOverlayGeo = new THREE.PlaneBufferGeometry(1922,1500);
		cloudOverlay = new THREE.Mesh(cloudOverlayGeo,cloudOverlayMaterial);
		cloudOverlay.position.set(0,0,-249);
		// cloudOverlay.scale.set(0,0,1);
		
		var cloudGeo = new THREE.PlaneBufferGeometry(1922,1000);
		cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
		
		cloud2 = new THREE.Mesh(cloudGeo,cloudMaterial);
		
		cloud2.rotation.set(0,0,3.14);
		cloud2.position.set(0,50,-249);
		cloud.position.set(0,250,-249);
		scene.add(cloudOverlay,cloud,cloud2);

		var cloudOverlayFadeIn = {opacity:0};
		var cloudFadeIn = {opacity:0,top:500};
		var cloud2FadeIn = {top:-200};
		// , "-=.2"

		var tl = new TimelineMax();

			tl.to(cloudFadeIn, 1, {opacity:1,top:250, onUpdate:cloudIn});
			tl.to(cloud2FadeIn, 1, {top:50, onUpdate:cloud2In}, "-=1");
			tl.to(cloudOverlayFadeIn, 0.7, {opacity:.9, onUpdate:cloudOverlayIn}, "-=.3" );

			function cloudOverlayIn() {
				console.log('fired');
				cloudOverlayMaterial.opacity = cloudOverlayFadeIn.opacity;

			}
			function cloudIn() {
				cloudMaterial.opacity = cloudFadeIn.opacity;
				cloud.position.y = cloudFadeIn.top;
			}
			function cloud2In() {
				cloud2.position.y = cloud2FadeIn.top;
			}
	},
	wiggleSign: function() {
		var signMove = {rotate:.30472};
		TweenMax.to(signMove, 0.7, {rotate:-.30472, yoyo:true, repeat:-1, onUpdate:rotateSign})
		function rotateSign() {
			console.log(signMove.rotate);
			sign.rotation.z = signMove.rotate;
		}
	},
	hitLights: function() {
		var pulseLights = {scale:.3}
			TweenMax.to(pulseLights, 0.7, {scale:.35, yoyo:true, repeat:-1, onUpdate:flicker})
			function flicker() {
				glow2.scale.set(pulseLights.scale,pulseLights.scale,1);
				// Bridgeglow2.scale.set(pulseLights.scale,pulseLights.scale,1);
			}
	},

}
// Buildings.init();