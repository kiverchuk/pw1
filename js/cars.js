class cars{
    //comand buttons
    constructor(json){
        this.comandbtn = document.querySelector('.comand');
        this.closecomand = document.querySelector('.btnclose');
        this.comandpanel = document.querySelector('.absolute');
        this.coshopen = document.querySelector('.coshopen');
        this.closecosh = document.querySelector('.coshclose');
        this.coshpanel = document.querySelector('.coshpanel');
        this.coshnum = document.querySelector('.coshnum');

        //new block
        this.news = document.querySelector('#news');

        //cauta meniu
        this.brand = document.querySelector('#brand');
        this.model = document.querySelector('#model');
        this.tmotor = 'input[name="gridRadiosMotor"]:checked';
        this.tcutie = 'input[name="gridRadiosGearbox"]:checked';
        this.tract = 'input[name="gridRadiosPrivod"]:checked';
        this.cauta = document.querySelector('#cauta');

        //comfort buttons
        this.comfort1 = document.querySelector('#comfort1');
        this.comfort2 = document.querySelector('#comfort2');
        this.comfort3 = document.querySelector('#comfort3');
        this.comfort4 = document.querySelector('#comfort4');
        this.comfort5 = document.querySelector('#comfort5');
        this.comfort6 = document.querySelector('#comfort6');
        this.comfort7 = document.querySelector('#comfort7');
        this.comfort8 = document.querySelector('#comfort8');

        //securitatea buttons
        this.secure1 = document.querySelector('#secure1');
        this.secure2 = document.querySelector('#secure2');
        this.secure3 = document.querySelector('#secure3');
        this.secure4 = document.querySelector('#secure4');
        this.secure5 = document.querySelector('#secure5');
        this.secure6 = document.querySelector('#secure6');
        this.secure7 = document.querySelector('#secure7');
        this.secure8 = document.querySelector('#secure8');

        //cars sets
        this.color = document.querySelector('#color');
        this.colorin = document.querySelector('#colorin');
        this.discuri = document.querySelector('#discuri');
        this.audion = document.querySelector('#audio');
        this.aer = document.querySelector('#aer');
        this.parbrize = document.querySelector('#parbrize');
        this.img = document.querySelector('#img');
        
        //cars info
        this.ibrand = document.querySelector('.brand');
        this.imobel = document.querySelector('.model');
        this.iage = document.querySelector('.age');
        this.imc = document.querySelector('.motorcapacity');
        this.imp = document.querySelector('.motorputere');
        this.imt = document.querySelector('.motortoplivo');
        this.imcu = document.querySelector('.motorcutie');
        this.itract = document.querySelector('.tractiunea');
        this.icc = document.querySelector('.carcorp');
        this.icp = document.querySelector('.pretdefoult');
        
        this.json = json;
        this.setbrand(this.json,this.brand);
        this.setmodel(this.json,this.model,this.brand.value)
        this.listeners(this);
    }

    listeners(me){
        news.addEventListener("click", function(e){
            if(e.target.classList.contains('comand'))
                me.comandpanel.style.display = 'block';		
        });
        me.closecomand.addEventListener("click", function(){
                me.comandpanel.style.display = 'none';
            });
        me.brand.onchange = function(){
            me.setmodel(me.json,me.model,me.brand.value)
        }
        me.cauta.onclick = function(){
            //console.log(brand.value);
            //console.log(model.value);
            let tm = "";
            let tc = "";
            let tr = "";
            if(document.querySelector(me.tmotor))
                tm = document.querySelector(me.tmotor).value
            if(document.querySelector(me.tcutie))
                tc = document.querySelector(me.tcutie).value
            if(document.querySelector(me.tract))
                tr = document.querySelector(me.tract).value
                me.newslist(me.json, me.brand.value, me.model.value, tm, tc, tr, me.news);
        }
        //me.cauta.click();
    }

    
    setbrand(json,obj){
        obj.innerHTML = "";
        for(let i = 0; i < json.brands.length; i++){
            let option = document.createElement('option');
            option.innerHTML = json.brands[i];
            option.value = json.brands[i];
            obj.appendChild(option);
        }
    }

    setmodel(json,obj,objval){
        obj.innerHTML = "";
        for(let i = 0; i < json.models[objval].length; i++){
            let option = document.createElement('option');
            option.innerHTML = json.models[objval][i];
            option.value = json.models[objval][i];
            obj.appendChild(option);
        }
    }

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