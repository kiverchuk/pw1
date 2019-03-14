class Cars{
    //comand buttons
    constructor(json){
        
        this.json = json;
        this.me = this;
        //this.setbrand(this.json,this.brand);
        //this.setmodel(this.json,this.model,this.brand.value)
        //this.listeners(this);
    }

    // listeners(me){
    //     news.addEventListener("click", function(e){
    //         if(e.target.classList.contains('comand'))
    //             me.comandpanel.style.display = 'block';		
    //     });
    //     me.closecomand.addEventListener("click", function(){
    //             me.comandpanel.style.display = 'none';
    //         });
    //     me.brand.onchange = function(){
    //         me.setmodel(me.json,me.model,me.brand.value)
    //     }
    //     me.cauta.onclick = function(){
    //         //console.log(brand.value);
    //         //console.log(model.value);
    //         let tm = "";
    //         let tc = "";
    //         let tr = "";
    //         if(document.querySelector(me.tmotor))
    //             tm = document.querySelector(me.tmotor).value
    //         if(document.querySelector(me.tcutie))
    //             tc = document.querySelector(me.tcutie).value
    //         if(document.querySelector(me.tract))
    //             tr = document.querySelector(me.tract).value
    //             me.newslist(me.json, me.brand.value, me.model.value, tm, tc, tr, me.news);
    //     }
    //     //me.cauta.click();
    // }

    
    // setbrand(json,obj){
    //     obj.innerHTML = "";
    //     for(let i = 0; i < json.brands.length; i++){
    //         let option = document.createElement('option');
    //         option.innerHTML = json.brands[i];
    //         option.value = json.brands[i];
    //         obj.appendChild(option);
    //     }
    // }

    // setmodel(json, obj, objval){
    //     obj.innerHTML = "";
    //     for(let i = 0; i < json.models[objval].length; i++){
    //         let option = document.createElement('option');
    //         option.innerHTML = json.models[objval][i];
    //         option.value = json.models[objval][i];
    //         obj.appendChild(option);
    //     }
    // }

    newslist(js,br,md,tm,tc,tt,obj){
        obj.innerHTML = "";
        for(let i = 0; i < js.cars.length; i++){		
            let car = js.cars[i];
            if( car.brand == br &&
                car.model == md &&
                (car.tipmotor == tm || tm == "") &&
                (car.tipcutie == tc || tc == "")&&
                (car.tiptract == tt || tt == "")){
                    let carbloc = document.createElement('div');
                    carbloc.classList.add("new");
    
                    let carimg = document.createElement('img');
                    carimg.classList.add("carsimg");
                    carimg.src = car.img;
                    carbloc.appendChild(carimg);
    
                    let carh2 = document.createElement('h2');
                    carh2.innerHTML = br + " " + md;
                    carbloc.appendChild(carh2);
    
                    let carp = document.createElement('p');
                    carp.innerHTML = "Age: " + car.anproductie;
                    carbloc.appendChild(carp);
    
                    carp = document.createElement('p');
                    carp.innerHTML = "Motor Capacity: " + car.capacitateamotor;
                    carbloc.appendChild(carp);
    
                    carp = document.createElement('p');
                    carp.innerHTML = "Price: " + car.pretdefolt;
                    carbloc.appendChild(carp);
    
                    let carbtn = document.createElement('button');
                    carbtn.classList.add("btn","btn-primary","comand");
                    carbtn.innerHTML = "Comand";
                    carbtn.id = i;
                    carbloc.appendChild(carbtn);
    
                    obj.appendChild(carbloc);
                }
        }
    }
}