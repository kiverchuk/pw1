// var json = null;
// window.onload = function(){
// 	//comand buttons
// 	let comandbtn = document.querySelector('.comand');
// 	let closecomand = document.querySelector('.btnclose');
// 	let comandpanel = document.querySelector('.absolute');
// 	let coshopen = document.querySelector('.coshopen');
// 	let closecosh = document.querySelector('.coshclose');
// 	let coshpanel = document.querySelector('.coshpanel');
// 	let coshnum = document.querySelector('.coshnum');

// 	//new block
// 	let news = document.querySelector('#news');

// 	//cauta meniu
// 	let brand = document.querySelector('#brand');
// 	let model = document.querySelector('#model');
// 	let tmotor = 'input[name="gridRadiosMotor"]:checked';
// 	let tcutie = 'input[name="gridRadiosGearbox"]:checked';
// 	let tract = 'input[name="gridRadiosPrivod"]:checked';
// 	let cauta = document.querySelector('#cauta');

// 	//comfort buttons
// 	let comfort1 = document.querySelector('#comfort1');
// 	let comfort2 = document.querySelector('#comfort2');
// 	let comfort3 = document.querySelector('#comfort3');
// 	let comfort4 = document.querySelector('#comfort4');
// 	let comfort5 = document.querySelector('#comfort5');
// 	let comfort6 = document.querySelector('#comfort6');
// 	let comfort7 = document.querySelector('#comfort7');
// 	let comfort8 = document.querySelector('#comfort8');

// 	//securitatea buttons
// 	let secure1 = document.querySelector('#secure1');
// 	let secure2 = document.querySelector('#secure2');
// 	let secure3 = document.querySelector('#secure3');
// 	let secure4 = document.querySelector('#secure4');
// 	let secure5 = document.querySelector('#secure5');
// 	let secure6 = document.querySelector('#secure6');
// 	let secure7 = document.querySelector('#secure7');
// 	let secure8 = document.querySelector('#secure8');

// 	//cars sets
// 	let color = document.querySelector('#color');
// 	let colorin = document.querySelector('#colorin');
// 	let discuri = document.querySelector('#discuri');
// 	let audion = document.querySelector('#audio');
// 	let aer = document.querySelector('#aer');
// 	let parbrize = document.querySelector('#parbrize');
// 	let img = document.querySelector('#img');
	
// 	//cars info
// 	let ibrand = document.querySelector('.brand');
// 	let imobel = document.querySelector('.model');
// 	let iage = document.querySelector('.age');
// 	let imc = document.querySelector('.motorcapacity');
// 	let imp = document.querySelector('.motorputere');
// 	let imt = document.querySelector('.motortoplivo');
// 	let imcu = document.querySelector('.motorcutie');
// 	let itract = document.querySelector('.tractiunea');
// 	let icc = document.querySelector('.carcorp');
// 	let icp = document.querySelector('.pretdefoult');

// 	(async () => {
// 	  const response = await fetch('./js/data.json')
// 	  json = await response.json()
// 	  setbrand(json,brand);
// 	  setmodel(json,model,brand.value)
// 	  //console.log(json.models[brand.value])
	  
// 	})()
	
// 	// basicServicesSelect.onchange = function(){
// 	// 	console.log(basicServicesSelect.checked);
// 	// }
// 	// setTimeout(function() {
// 	// 	console.log(json.brands)
// 	// }, 1000);
// 	
// 	// comandbtn.addEventListener("click", function(){
// 	// 	comandpanel.style.display = 'block';
// 	// });
// 	closecomand.addEventListener("click", function(){
// 		comandpanel.style.display = 'none';
// 	});

// 	brand.onchange = function(){
// 		setmodel(json,model,brand.value)
// 	}
// 	cauta.onclick = function(){
// 		console.log(brand.value);
// 		console.log(model.value);
// 		let tm = "";
// 		let tc = "";
// 		let tr = "";
// 		if(document.querySelector(tmotor))
// 			tm = document.querySelector(tmotor).value
// 		if(document.querySelector(tcutie))
// 			tc = document.querySelector(tcutie).value
// 		if(document.querySelector(tract))
// 			tr = document.querySelector(tract).value
// 			newslist(json, brand.value, model.value, tm, tc, tr, news);
// 	}
	

// }

// function setbrand(json,obj){
// 	obj.innerHTML = "";
// 	for(let i = 0; i < json.brands.length; i++){
// 		let option = document.createElement('option');
// 		option.innerHTML = json.brands[i];
// 		option.value = json.brands[i];
// 		obj.appendChild(option);
// 	}
// }
// function setmodel(json,obj,objval){
// 	obj.innerHTML = "";
// 	for(let i = 0; i < json.models[objval].length; i++){
// 		let option = document.createElement('option');
// 		option.innerHTML = json.models[objval][i];
// 		option.value = json.models[objval][i];
// 		obj.appendChild(option);
// 	}
// }

// function newslist(js,br,md,tm,tc,tt,obj){
// 	obj.innerHTML = "";
// 	for(let i = 0; i < js.cars.length; i++){		
// 		let car = js.cars[i];
// 		if( car.brand == br &&
// 			car.model == md &&
// 			(car.tipmotor == tm || tm == "") &&
// 			(car.tipcutie == tc || tc == "")&&
// 			(car.tiptract == tt || tt == "")){
// 				let carbloc = document.createElement('div');
// 				carbloc.classList.add("new");

// 				let carimg = document.createElement('img');
// 				carimg.classList.add("carsimg");
// 				carimg.src = car.img;
// 				carbloc.appendChild(carimg);

// 				let carh2 = document.createElement('h2');
// 				carh2.innerHTML = br + " " + md;
// 				carbloc.appendChild(carh2);

// 				let carp = document.createElement('p');
// 				carp.innerHTML = "Age: " + car.anproductie;
// 				carbloc.appendChild(carp);

// 				carp = document.createElement('p');
// 				carp.innerHTML = "Motor Capacity: " + car.capacitateamotor;
// 				carbloc.appendChild(carp);

// 				carp = document.createElement('p');
// 				carp.innerHTML = "Price: " + car.pretdefolt;
// 				carbloc.appendChild(carp);

// 				let carbtn = document.createElement('button');
// 				carbtn.classList.add("btn","btn-primary","comand");
// 				carbtn.innerHTML = "Comand";
// 				carbtn.id = i;
// 				carbloc.appendChild(carbtn);

// 				obj.appendChild(carbloc);
// 			}
// 	}
// }

// function separatecar(){

// }


window.onload = function(){
	(async () => {
		const response = await fetch('./js/data.json')
		var json = await response.json();
		var car_object = new Cars(json);
		var manager_object = new Manager();
		manager_object.SetOllDomConections(manager_object.me);
		manager_object.SetOllDomListeners(manager_object.me,car_object.json);
		manager_object.SetSelectBrand(manager_object.me,car_object.json.brands);
		manager_object.SetSelectModel(manager_object.me,car_object.json.models);

		
	})()
}