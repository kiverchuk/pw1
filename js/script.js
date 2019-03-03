var json = null;
window.onload = function(){
	let comand = document.querySelector('.comand');
	let closecomand = document.querySelector('.btnclose');
	let comandpanel = document.querySelector('.absolute');

	(async () => {
	  const response = await fetch('./js/data.json')
	  json = await response.json()
	})()

	let basicServicesSelect = document.querySelector('#lkjh');
		basicServicesSelect.onchange = function(){
		console.log(basicServicesSelect.checked);
	}
	// setTimeout(function() {
	// 	console.log(json)
	// }, 1000);

	
	comand.addEventListener("click", function(){
		comandpanel.style.display = 'block';
	});
	closecomand.addEventListener("click", function(){
		comandpanel.style.display = 'none';
	});



}

	

