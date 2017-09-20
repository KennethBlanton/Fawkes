var camera, scene, renderer;
var container;

var Sentence = {
	init: function() {

		
				scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x000000 );
		if(document.querySelector( '.sentence' )) {
			container = document.querySelector( '.sentence' );
			console.log(container)
		} else {
			container = document.createElement('div');
			container.classList.add('sentence');
			document.querySelector('.container').appendChild(container);
			// console.log(container)
		}

		
		// document.body.appendChild( container );

		camera = new THREE.PerspectiveCamera( 90, window.innerWidth / (window.innerWidth*(9/16)), 1, 1500 );
		camera.position.y = 150;
		camera.position.z = 1;

		renderer = new THREE.CanvasRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth+10, (window.innerWidth*(9/16)) );
		container.appendChild( renderer.domElement );


		// 
		// ground.position.y = -700;
		// backgroundImage.scale.set(1.2,1.1,1)
		// ground.scale.set(1.2,1.3,1);
		// Caught.removeScene();
		// scene.remove(backgroundImage,ground);

		var sentencebackgroundGeo = new THREE.PlaneBufferGeometry(3200,2500);
		sentencebackground = new THREE.Mesh(sentencebackgroundGeo,sentencebackgroundMaterial);
		// sentencebackgroundGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sentencebackground.position.set(0,500,-900);

		var sentencebackgroundCoverGeo = new THREE.PlaneBufferGeometry(2850,1000);
		sentencebackgroundCover = new THREE.Mesh(sentencebackgroundCoverGeo,sentencebackgroundCoverMaterial);
		// sentencebackgroundCoverGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sentencebackgroundCover.position.set(-10,450,-800);

		// var sentencebrickTextureGeo = new THREE.PlaneBufferGeometry(90,130);
		// sentencebrickTexture = new THREE.Mesh(sentencebrickTextureGeo,sentencebrickTextureMaterial);
		// // sentencebrickTextureGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );

		var sentencecolumnGeo = new THREE.PlaneBufferGeometry(291,1080);
		sentencecolumn = new THREE.Mesh(sentencecolumnGeo,sentencecolumnMaterial);
		// sentencecolumnGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sentencecolumn.position.set(200,160,-530);

		var sentencegossiperGeo = new THREE.PlaneBufferGeometry(400,500);
		sentencegossiper = new THREE.Mesh(sentencegossiperGeo,sentencegossiperMaterial);
		// sentencegossiperGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sentencegossiper.position.set(-70,160,-600);

		var sentencehangingManGeo = new THREE.PlaneBufferGeometry(285,887);
		sentencehangingMan = new THREE.Mesh(sentencehangingManGeo,sentencehangingManMaterial);
		// sentencehangingManGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sentencehangingMan.position.set(750,210,-500);

		var sentenceleftTorchGeo = new THREE.PlaneBufferGeometry(400,440);
		sentenceleftTorch = new THREE.Mesh(sentenceleftTorchGeo,sentenceleftTorchMaterial);
		// sentenceleftTorchGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sentenceleftTorch.position.set(10,450,-601);

		var sentencepikemanGeo = new THREE.PlaneBufferGeometry(241,656);
		var sentencepikemanCloseGeo = new THREE.PlaneBufferGeometry(241,656);
		sentencepikeman = new THREE.Mesh(sentencepikemanGeo,sentencepikemanMaterial);
		sentencepikeman2 = new THREE.Mesh(sentencepikemanCloseGeo,sentencepikemanMaterial);
		sentencepikeman3 = new THREE.Mesh(sentencepikemanCloseGeo,sentencepikemanMaterial);
		// sentencepikemanGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sentencepikeman.position.set(-550,250,-560);
		sentencepikeman2.position.set(485,0,-490);
		sentencepikeman3.position.set(300,0,-531);

		var sentencepointerGeo = new THREE.PlaneBufferGeometry(570,557);
		sentencepointer = new THREE.Mesh(sentencepointerGeo,sentencepointerMaterial);
		// sentencepointerGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sentencepointer.position.set(-200,-100,-550);

		var sentencerightColumnGeo = new THREE.PlaneBufferGeometry(600,1000);
		sentencerightColumn = new THREE.Mesh(sentencerightColumnGeo,sentencerightColumnMaterial);
		// sentencerightColumnGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sentencerightColumn.position.set(850,300,-650);

		var sentencerightTorchGeo = new THREE.PlaneBufferGeometry(235,360);
		sentencerightTorch = new THREE.Mesh(sentencerightTorchGeo,sentencerightTorchMaterial);
		// sentencerightTorchGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sentencerightTorch.position.set(350,400,-531);

		var sentencewallGeo = new THREE.PlaneBufferGeometry(421,1084);
		sentencewall = new THREE.Mesh(sentencewallGeo,sentencewallMaterial);
		// sentencewallGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		sentencewall.position.set(-750,150,-530);



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

		









		scene.add(sentencebackground,sentencebackgroundCover,sentencecolumn,sentencegossiper,sentencehangingMan,sentenceleftTorch,sentencepikeman,sentencepikeman2,sentencepikeman3,sentencepointer, sentencerightColumn,sentencerightTorch,sentencewall);
		animate();
		// newScene();

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
		var sentence = {opacity:1};

		TweenMax.to(sentence, 1, {opacity:0, onUpdate:fadeOut, onComplete:remove});

		function fadeOut() {
			document.querySelector('.sentence').style.opacity = sentence.opacity;
		}
		function remove() {
			document.querySelector('.sentence').parentNode.removeChild(document.querySelector('.sentence'));
		}
	},
	startScene:function() {
		document.querySelector('.sentence').style.zIndex = 2;
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
		cloudOverlay.position.set(0,0,-400);
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
	}

}
// Sentence.init();