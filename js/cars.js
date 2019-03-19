class Cars{
    constructor(json){       
        this.json = json;
        this.me = this;
        
    }
    setCarPanelInfo(staticInfo, variableInfo, comfortBtns, securityBtns, carkey){//
        //console.log(variableInfo);
        this.setCarStaticInfo(staticInfo, this.json.cars[carkey-1]);
        this.setCarVariableInfo(variableInfo, this.json.cars[carkey-1]);
        this.setCarComfort(comfortBtns, this.json.cars[carkey-1]);
            // me.setCarSecurity(staticInfo, this.json.cars[carkey-1]);
        }
    setCarStaticInfo(staticinfo, car){
        //console.log(staticinfo['tractiunea']);
        staticinfo['brand'].innerHTML = car.brand;
        staticinfo['model'].innerHTML = car.model;
        staticinfo['age'].innerHTML = car.anproductie;
        staticinfo['motorcapacity'].innerHTML = car.capacitateamotor;
        staticinfo['motorputere'].innerHTML = car.puteremotor;
        staticinfo['motortoplivo'].innerHTML = car.tipmotor;
        staticinfo['motorcutie'].innerHTML = car.tipcutie;
        staticinfo['tractiunea'].innerHTML = car.tiptract;
        staticinfo['carcorp'].innerHTML = car.tipcorp;
        staticinfo['pretdefoult'].innerHTML = car.pretdefolt;
        staticinfo['pretdefoult'].src = car.img;
    }
    setCarVariableInfo(varinfo, car){
        //console.log(varinfo);
        this.creatSelectInfo(varinfo['color'], car.color);
        this.creatSelectInfo(varinfo['colorin'], car.colorsalon);
        this.creatSelectInfo(varinfo['discuri'], car.disck);
        this.creatSelectInfo(varinfo['audio'], car.audio);
        this.creatSelectInfo(varinfo['aer'], car.aer);
        this.creatSelectInfo(varinfo['parbrize'], car.parbrize);
    }
    setCarComfort(securityBtns,car){
        for(let i = 0; i < car.comfort.length; i++){
            securityBtns[i].value = car.comfort[i].price;
            switch (car.comfort[i].proprety){
                case "0":
                    securityBtns[i].removeAttribute('disabled', true);
                    securityBtns[i].removeAttribute('checked', true);
                    //securityBtns[i].classList.add("disabled"); 
                    securityBtns[i].classList.remove("disabled"); 
                break;
                case "1":
                    securityBtns[i].setAttribute('disabled', true);
                    securityBtns[i].setAttribute('checked', true);
                    securityBtns[i].classList.add("disabled"); 
                break;
                case "2":
                    securityBtns[i].setAttribute('disabled', true);
                    securityBtns[i].removeAttribute('checked', true);
                    securityBtns[i].classList.add("disabled"); 
                break;
            }
        }
    }
    setCarSecurity(me,car){

    }
    creatSelectInfo(obj, arraysets){
        console.log(arraysets.length);
        obj.innerHTML = "";
        for(let i = 0; i < arraysets.length; i++){
            let option = document.createElement('option');
            let textprice = (arraysets[i].price != 0)? " $" +arraysets[i].price : ""; 
            option.innerHTML = arraysets[i].text +  textprice;
            option.value = arraysets[i].price;
            obj.appendChild(option);
        }
    }

}