class Manager{
    constructor(carObject, coshObject){
        this.comandButtons = [];
        this.panels = [];
        this.searchMeniu = [];
        this.comfortButtons = [];
        this.securityButtons = [];
        this.carSetsButtons = [];
        this.staticCarInfo = [];
        this.personInput = [];
        this.me = this;
        this.carObject = carObject;
        this.coshObject = coshObject;
    }

    setAllDomConections(me){
        this.setComandButtons(me);
        this.setPanels(me);
        this.setSearchMeniu(me);
        this.setComfortButtons(me);
        this.setSecurityButtons(me);
        this.setStaticCarInfo(me);
        this.setCarSetsButtons(me);
        this.setPersonInput(me);
        this.coshObject.personInput = this.personInput;
    }
    setAllDomListeners(me, json, carObject){
        this.setComandButtonListener(me, carObject);
        this.setCloseComandButtonListener(me);
        this.setBrandListener(me, json.models, me.searchMeniu['brand'], me.searchMeniu['model'])
        this.setCautaButtonListener(me, json);
        this.setVariableCarInfoListeners(carObject,me);
        this.setAdaugInCosgListener(this);
        this.setCoshOpenlistener(me);
        this.setCoshCloselistener(me);
        this.setBuyCarList(me);
        this.setDeletFromOrderList(me);
        this.setCuponInputListener(me);
        //this.DeletPersonData(me);
        this.setCumparaButon(me);
    }
    setSelectBrand(me,jsonarr){
        this.setDomSelectBrandsorModels(me.searchMeniu['brand'],jsonarr);
    }
    setSelectModel(me,jsonarr){
        this.setDomSelectBrandsorModels(me.searchMeniu['model'],jsonarr[me.searchMeniu['brand'].value]);
    }


    setComandButtons(me){
        this.comandButtons['comand'] = document.querySelector('.comand');
        this.comandButtons['btnclose'] = document.querySelector('.btnclose');
        this.comandButtons['absolute'] = document.querySelector('.absolute');
        this.comandButtons['coshopen'] = document.querySelector('.coshopen');
        this.comandButtons['coshclose'] = document.querySelector('.coshclose');
        this.comandButtons['coshnum'] = document.querySelector('.coshnum');
        this.comandButtons['incosh'] = document.querySelector('.incosh');
        //this.comandButtons['saveperson'] = document.querySelector('.saveperson');
        //this.comandButtons['deletperson'] = document.querySelector('.deletperson');
        this.comandButtons['cumpara'] = document.querySelector('.cumpara');
        this.comandButtons['cuponinput'] = document.querySelector('#cuponInput');
    }
    setPanels(me){
        this.panels["news"] = document.querySelector('#news');
        this.panels["panel"] = document.querySelector('.absolute');
        this.panels["coshpanel"] = document.querySelector('#cosh');
    }
    setSearchMeniu(me){
        this.searchMeniu['brand'] = document.querySelector('#brand');
        this.searchMeniu['model']  = document.querySelector('#model');
        this.searchMeniu['typeMotor']  = 'input[name="gridRadiosMotor"]:checked';
        this.searchMeniu['gearBox']  = 'input[name="gridRadiosGearbox"]:checked';
        this.searchMeniu['wheelDrive']  = 'input[name="gridRadiosPrivod"]:checked';
        this.searchMeniu['cauta']  = document.querySelector('#cauta');
    }
    setComfortButtons(me){
        for(let i = 0; i < 8; i++)
            this.comfortButtons[i] = document.querySelector('#comfort'+(i+1));
    } 
    setSecurityButtons(me){
        for(let i = 0; i < 8; i++)
            this.securityButtons[i] = document.querySelector('#secure'+(i+1));
    }
    setCarSetsButtons(me){
        this.carSetsButtons['color'] = document.querySelector('#color');
        this.carSetsButtons['colorin'] = document.querySelector('#colorin');
        this.carSetsButtons['discuri'] = document.querySelector('#discuri');
        this.carSetsButtons['audio'] = document.querySelector('#audio');
        this.carSetsButtons['aer'] = document.querySelector('#aer');
        this.carSetsButtons['parbrize'] = document.querySelector('#parbrize');
    }
    setStaticCarInfo(me){       
        this.staticCarInfo['brand'] = document.querySelector('.brand');
        this.staticCarInfo['model'] = document.querySelector('.model');
        this.staticCarInfo['age'] = document.querySelector('.age');
        this.staticCarInfo['motorcapacity'] = document.querySelector('.motorcapacity');
        this.staticCarInfo['motorputere'] = document.querySelector('.motorputere');
        this.staticCarInfo['motortoplivo'] = document.querySelector('.motortoplivo');
        this.staticCarInfo['motorcutie'] = document.querySelector('.motorcutie');
        this.staticCarInfo['tractiunea'] = document.querySelector('.tractiunea');
        this.staticCarInfo['carcorp'] = document.querySelector('.carcorp');
        this.staticCarInfo['pretdefoult'] = document.querySelector('.pretdefoult');
        this.staticCarInfo['carimg'] = document.querySelector('.carimg');
    }
    setPersonInput(me){       
        this.personInput['nume'] = document.querySelector('.nume');
        this.personInput['prenume'] = document.querySelector('.prenume');
        this.personInput['telefon'] = document.querySelector('.telefon');       
    }
    
