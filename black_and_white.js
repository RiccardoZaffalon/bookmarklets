(function(){
	const elements = document.body.querySelectorAll('*');
	const images = document.getElementsByTagName('img');
	elements.forEach(el => {
		el.style.backgroundColor = 'white';
		el.style.color = 'black';
	});
	images.forEach(img => img.remove());
})()
