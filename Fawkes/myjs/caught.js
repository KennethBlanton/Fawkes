
var camera, scene, renderer;
var container;

var Caught = {
	init: function() {
		// for (var i = document.querySelector('.container').children.length - 1; i >= 0; i--) {
		// 	document.querySelector('.container').children[i].classList.remove('active');
		// }
		// document.querySelector('.caught').classList.add('active');

				scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x000000 );
		if(document.querySelector('.caught')) {
			console.log('already here!');
			container = document.querySelector('.caught');
			
		} else {
			container = document.createElement('div');
			container.classList.add('caught');
			document.querySelector('.container').appendChild(container);
			console.log(container);
		}

		camera = new THREE.PerspectiveCamera( 90, window.innerWidth / (window.innerWidth*(9/16)), 1, 1500 );
		camera.position.y = 150;
		camera.position.z = 1;

		renderer = new THREE.CanvasRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth+10, (window.innerWidth*(9/16)) );
		container.appendChild( renderer.domElement );




		backgroundImage = new THREE.Mesh(backgroundGeo,backgroundMaterial); 
		backgroundImage.position.set(0,150,-1000);



		ground = new THREE.Mesh(groundGeo,groundMaterial);
		groundMaterial.opacity = .75; 
		ground.position.set(0,-220,-900);

		var barrelsGeo = new THREE.PlaneBufferGeometry(1500,400);
		barrels = new THREE.Mesh(barrelsGeo,barrelMaterial);
		barrelsGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		barrels.position.set(0,100,-600);
		// barrels.rotation.x = -1;
		// barrels.scale.set(.7,.7,1);



		puddleGeo = new THREE.PlaneBufferGeometry(100,50);

		puddle1 = new THREE.Mesh(puddleGeo,puddleMaterial);
		puddle1.position.set(0,-100,-899);

		puddle2 = new THREE.Mesh(puddleGeo,puddleMaterial);
		puddle2.position.set(-700,-200,-700);


		var fuseGeo = new THREE.PlaneBufferGeometry(1000,300);
		fuse = new THREE.Mesh(fuseGeo,fuseMaterial);
		fuse.position.set(-300,0,-801);

		var lanternGeo = new THREE.PlaneBufferGeometry(100,100);
		lantern = new THREE.Mesh(lanternGeo,lanternMaterial);
		lantern.position.set(-420,50,-400)
		// lantern.rotation.x = -1;
		// lantern.scale.set(.7,.7,1);

		var lantern2Geo = new THREE.PlaneBufferGeometry(80,80);
		lantern2 = new THREE.Mesh(lantern2Geo,lanternMaterial);
		lantern2.position.set(170,65,-250)
		// lantern2.rotation.x = -1;
		// lantern2.scale.set(.7,.7,1);

		var badGuysGeo = new THREE.PlaneBufferGeometry(300,200);
		badGuys = new THREE.Mesh(badGuysGeo, badGuysMaterial);
		badGuysGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 100, 0) );
		badGuys.position.set(300,-100,-300);
		// badGuys.rotation.x = -1;
		// badGuys.scale.set(.7,.7,1);


		var fawkesGeo = new THREE.PlaneBufferGeometry(100,200);
		fawkes = new THREE.Mesh(fawkesGeo, fawkesMaterial);
		fawkesGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 100, 0) );
		fawkes.position.set(-300,-100,-300);
		// fawkes.rotation.x = -1;
		// fawkes.scale.set(.7,.7,1);
		


		var columnsGeo = new THREE.PlaneBufferGeometry(840,550);
		columns = new THREE.Mesh(columnsGeo, columnsMaterial);
		columns.position.set(10,150,-250)

		
		scene.add(backgroundImage,barrels,ground,puddle1,puddle2,fuse,lantern,badGuys,lantern2, fawkes, columns);

	
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

		var counter = 5;
		
		for (var i = 0; i < counter; i++) {
			setTimeout(makeRainDrop, counter*500);
			counter--;
		}

		function makeRainDrop() {
			var rainGeo = new THREE.PlaneBufferGeometry(2,2);
			var rain = new THREE.Mesh(rainGeo,rainMaterial);
			var randomX = Math.random() * window.innerWidth/2;
			var randomSign;
			if(Math.random() > .49) {
				randomSign = 1;
			} else {
				randomSign = -1;
			}
			scene.add(rain);
			rain.position.set(randomSign * randomX*.5, window.innerHeight/2,-100);
			setInterval(function(){
				var randomX = Math.random() * window.innerWidth/2;
				rain.position.y -=3;
				if(rain.position.y <= -window.innerHeight/2) {
					rain.position.y = window.innerHeight/2;
					rain.position.x = randomSign*randomX*.5;
					// rain.position.z = Math.random() *-900;
				}
			},10)
			counter++;
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


		animate(Caught);
		// setTimeout(Caught.standUp, 1000);
		// newScene();

	},
	standUp: function() {
		var fawkesScale = {stand:-1,scaleX:.7,scaleY:.7};
		var badGuysScale = {stand:-1,scaleX:.7,scaleY:.7};
		var barrelsScale = {stand:-1,scaleX:1,scaleY:1};
		var lanternScale = {stand:-1,scaleX:.7,scaleY:.7};
		

		var lanternStand = TweenLite.to(lanternScale, .5, {stand:0, scaleX:1, scaleY:1, onUpdate:standLantern,}) 
		// onComplete:function(){
		// 	var fawkesStand = TweenLite.to(fawkesScale, .5, {stand:0, scaleX:1, scaleY:1, onUpdate:standPeople,
		// 		onComplete:function(){
		// 			var barrelsStand = TweenLite.to(barrelsScale, .5, {stand:0, scaleX:1, scaleY:1, onUpdate:standBarrels})
		// 		}})
		// }});
		
		function standLantern() {
			lantern.rotation.x = lanternScale.stand;
			lantern.scale.set(lanternScale.scaleX,lanternScale.scaleY,1);
			lantern2.rotation.x = lanternScale.stand;
			lantern2.scale.set(lanternScale.scaleX,lanternScale.scaleY,1);
		}
		function standPeople() {
			fawkes.rotation.x = fawkesScale.stand;
			fawkes.scale.set(fawkesScale.scaleX,fawkesScale.scaleY,1);
			badGuys.rotation.x = fawkesScale.stand;
			badGuys.scale.set(fawkesScale.scaleX,fawkesScale.scaleY,1);
		}
		function standBarrels() {
			barrels.rotation.x = barrelsScale.stand;
			barrels.scale.set(barrelsScale.scaleX,barrelsScale.scaleY,1);
		}
	},
	removeScene: function() {
		var caught = {opacity:1};

		TweenMax.to(caught, 1, {opacity:0, onUpdate:fadeOut, onComplete:remove});

		function fadeOut() {
			document.querySelector('.caught').style.opacity = caught.opacity;
		}
		function remove() {
			console.log(document.querySelector('.caught'))
			document.querySelector('.caught').parentNode.removeChild(document.querySelector('.caught'));
		}
		
	},
	startScene:function() {
		console.log(document.querySelector('.caught'))
		document.querySelector('.caught').style.zIndex = 2;
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
// Caught.init();