    setComandButtonListener(me,carObject){
        document.body.addEventListener("click", function(e){
            if(e.target.classList.contains('comand')){
                carObject.setCarPanelInfo(me.staticCarInfo, me.carSetsButtons,  me.comfortButtons, me.securityButtons, e.target.id);//
                me.panels['panel'].style.display = 'block';	
            }     	
        });
    }
    
    setCloseComandButtonListener(me){
        this.comandButtons['btnclose'].addEventListener("click", function(){
            me.panels['panel'].style.display = 'none';
        });
    }
    setBrandListener(me,jsonM,selectB,selectM){
        selectB.onchange = function(){
            me.setDomSelectBrandsorModels(selectM,jsonM[selectB.value])
        }
    }
    setCoshOpenlistener(me){
        this.comandButtons['coshopen'].onclick = function(){
            me.coshObject.drowData();
            me.comandButtons['cuponinput'].value = '';
            me.panels['coshpanel'].style.display = 'block';
        }
    }
    setCoshCloselistener(me){
        this.comandButtons['coshclose'].onclick = function(){
            me.panels['coshpanel'].style.display = 'none';
            document.querySelector('#form').style.display = "none";
        }
    }
    setBuyCarList(me){
        document.querySelector('#form').onsubmit = function(event){
            event.preventDefault();
			me.coshObject.CumparaLista();
			//return event.target.checkValidity()
		}
    }
    setCumparaButon(me){
        this.comandButtons['cumpara'].onclick = function(){
            //me.comandButtons['saveperson'].click();
            //console.log('cumpara cklick');
            document.querySelector('#form').style.display = "block";

        }
    }
    // DeletPersonData(me){
    //     this.comandButtons['deletperson'].onclick = function(){
    //         console.log("event deleet");
    //         me.coshObject.deletPersonData();
    //     }
    // }
    setDeletFromOrderList(me){
        document.querySelector('.orderlist').addEventListener("click", function(event){
            if(event.target.classList.contains('float')){
                me.coshObject.deletOrder(event.target.id);
            }
                
        });
    }
    setCuponInputListener(me){
        this.comandButtons['cuponinput'].onkeyup = function(){
            me.coshObject.verifyCupon();
        }
    }
    setDomSelectBrandsorModels(select,jsonArray){
        select.innerHTML = "";
        for(let i = 0; i < jsonArray.length; i++){
            let option = document.createElement('option');
            option.innerHTML = jsonArray[i];
            option.value = jsonArray[i];
            select.appendChild(option);
        }
    }
    
    createElement(tag,texthtml,clas,src,id){
        let domElement = document.createElement(tag);
        if(texthtml != '')
            domElement.innerHTML = texthtml;
        if(clas != '')
            if(Array.isArray(clas))
                for(let i = 0; i < clas.length; i++)
                    domElement.classList.add(clas[i]);
            else
                domElement.classList.add(clas);         
        if(src != '')
            domElement.src = src;   
        if(id != '')
            domElement.id = id;
        return domElement;
    }

