var camera, scene, renderer;
var container;
var Death = {
	init: function() {


				scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x000000 );

		if(document.querySelector( '.death' )) {
			container = document.querySelector( '.death' );
		} else {
			container = document.createElement('div');
			container.classList.add('death');
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

		ground.position.y = -700;
		backgroundImage.scale.set(1.2,1.8,1)
		backgroundImage.position.set(0,-500,-900)
		ground.scale.set(1.2,1.3,1);

		var deathbackCrowdGeo = new THREE.PlaneBufferGeometry(1048,384);
		deathbackCrowd = new THREE.Mesh(deathbackCrowdGeo,deathbackCrowdMaterial);
		deathbackCrowd2 = new THREE.Mesh(deathbackCrowdGeo,deathbackCrowdMaterial);
		// deathbackCrowdGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		deathbackCrowd.position.set(-525,-250,-500);
		deathbackCrowd2.position.set(470,-250,-500);

		var deathbuildingsGeo = new THREE.PlaneBufferGeometry(2298,486);
		deathbuildings = new THREE.Mesh(deathbuildingsGeo,deathbuildingsMaterial);
		// deathbuildingsGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		deathbuildings.position.set(-400,140,-700);

		var deathcrossGeo = new THREE.PlaneBufferGeometry(65,230);
		deathcross = new THREE.Mesh(deathcrossGeo,deathcrossMaterial);
		deathcross2 = new THREE.Mesh(deathcrossGeo,deathcrossMaterial);
		// deathcrossGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		deathcross.position.set(600,-90,-501);
		deathcross2.position.set(-550,-120,-501);

		var deathfawkesGeo = new THREE.PlaneBufferGeometry(93,270);
		deathfawkes = new THREE.Mesh(deathfawkesGeo,deathfawkesMaterial);
		deathfawkes.position.set(160,550,-551);
		// deathfawkesGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );

		var deathfrontCrowdGeo = new THREE.PlaneBufferGeometry(1048,384);
		deathfrontCrowd = new THREE.Mesh(deathfrontCrowdGeo,deathfrontCrowdMaterial);
		deathfrontCrowd2 = new THREE.Mesh(deathfrontCrowdGeo,deathfrontCrowdMaterial);
		// deathfrontCrowdGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		deathfrontCrowd.position.set(-525,-300,-400);
		deathfrontCrowd2.position.set(500,-300,-400);


		var deathhorsemanGeo = new THREE.PlaneBufferGeometry(301,356);
		deathhorseman = new THREE.Mesh(deathhorsemanGeo,deathhorsemanMaterial);
		// deathhorsemanGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		deathhorseman.position.set(-370,-100,-500);

		var deathlastBuildingGeo = new THREE.PlaneBufferGeometry(500,604);
		deathlastBuilding = new THREE.Mesh(deathlastBuildingGeo,deathlastBuildingMaterial);
		// deathlastBuildingGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		deathlastBuilding.position.set(990,200,-700);

		var deathmidCrowdGeo = new THREE.PlaneBufferGeometry(1048,384);
		deathmidCrowd = new THREE.Mesh(deathmidCrowdGeo,deathmidCrowdMaterial);
		deathmidCrowd2 = new THREE.Mesh(deathmidCrowdGeo,deathmidCrowdMaterial);
		// deathmidCrowdGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		deathmidCrowd.position.set(-500,-270,-450);
		deathmidCrowd2.position.set(530,-270,-450);

		var deathnooseGeo = new THREE.PlaneBufferGeometry(800,800);
		deathnoose = new THREE.Mesh(deathnooseGeo,deathnooseMaterial);
		// deathnooseGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		deathnoose.position.set(180,70,-550);

		var deathwaversGeo = new THREE.PlaneBufferGeometry(297,353);
		deathwavers = new THREE.Mesh(deathwaversGeo,deathwaversMaterial);
		// deathwaversGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		deathwavers.position.set(-70,145,-550);



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





		scene.add(
			deathbackCrowd,
			deathbackCrowd2,
			deathbuildings,
			deathcross,
			deathcross2,
			deathfawkes,
			deathfrontCrowd,
			deathfrontCrowd2,
			deathhorseman,
			deathlastBuilding,
			deathmidCrowd,
			deathmidCrowd2,
			deathnoose,
			deathwavers,
			backgroundImage,
			ground);

		animate();
		this.cheer();
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
		var death = {opacity:1};

		TweenMax.to(death, 1, {opacity:0, onUpdate:fadeOut, onComplete:remove});

		function fadeOut() {
			document.querySelector('.death').style.opacity = death.opacity;
		}
		function remove() {
			document.querySelector('.death').parentNode.removeChild(document.querySelector('.death'));
		}
	},
	startScene:function() {
		document.querySelector('.death').style.zIndex = 2;
		var cloudOverlayGeo = new THREE.PlaneBufferGeometry(1922,1500);
		cloudOverlay = new THREE.Mesh(cloudOverlayGeo,cloudOverlayMaterial);
		cloudOverlay.position.set(0,0,-400);
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
	humptyDumpty: function() {
		var deathfawkesMove =  {x:160,y:550,rotate:0};
		var tl = new TimelineMax();
			tl.to(deathfawkesMove, .5, {x:000,y:650, onUpdate:jumpUp});
			tl.to(deathfawkesMove, .7, {x:-300, y:0, rotate:-2.9079633, onUpdate:bigFall},'-=.2');
		function jumpUp() {
			deathfawkes.position.set(deathfawkesMove.x,deathfawkesMove.y,-551);
		}
		function bigFall() {
			deathfawkes.position.set(deathfawkesMove.x,deathfawkesMove.y,-551);
			deathfawkes.rotation.set(0,0,deathfawkesMove.rotate);
		}
	},
	cheer: function() {

		var backCrowd = {y:-250};
		var frontCrowd = {y:-300};
		var midCrowd = {y:-270}
		var tl = new TimelineMax();

			tl.to(backCrowd, 1, {y:-230, yoyo:true, repeat:-1, onUpdate:moveBack});
			tl.to(frontCrowd, 1, {y:-280, yoyo:true, repeat:-1, onUpdate:moveFront}, "-=.5");
			tl.to(midCrowd, 1, {y:-240, yoyo:true, repeat:-1, onUpdate:moveMid} );
			function moveBack() {
				deathbackCrowd.position.y = backCrowd.y;
				deathbackCrowd2.position.y = backCrowd.y;
			}
			function moveFront() {
				deathfrontCrowd.position.y = frontCrowd.y;
				deathfrontCrowd2.position.y = frontCrowd.y;
			}
			function moveMid() {
				deathmidCrowd.position.y = midCrowd.y;
				deathmidCrowd2.position.y = midCrowd.y;
			}
	}

}
// Death.init();