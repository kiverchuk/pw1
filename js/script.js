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
	let tmotor = 'input[name="gridRadiosMotor"]:checked';
	let tcutie = 'input[name="gridRadiosGearbox"]:checked';
	let tract = 'input[name="gridRadiosPrivod"]:checked';
	let cauta = document.querySelector('#cauta');

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
	let img = document.querySelector('#img');

	(async () => {
	  const response = await fetch('./js/data.json')
	  json = await response.json()
	  setbrand(json,brand);
	  setmodel(json,model,brand.value)
	  //console.log(json.models[brand.value])
	})()
	
	// basicServicesSelect.onchange = function(){
	// 	console.log(basicServicesSelect.checked);
	// }
	// setTimeout(function() {
	// 	console.log(json.brands)
	// }, 1000);	
	comandbtn.addEventListener("click", function(){
		comandpanel.style.display = 'block';
	});
	closecomand.addEventListener("click", function(){
		comandpanel.style.display = 'none';
	});

	brand.onchange = function(){
		setmodel(json,model,brand.value)
	}
	cauta.onclick = function(){
		console.log(brand.value);
		console.log(model.value);
		if(document.querySelector(tmotor))
			console.log(document.querySelector(tmotor).value)
		if(document.querySelector(tcutie))
			console.log(document.querySelector(tcutie).value)
		if(document.querySelector(tract))
			console.log(document.querySelector(tract).value)
	}
	

}

function setbrand(json,obj){
	obj.innerHTML = "";
	for(let i = 0; i < json.brands.length; i++){
		let option = document.createElement('option');
		option.innerHTML = json.brands[i];
		option.value = json.brands[i];
		obj.appendChild(option);
	}
}
function setmodel(json,obj,objval){
	obj.innerHTML = "";
	for(let i = 0; i < json.models[objval].length; i++){
		let option = document.createElement('option');
		option.innerHTML = json.models[objval][i];
		option.value = json.models[objval][i];
		obj.appendChild(option);
	}
}	

