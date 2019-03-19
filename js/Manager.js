class Manager{
    constructor(carObject){
        this.comandButtons = [];
        this.panels = [];
        this.searchMeniu = [];
        this.comfortButtons = [];
        this.securityButtons = [];
        this.carSetsButtons = [];
        this.staticCarInfo = [];
        this.me = this;
        this.carObject = carObject;
    }

    setOllDomConections(me){
        me.set_comandButtons(me);
        me.set_panels(me);
        me.set_searchMeniu(me);
        me.set_comfortButtons(me);
        me.set_securityButtons(me);
        me.set_staticCarInfo(me);
        me.set_carSetsButtons(me);
    }
    setOllDomListeners(me, json, carObject){
        me.set_comandButtonListener(me, carObject);
        me.set_closeComandButtonListener(me);
        me.set_brandListener(me, json.models, me.searchMeniu['brand'], me.searchMeniu['model'])
        me.set_cautaButtonListener(me, json);
    }
    setSelectBrand(me,jsonarr){
        me.set_domSelectBrandsorModels(me.searchMeniu['brand'],jsonarr);
    }
    setSelectModel(me,jsonarr){
        me.set_domSelectBrandsorModels(me.searchMeniu['model'],jsonarr[me.searchMeniu['brand'].value]);
    }
    // setCarPanelInfo(me,car){
    //     me.setCarStaticInfo(me,car);
    //     me.setCarVariableInfo(me,car);
    //     me.setCarComfort(me,car);
    //     me.setCarSecurity(me,car);
    // }

    set_comandButtons(me){
        me.comandButtons['comand'] = document.querySelector('.comand');
        me.comandButtons['btnclose'] = document.querySelector('.btnclose');
        me.comandButtons['absolute'] = document.querySelector('.absolute');
        me.comandButtons['coshopen'] = document.querySelector('.coshopen');
        me.comandButtons['coshclose'] = document.querySelector('.coshclose');
        me.comandButtons['coshnum'] = document.querySelector('.coshnum');
    }
    set_panels(me){
        me.panels["news"] = document.querySelector('#news');
        me.panels["panel"] = document.querySelector('.absolute');
        // me.panels["coshpanel"] = document.querySelector('.coshpanel');
    }
    set_searchMeniu(me){
        me.searchMeniu['brand'] = document.querySelector('#brand');
        me.searchMeniu['model']  = document.querySelector('#model');
        me.searchMeniu['typeMotor']  = 'input[name="gridRadiosMotor"]:checked';
        me.searchMeniu['gearBox']  = 'input[name="gridRadiosGearbox"]:checked';
        me.searchMeniu['wheelDrive']  = 'input[name="gridRadiosPrivod"]:checked';
        me.searchMeniu['cauta']  = document.querySelector('#cauta');
    }
    set_comfortButtons(me){
        for(let i = 0; i < 8; i++)
            me.comfortButtons[i] = document.querySelector('#comfort'+(i+1));
    }
    set_securityButtons(me){
        for(let i = 0; i < 8; i++)
            me.securityButtons[i] = document.querySelector('#secure'+(i+1));
    }
    set_carSetsButtons(me){
        me.carSetsButtons['color'] = document.querySelector('#color');
        me.carSetsButtons['colorin'] = document.querySelector('#colorin');
        me.carSetsButtons['discuri'] = document.querySelector('#discuri');
        me.carSetsButtons['audio'] = document.querySelector('#audio');
        me.carSetsButtons['aer'] = document.querySelector('#aer');
        me.carSetsButtons['parbrize'] = document.querySelector('#parbrize');
    }
    set_staticCarInfo(me){       
        me.staticCarInfo['brand'] = document.querySelector('.brand');
        me.staticCarInfo['model'] = document.querySelector('.model');
        me.staticCarInfo['age'] = document.querySelector('.age');
        me.staticCarInfo['motorcapacity'] = document.querySelector('.motorcapacity');
        me.staticCarInfo['motorputere'] = document.querySelector('.motorputere');
        me.staticCarInfo['motortoplivo'] = document.querySelector('.motortoplivo');
        me.staticCarInfo['motorcutie'] = document.querySelector('.motorcutie');
        me.staticCarInfo['tractiunea'] = document.querySelector('.tractiunea');
        me.staticCarInfo['carcorp'] = document.querySelector('.carcorp');
        me.staticCarInfo['pretdefoult'] = document.querySelector('.pretdefoult');
        me.staticCarInfo['carimg'] = document.querySelector('.carimg');
    }
    
    set_comandButtonListener(me,carObject){
        document.body.addEventListener("click", function(e){
            if(e.target.classList.contains('comand')){
                //console.log(me.carSetsButtons);
                carObject.setCarPanelInfo(me.staticCarInfo, me.carSetsButtons,  me.comfortButtons, me.securityButtons, e.target.id);//
                me.panels['panel'].style.display = 'block';	
            }

                	
        });
    }
    
    set_closeComandButtonListener(me){
        me.comandButtons['btnclose'].addEventListener("click", function(){
            me.panels['panel'].style.display = 'none';
        });
    }
    set_brandListener(me,jsonM,selectB,selectM){
        selectB.onchange = function(){
            me.set_domSelectBrandsorModels(selectM,jsonM[selectB.value])
        }
    }
    set_domSelectBrandsorModels(select,jsonArray){
        select.innerHTML = "";
        //console.log(jsonArray);
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
        //console.log(tag + " : " + id);
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
        me.panels['news'].innerHTML = '';
        for(let i = 0; i< cars.length; i++){
            if(cars[i].brand == brandValue &&
                cars[i].model == modelValue &&
                (cars[i].tipmotor == radioMotor || radioMotor == null) &&
                (cars[i].tipcutie == radioCutie || radioCutie == null) &&
                (cars[i].tiptract == radioTractiune || radioTractiune == null))
                me.creatNewsBlock(me,cars[i],i);
        }
    }
    set_cautaButtonListener(me,json){
        me.searchMeniu['cauta'].onclick = function(){
            actionClickSearchMeniu(me,json)
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
        me.DrowListNews(me, json.cars, brandvalue, modelvalue, radioMotor, radioCutie, radioTractiune);
   }
}