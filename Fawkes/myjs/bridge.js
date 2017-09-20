
var camera, scene, renderer;
var container;
var Bridge = {
	init: function() {


				scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x000000 );

		if(document.querySelector( '.bridge' )) {
			container = document.querySelector( '.bridge' );
		} else {
			container = document.createElement('div');
			container.classList.add('bridge');
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
		// ground.position.y = -700;

		backgroundImage = new THREE.Mesh(backgroundGeo,backgroundMaterial); 
		backgroundImage.position.set(0,150,-1000);



		ground = new THREE.Mesh(groundGeo,groundMaterial);
		groundMaterial.opacity = .75; 
		ground.position.set(0,-220,-900);
		ground.position.y = -700;
		backgroundImage.scale.set(1.2,1.1,1)
		ground.scale.set(1.2,1.3,1);
		backgroundImage.scale.set(1.2,1.8,1)
		ground.scale.set(1.2,.9,1);
		ground.position.set(0,70,-900);

		// scene.remove(ground)

		var bridgeBridgeGeo = new THREE.PlaneBufferGeometry(1800,500);
		bridgeBridge = new THREE.Mesh(bridgeBridgeGeo,bridgebridgeMaterial);
		bridgeBridgeGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		bridgeBridge.position.set(-10,-180,-500);
		// bridgeBridge.rotation.x = -1.5;
		// bridgeBridge.scale.set(.7,.7,1);

		var bridgebuildingBackgroundGeo = new THREE.PlaneBufferGeometry(648,135);
		BridgebuildingBackground1 = new THREE.Mesh(bridgebuildingBackgroundGeo,bridgebuildingBackgroundMaterial);
		BridgebuildingBackground2 = new THREE.Mesh(bridgebuildingBackgroundGeo,bridgebuildingBackgroundMaterial);
		BridgebuildingBackground3 = new THREE.Mesh(bridgebuildingBackgroundGeo,bridgebuildingBackgroundMaterial);
		BridgebuildingBackground4 = new THREE.Mesh(bridgebuildingBackgroundGeo,bridgebuildingBackgroundMaterial);
		BridgebuildingBackground5 = new THREE.Mesh(bridgebuildingBackgroundGeo,bridgebuildingBackgroundMaterial);

		// bridgebuildingBackgroundGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		BridgebuildingBackground1.position.set(0,400,-600);
		BridgebuildingBackground2.position.set(-638,400,-600);
		BridgebuildingBackground3.position.set(638,400,-600);
		BridgebuildingBackground4.position.set(1276,400,-600);
		BridgebuildingBackground5.position.set(-1276,400,-600);

		

		var BridgeCarriageGeo = new THREE.PlaneBufferGeometry(482,336);
		BridgeCarriage = new THREE.Mesh(BridgeCarriageGeo,bridgecarriageMaterial);
		BridgeCarriage.position.set(-100,340,-501);
		// BridgeCarriageGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );

		var BridgeCarriageWheelGeo = new THREE.PlaneBufferGeometry(220,220);
		var BridgeCarriageWheelGeo2 = new THREE.PlaneBufferGeometry(180,180);
		BridgeCarriageWheel = new THREE.Mesh(BridgeCarriageWheelGeo,bridgecarriageWheelMaterial);
		BridgeCarriageWheel2 = new THREE.Mesh(BridgeCarriageWheelGeo2,bridgecarriageWheelMaterial);
		BridgeCarriageWheel.position.set(-290,140,-501);
		BridgeCarriageWheel2.position.set(70,120,-501);
		// BridgeCarriageWheelGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );

		var BridgehorseGeo = new THREE.PlaneBufferGeometry(464,373);
		Bridgehorse = new THREE.Mesh(BridgehorseGeo,bridgehorseMaterial);
		Bridgehorse.position.set(500,180,-501);
		// BridgehorseGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );

		var BridgelampPostGeo = new THREE.PlaneBufferGeometry(150,643);
		BridgelampPost = new THREE.Mesh(BridgelampPostGeo,bridgelampPostMaterial);
		BridgelampPost2 = new THREE.Mesh(BridgelampPostGeo,bridgelampPostMaterial);
		// BridgelampPostGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		BridgelampPost.position.set(300,300,-550);
		BridgelampPost2.position.set(-400,300,-550);

		var BridgeglowGeo = new THREE.PlaneBufferGeometry(225,225);
		Bridgeglow = new THREE.Mesh(BridgeglowGeo,bridgeglowMaterial);
		Bridgeglow2 = new THREE.Mesh(BridgeglowGeo,bridgeglowMaterial);
		Bridgeglow.position.set(-365,490,-500);
		Bridgeglow2.position.set(275,490,-500);
		Bridgeglow.scale.set(0.001,0.001,1);
		Bridgeglow2.scale.set(0.001,0.001,1);
		// var BridgeleftManGeo = new THREE.PlaneBufferGeometry(90,130);
		// BridgeleftMan = new THREE.Mesh(BridgeleftManGeo,bridgeleftManMaterial);
		// BridgeleftManGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );

		var BridgeshadowCarriageGeo = new THREE.PlaneBufferGeometry(941,571);
		BridgeshadowCarriage = new THREE.Mesh(BridgeshadowCarriageGeo,bridgeshadowCarriageMaterial);
		// BridgeshadowCarriageGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		BridgeshadowCarriage.position.set(-900,90,-550);

		var BridgetextureGroundGeo = new THREE.PlaneBufferGeometry(1924,381);
		BridgetextureGround = new THREE.Mesh(BridgetextureGroundGeo,bridgetextureGroundMaterial);
		// BridgetextureGroundGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		BridgetextureGround.position.set(0,-140,-501);

		var BridgewavesGeo = new THREE.PlaneBufferGeometry(1600,190);
		Bridgewaves = new THREE.Mesh(BridgewavesGeo,bridgewavesMaterial);
		Bridgewaves2 = new THREE.Mesh(BridgewavesGeo,bridgewavesMaterial);
		Bridgewaves3 = new THREE.Mesh(BridgewavesGeo,bridgewavesMaterial);
		// BridgewavesGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		Bridgewaves.position.set(0,-160,-400);
		Bridgewaves2.position.set(70,-220,-400);
		Bridgewaves3.position.set(140,-250,-400);

		var BridgeumbrellaGeo = new THREE.PlaneBufferGeometry(90,130);
		Bridgeumbrella = new THREE.Mesh(BridgeumbrellaGeo,bridgeumbrellaMaterial);
		Bridgeumbrella.position.set(-500,0,-100);
		// BridgeumbrellaGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );



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
			// document.querySelector('.background2').style.height = window.innerWidth*(9/16) + 'px';

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











		scene.add(bridgeBridge,BridgebuildingBackground1,
			BridgebuildingBackground2,
			BridgebuildingBackground3,
			BridgebuildingBackground4,
			BridgebuildingBackground5,
			BridgeCarriage,
			BridgeCarriageWheel,
			BridgeCarriageWheel2,
			Bridgehorse,
			BridgelampPost,
			BridgelampPost2,
			// BridgeleftMan,
			BridgeshadowCarriage,BridgetextureGround,BridgetextureGround,
			Bridgewaves,
			Bridgewaves2,
			Bridgewaves3,
			Bridgeumbrella,
			backgroundImage,
			ground,
			Bridgeglow,
			Bridgeglow2);

		animate();
		this.wavy();


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


		var bridge = {opacity:1};

		TweenMax.to(bridge, 1, {opacity:0, onUpdate:fadeOut, onComplete:remove});

		function fadeOut() {
			document.querySelector('.bridge').style.opacity = bridge.opacity;
		}
		function remove() {
			document.querySelector('.bridge').parentNode.removeChild(document.querySelector('.bridge'));
		}
	},
	startScene: function() {

		document.querySelector('.bridge').style.zIndex = 2;
		var cloudOverlayGeo = new THREE.PlaneBufferGeometry(1922,1500);
		cloudOverlay = new THREE.Mesh(cloudOverlayGeo,cloudOverlayMaterial);
		cloudOverlay.position.set(0,0,-249);
		// cloudOverlay.scale.set(0,0,1);
		
		var cloudGeo = new THREE.PlaneBufferGeometry(1922,1000);
		cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
		
		cloud2 = new THREE.Mesh(cloudGeo,cloudMaterial);
		
		cloud2.rotation.set(0,0,3.14);
		cloud2.position.set(0,-200,-249);
		cloud.position.set(0,500,-249);
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
			tl.to(cloudOverlayFadeIn, 0.7, {opacity:.98, onUpdate:cloudOverlayIn}, "-=.3" );

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
	hitLights: function() {
		var glow = {scale:0.001}
		TweenMax.to(glow, 0.7, {scale:1, onUpdate:lightsOn, onComplete:pulse})
		function lightsOn() {
			console.log(glow.scale);
			Bridgeglow.scale.set(glow.scale,glow.scale,1);
			Bridgeglow2.scale.set(glow.scale,glow.scale,1);
		}
		function pulse() {
			console.log('fired');
			var pulseLights = {scale:1}
			TweenMax.to(pulseLights, 0.7, {scale:1.2, yoyo:true, repeat:-1, onUpdate:flicker})
			function flicker() {
				Bridgeglow.scale.set(pulseLights.scale,pulseLights.scale,1);
				Bridgeglow2.scale.set(pulseLights.scale,pulseLights.scale,1);
			}
		}
	},
	wavy: function() {
		var waves1 = {y:-160,x:-50};
		var waves2 = {y:-220,x:-70};
		var waves3 = {y:-250,x:-40};
		// var tl = new TimelineMax();

			setTimeout(function(){TweenMax.to(waves1, 2, {y:-50,x:50,yoyo:true,repeat:-1, onUpdate:wave1MoveY})},300);
			setTimeout(function(){TweenMax.to(waves2, 2, {y:-90,x:70,yoyo:true,repeat:-1, onUpdate:wave2MoveY})},500);
			setTimeout(function(){TweenMax.to(waves3, 2, {y:-130,x:40,yoyo:true,repeat:-1, onUpdate:wave3MoveY})},800);
			TweenMax.to(waves1, 2, {x:50,yoyo:true,repeat:-1, onUpdate:wave1MoveX});
			TweenMax.to(waves2, 2, {x:70,yoyo:true,repeat:-1, onUpdate:wave2MoveX});
			TweenMax.to(waves3, 2, {x:40,yoyo:true,repeat:-1, onUpdate:wave3MoveX});
			function wave1MoveY() {
				Bridgewaves.position.y = waves1.y;
			}
			function wave2MoveY(){
				Bridgewaves2.position.y = waves2.y;
			}
			function wave3MoveY() {
				Bridgewaves3.position.y = waves3.y;
			} 
			function wave1MoveX() {
				Bridgewaves.position.x = waves1.x;
			}
			function wave2MoveX(){
				Bridgewaves2.position.x = waves2.x;
			}
			function wave3MoveX() {
				Bridgewaves3.position.x = waves3.x;
			} 
	}

}
// Bridge.init();