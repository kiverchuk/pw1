class Cars{
    constructor(json){       
        this.json = json;
        this.me = this;
        this.curentPrice = 0;
        this.defoultPrice = 0;
    }
    setCarPanelInfo(staticInfo, variableInfo, comfortBtns, securityBtns, carkey){//
        //console.log(variableInfo);
        this.setCarStaticInfo(staticInfo, this.json.cars[carkey-1]);
        this.setCarVariableInfo(variableInfo, this.json.cars[carkey-1]);
        this.setCarComfort(comfortBtns, this.json.cars[carkey-1]);
        this.setCarSecurity(securityBtns, this.json.cars[carkey-1]);
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
        this.defoultPrice = this.curentPrice = parseInt(car.pretdefolt);
        staticinfo['pretdefoult'].src = car.img;
        this.setTotalCarPrice();
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
        this.setDataButtons(securityBtns, car)
    }
    setCarSecurity(comfortBtns,car){
        this.setDataButtons(comfortBtns, car)
    }
    setDataButtons(btns, car){
        for(let i = 0; i < car.comfort.length; i++){
            btns[i].value = car.comfort[i].price;
            switch (car.comfort[i].proprety){
                case "0":
                    btns[i].removeAttribute('disabled', true);
                    btns[i].removeAttribute('checked', true);
                    //securityBtns[i].classList.add("disabled"); 
                    btns[i].classList.remove("disabled"); 
                break;
                case "1":
                    btns[i].setAttribute('disabled', true);
                    btns[i].setAttribute('checked', true);
                    btns[i].classList.add("disabled"); 
                break;
                case "2":
                    btns[i].setAttribute('disabled', true);
                    btns[i].removeAttribute('checked', true);
                    btns[i].classList.add("disabled"); 
                break;
            }
        }
    }
    creatSelectInfo(obj, arraysets){
        //console.log(arraysets.length);
        obj.innerHTML = "";
        for(let i = 0; i < arraysets.length; i++){
            let option = document.createElement('option');
            let textprice = (arraysets[i].price != 0)? " $" +arraysets[i].price : ""; 
            option.innerHTML = arraysets[i].text +  textprice;
            option.value = arraysets[i].price;
            obj.appendChild(option);
        }
    }
    calculateTotalPrice(variablDom, comfortDom, securityDom){
        let price = this.defoultPrice;
        
        price += parseInt(variablDom['color'].value);
        price += parseInt(variablDom['colorin'].value);
        price += parseInt(variablDom['discuri'].value);
        price += parseInt(variablDom['audio'].value);
        price += parseInt(variablDom['aer'].value);
        price += parseInt(variablDom['parbrize'].value);
        comfortDom.forEach(element => {
            if(!element.classList.contains("disabled"))
                if(element.checked)
                    price += parseInt(element.value);
        });
        securityDom.forEach(element => {
            if(!element.classList.contains("disabled"))
                if(element.checked)
                    price += parseInt(element.value);
        });
        this.curentPrice = price;
        this.setTotalCarPrice()
    }
    setTotalCarPrice(){
        document.querySelector(".finalprice").innerHTML = this.curentPrice;
    }
    

}