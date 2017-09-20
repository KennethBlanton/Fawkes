var Torture = {
	init: function() {
		var camera, scene, renderer;
		var container;
				scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x000000 );

		if(document.querySelector( '.clouds' )) {
			container = document.querySelector( '.clouds' );
		} else {
			container = document.createElement('div');
			container.classList.add('.clouds');
		}

		camera = new THREE.PerspectiveCamera( 90, window.innerWidth / (window.innerWidth*(9/16)), 1, 1500 );
		camera.position.y = 150;
		camera.position.z = 1;

		renderer = new THREE.CanvasRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth+10, (window.innerWidth*(9/16)) );
		container.appendChild( renderer.domElement );


		// var torturebackgroundGeo = new THREE.PlaneBufferGeometry(3500,2000);
		// torturebackground = new THREE.Mesh(torturebackgroundGeo,torturebackgroundMaterial);
		// // torturebackgroundGeo.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200, 0) );
		// torturebackground.position.set(0,00,-900)
				backgroundImage = new THREE.Mesh(backgroundGeo,backgroundMaterial); 
		backgroundImage.position.set(0,150,-1000);
		backgroundImage.scale.set(1.2,1.8,1)


		

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
		window.addEventListener( 'resize', onWindowResize, false );

		














		scene.add(backgroundImage);
		animate();
	}
}
// Torture.init();