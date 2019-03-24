
window.onload = function(){
	(async () => {
		const response = await fetch('./js/data.json')
		var json = await response.json();
		var car_object = new Cars(json);
		var cosh_object = new Cosh();
		var manager_object = new Manager(car_object, cosh_object);
		manager_object.setAllDomConections(manager_object.me);
		manager_object.setAllDomListeners(manager_object.me, car_object.json, car_object);
		manager_object.setSelectBrand(manager_object.me, car_object.json.brands);
		manager_object.setSelectModel(manager_object.me, car_object.json.models);
		manager_object.actionClickSearchMeniu(manager_object.me, car_object.json);
		cosh_object.numOrders(manager_object.comandButtons['coshnum']);
		
	})()
}

// console.log(sumeaza(20,30))
// function sumeaza(a,b){
// 	let array = [];
// 	array.length = a;

// 	let array2 = [];
// 	array2.length = b;

// 	return array.concat(array2).length;
// }

// console.log(raspuns(14641,4))
// //console.log(3*3*3)
// function raspuns(num,n){
// 	let delta = 0.000001;
// 	let raspuns = 1;
// 	let nr = 1;
// 	let ii = 0;
// 	while (nr < num){
// 		ii++;
// 		nr = 1;
// 		for(let i = 0; i < n; i++){
// 			nr *= ii;
// 		}		
// 	}
	
// 	while(Math.abs(nr - num) > delta){
// 		if(nr == num)
// 			return ii;
// 		if(nr > num){
// 			let aprox = ii-1;

// 			return aprox;
// 		}
// 		nr = 1;
// 		for(let i = 0; i < n; i++){
// 			nr *= ii;
// 		}
// 		//break;
	
// 	}		
// 	// if(nr < num)
// 	return ii;
// }
