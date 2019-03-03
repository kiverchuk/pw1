var json = null;
window.onload = function(){
	(async () => {
	  const response = await fetch('./js/data.json')
	  json = await response.json()
	})()

	let basicServicesSelect = document.querySelector('#lkjh');
		basicServicesSelect.onchange = function(){
		console.log(basicServicesSelect.checked);
	}
	setTimeout(function() {
		console.log(json)
	}, 1000);

	let comand = document.querySelector('.comand');
	let closecomand = document.querySelector('.btnclose');
	let comandpanel = document.querySelector('.absolute');
	comand.addEventListener("click", function(){
		comandpanel.style.display = 'block';
	});
	closecomand.addEventListener("click", function(){
		comandpanel.style.display = 'none';
	});



}

	



// function httpGet(url) {
//   	return new Promise(function(resolve, reject) {
// 		    var xhr = new XMLHttpRequest();
// 		    xhr.open('GET', url, true);
// 		    xhr.onload = function() {      
// 		        resolve(this.response);
// 		    };        
// 		    xhr.send();
// 	    });
// }
