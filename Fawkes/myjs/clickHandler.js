document.querySelector('.back').addEventListener('click',function() {
	if(document.querySelector('.bridge')) {
		Bridge.newScene();
		setTimeout(function(){Death.init();
		Death.newScene()},1400);
		setTimeout(function(){Bridge.removeScene()},2800);
		setTimeout(function(){Death.startScene()},3500);
		// Buildings.init();
		// Bridge.removeScene();
	}
	else if(document.querySelector('.buildings')) {
		Buildings.newScene();
		setTimeout(function(){Bridge.init();
		Bridge.newScene()},1400);
		setTimeout(function(){Buildings.removeScene()},2800);
		setTimeout(function(){Bridge.startScene()},3500);
	}
	else if(document.querySelector('.caught')) {
		Caught.newScene();
		setTimeout(function(){Buildings.init();
		Buildings.newScene()},1400);
		setTimeout(function(){Caught.removeScene()},2800);
		setTimeout(function(){Buildings.startScene()},3500);

	}
	else if(document.querySelector('.king')) {
		King.newScene();
		setTimeout(function(){Caught.init();
		Caught.newScene()},1400);
		setTimeout(function(){King.removeScene()},2800);
		setTimeout(function(){Caught.startScene()},3500);

	}
	else if(document.querySelector('.sentence')) {
		Sentence.newScene();
		setTimeout(function(){King.init();
		King.newScene()},1400);
		setTimeout(function(){Sentence.removeScene()},2800);
		setTimeout(function(){King.startScene()},3500);

	}
	else if(document.querySelector('.hallway')) {
		Hallway.newScene();
		setTimeout(function(){Sentence.init();
		Sentence.newScene()},1400);
		setTimeout(function(){Hallway.removeScene()},2800);
		setTimeout(function(){Sentence.startScene()},3500);

	}
	else if(document.querySelector('.torture')) {
		Torture.newScene();
		setTimeout(function(){Hallway.init();
		Hallway.newScene()},1400);
		setTimeout(function(){Torture.removeScene()},2800);
		setTimeout(function(){Hallway.startScene()},3500);

	}
	else if(document.querySelector('.death')) {
		Death.newScene();
		setTimeout(function(){Torture.init();
		Torture.newScene()},1400);
		setTimeout(function(){Death.removeScene()},2800);
		setTimeout(function(){Torture.startScene()},3500);

	}
});
document.querySelector('.forward').addEventListener('click',function() {
	if(document.querySelector('.bridge')) {
		Bridge.newScene();
		setTimeout(function(){Buildings.init();
		Buildings.newScene()},1400);
		setTimeout(function(){Bridge.removeScene()},2800);
		setTimeout(function(){Buildings.startScene()},3500);

	}
	if(document.querySelector('.buildings')) {
		Buildings.newScene();
		setTimeout(function(){Caught.init();
		Caught.newScene()},1400);
		setTimeout(function(){Buildings.removeScene()},2800);
		setTimeout(function(){Caught.startScene()},3500);

	}
	if(document.querySelector('.caught')) {
		Caught.newScene();
		setTimeout(function(){King.init();
		King.newScene()},1400);
		setTimeout(function(){Caught.removeScene()},2900);
		setTimeout(function(){King.startScene()},3800);

	}
	if(document.querySelector('.king')) {
		King.newScene();
		setTimeout(function(){Sentence.init();
		Sentence.newScene()},1400);
		setTimeout(function(){King.removeScene()},2800);
		setTimeout(function(){Sentence.startScene()},3500);
	}
	if(document.querySelector('.sentence')) {
		Sentence.newScene();
		setTimeout(function(){Hallway.init();
		Hallway.newScene()},1400);
		setTimeout(function(){Sentence.removeScene()},2800);
		setTimeout(function(){Hallway.startScene()},3500);
	}
	if(document.querySelector('.hallway')) {
		Hallway.newScene();
		setTimeout(function(){Torture.init();
		Torture.newScene()},1400);
		setTimeout(function(){Hallway.removeScene()},2800);
		setTimeout(function(){Torture.startScene()},3500);
	}
	if(document.querySelector('.torture')) {
		Torture.newScene();
		setTimeout(function(){Death.init();
		Death.newScene()},1400);
		setTimeout(function(){Torture.removeScene()},2800);
		setTimeout(function(){Death.startScene()},3500);
	}
	if(document.querySelector('.death')) {
		Death.newScene();
		setTimeout(function(){Bridge.init();
		Bridge.newScene()},1400);
		setTimeout(function(){Death.removeScene()},2800);
		setTimeout(function(){Bridge.startScene()},3500);
	}
});

document.querySelector('.enter').addEventListener('click',function() {
	Bridge.init();
	Bridge.newScene();
	console.log('fired');
	document.querySelector('.background1').classList.add('active');
	// document.querySelector('background2').classList.add('active');
})
document.querySelector('.background3').addEventListener('click',function() {

	document.querySelector('.background3').classList.add('active');
	// document.querySelector('background2').classList.add('active');
	Bridge.startScene();
	document.querySelector('.open-overlay').style.zIndex = 101;
})
document.querySelector('.open-overlay').addEventListener('click',function(){
	document.querySelector('.overlay .text').classList.children;
	for (var i = document.querySelector('.overlay .text').children.length - 1; i >= 0; i--) {
		console.log(document.querySelector('.overlay .text').children[i].classList.contains('active'))
		document.querySelector('.overlay .text').children[i].classList.contains('active') ?
		document.querySelector('.overlay .text').children[i].classList.remove('active') : null
	}

	document.querySelector('.overlay').classList.contains('active') ?
	document.querySelector('.overlay').classList.remove('active') : 
	document.querySelector('.overlay').classList.add('active');
	if(document.querySelector('.bridge')) {

		document.querySelector('.bridge-words').classList.add('active');
	}
	if(document.querySelector('.buildings')) {
		document.querySelector('.buildings-words').classList.add('active');
	}
	if(document.querySelector('.caught')) {
		document.querySelector('.caught-words').classList.add('active');

	}
	if(document.querySelector('.king')) {
		document.querySelector('.king-words').classList.add('active');
	}
	if(document.querySelector('.sentence')) {
		document.querySelector('.sentence-words').classList.add('active');
	}
	if(document.querySelector('.hallway')) {
		document.querySelector('.hallway-words').classList.add('active');
	}
	if(document.querySelector('.torture')) {
		document.querySelector('.torture-words').classList.add('active');
	}
	if(document.querySelector('.death')) {
		document.querySelector('.death-words').classList.add('active');
	}

});

	document.querySelector('.bridgeClick').addEventListener('click',function(){
		console.log('fired');
		if(document.querySelector('.bridge')) {
			Bridge.hitLights();
		} else if(document.querySelector('.death')) {
			Death.humptyDumpty();
		}
		

	});
	document.querySelector('.buildingClick').addEventListener('click',function(){console.log('fired');Buildings.wiggleSign()});