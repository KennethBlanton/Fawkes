window.addEventListener( 'resize', resize, false );
	document.querySelector('.background1').style.height = window.innerWidth*(9/16) + 'px';
	document.querySelector('.background3').style.height = window.innerWidth*(9/16) + 'px';
	document.querySelector('.buttons').style.height = window.innerWidth*(9/16) + 'px';
	document.querySelector('.overlay').style.height = window.innerWidth*(9/16) + 'px';
function resize() {

	document.querySelector('.background1').style.height = window.innerWidth*(9/16) + 'px';
	document.querySelector('.background3').style.height = window.innerWidth*(9/16) + 'px';
	document.querySelector('.buttons').style.height = window.innerWidth*(9/16) + 'px';
	document.querySelector('.overlay').style.height = window.innerWidth*(9/16) + 'px';

}