    creatNewsBlock(me,carinfo,carkey){
        let domElement = me.createElement("div",'','new','','')
        domElement.appendChild(me.createElement("img",'',"carsimg", carinfo.img,''));
        let text = carinfo.brand + ' ' + carinfo.model;
        domElement.appendChild(me.createElement("h2",text,'','',''));
        text = "Age: " + carinfo.anproductie;
        domElement.appendChild(me.createElement("p",text,'','',''));
        text = "Motor Capacity: " + carinfo.capacitateamotor;
        domElement.appendChild(me.createElement("p",text,'','',''));
        text = "Price: $" + carinfo.pretdefolt;
        domElement.appendChild(me.createElement("p",text,'','',''));
        domElement.appendChild(me.createElement("button",'Comand',["btn","btn-primary","comand"],'',carkey+1));
        me.panels['news'].appendChild(domElement);
    }

    DrowListNews(me,cars,brandValue,modelValue,radioMotor,radioCutie,radioTractiune){
        this.panels['news'].innerHTML = '';
        for(let i = 0; i< cars.length; i++){
            if(cars[i].brand == brandValue &&
                cars[i].model == modelValue &&
                (cars[i].tipmotor == radioMotor || radioMotor == null) &&
                (cars[i].tipcutie == radioCutie || radioCutie == null) &&
                (cars[i].tiptract == radioTractiune || radioTractiune == null))
                me.creatNewsBlock(me,cars[i],i);
        }
    }
    setCautaButtonListener(me,json){
        this.searchMeniu['cauta'].onclick = function(){
            me.actionClickSearchMeniu(me,json)
        }
    }
    setAdaugInCosgListener(me){
        this.comandButtons['incosh'].onclick = function(){
           me.coshObject.addOrder(me.order());
        }
    }
   actionClickSearchMeniu(me,json){
        let brandvalue = me.searchMeniu['brand'].value;
        let modelvalue = me.searchMeniu['model'].value;
        let radioMotor = null; 
        let radioCutie = null;
        let radioTractiune = null;
        if(document.querySelector(me.searchMeniu['typeMotor']))
            radioMotor = document.querySelector(me.searchMeniu['typeMotor'].value);
        if(document.querySelector(me.searchMeniu['gearBox']))
            radioCutie = document.querySelector(me.searchMeniu['gearBox'].value);
        if(document.querySelector(me.searchMeniu['wheelDrive']))
            radioTractiune = document.querySelector(me.searchMeniu['wheelDrive'].value);
        this.DrowListNews(me, json.cars, brandvalue, modelvalue, radioMotor, radioCutie, radioTractiune);
   }
   sendDomElementsToCarobject(carObject){
        carObject.calculateTotalPrice( this.carSetsButtons, this.comfortButtons,  this.securityButtons)
   }
   setVariableCarInfoListeners(carObject, me){
        this.carSetsButtons['color'].onchange = function(){
            me.sendDomElementsToCarobject(carObject);
        }
        this.carSetsButtons['colorin'].onchange = function(){
            me.sendDomElementsToCarobject(carObject);
        }
        this.carSetsButtons['discuri'].onchange = function(){
            me.sendDomElementsToCarobject(carObject);
        }
        this.carSetsButtons['audio'].onchange = function(){
            me.sendDomElementsToCarobject(carObject);
        }
        this.carSetsButtons['aer'].onchange = function(){
            me.sendDomElementsToCarobject(carObject);
        }
        this.carSetsButtons['parbrize'].onchange = function(){
            me.sendDomElementsToCarobject(carObject);
        }
        this.comfortButtons.forEach(element => {
            element.onchange = function(){
                me.sendDomElementsToCarobject(carObject);
            }
        });
        this.securityButtons.forEach(element => {
            element.onchange = function(){
                me.sendDomElementsToCarobject(carObject);
            }
        });
   }
   order(){
       let order = {};
       order.brand = this.staticCarInfo['brand'].innerHTML;
       order.model = this.staticCarInfo['model'].innerHTML;
       order.price = document.querySelector(".finalprice").innerHTML;
       return order;
   }
   
}