var json = null;
window.onload = function(){
	//comand buttons
	let comandbtn = document.querySelector('.comand');
	let closecomand = document.querySelector('.btnclose');
	let comandpanel = document.querySelector('.absolute');
	let coshopen = document.querySelector('.coshopen');
	let closecosh = document.querySelector('.coshclose');
	let coshpanel = document.querySelector('.coshpanel');
	let coshnum = document.querySelector('.coshnum');

	//cauta meniu
	let brand = document.querySelector('#brand');
	let model = document.querySelector('#model');
	let tmotor = document.querySelector('#tmotor');
	let tcutie = document.querySelector('#tcutie');
	let tract = document.querySelector('#tract');

	//comfort buttons
	let comfort1 = document.querySelector('#comfort1');
	let comfort2 = document.querySelector('#comfort2');
	let comfort3 = document.querySelector('#comfort3');
	let comfort4 = document.querySelector('#comfort4');
	let comfort5 = document.querySelector('#comfort5');
	let comfort6 = document.querySelector('#comfort6');
	let comfort7 = document.querySelector('#comfort7');
	let comfort8 = document.querySelector('#comfort8');

	//securitatea buttons
	let secure1 = document.querySelector('#secure1');
	let secure2 = document.querySelector('#secure2');
	let secure3 = document.querySelector('#secure3');
	let secure4 = document.querySelector('#secure4');
	let secure5 = document.querySelector('#secure5');
	let secure6 = document.querySelector('#secure6');
	let secure7 = document.querySelector('#secure7');
	let secure8 = document.querySelector('#secure8');

	//cras sets
	let color = document.querySelector('#color');
	let colorin = document.querySelector('#colorin');
	let discuri = document.querySelector('#discuri');
	let audion = document.querySelector('#audio');
	let aer = document.querySelector('#aer');
	let parbrize = document.querySelector('#parbrize');

	(async () => {
	  const response = await fetch('./js/data.json')
	  json = await response.json()
	})()

	
	basicServicesSelect.onchange = function(){
		console.log(basicServicesSelect.checked);
	}
	// setTimeout(function() {
	// 	console.log(json)
	// }, 1000);	
	comandbtn.addEventListener("click", function(){
		comandpanel.style.display = 'block';
	});
	closecomand.addEventListener("click", function(){
		comandpanel.style.display = 'none';
	});



}

	

