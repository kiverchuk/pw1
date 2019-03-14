class Manager{
    constructor(){
        this.comandButtons = [];
        this.panels = [];
        this.searchMeniu = [];
        this.comfortButtons = [];
        this.securityButtons = [];
        this.carSetsButtons = [];
        this.staticCarInfo = [];
        this.me = this;
    }

    SetOllDomConections(me){
        me.Set_comandButtons(me);
        me.Set_panels(me);
        me.Set_searchMeniu(me);
        me.Set_comfortButtons(me);
        me.Set_securityButtons(me);
        me.Set_staticCarInfo(me);
    }
    SetOllDomListeners(me,json){
        me.Set_comandButtonListener(me);
        me.Set_closeComandButtonListener(me);
        me.Set_brandListener(me,json.models,me.searchMeniu['brand'],me.searchMeniu['model'])
        me.Set_cautaButtonListener(me,json);
    }
    SetSelectBrand(me,jsonarr){
        me.Set_domSelectBrandsorModels(me.searchMeniu['brand'],jsonarr);
    }
    SetSelectModel(me,jsonarr){
        me.Set_domSelectBrandsorModels(me.searchMeniu['model'],jsonarr[me.searchMeniu['brand'].value]);
    }

    Set_comandButtons(me){
        me.comandButtons['comand'] = document.querySelector('.comand');
        me.comandButtons['btnclose'] = document.querySelector('.btnclose');
        me.comandButtons['absolute'] = document.querySelector('.absolute');
        me.comandButtons['coshopen'] = document.querySelector('.coshopen');
        me.comandButtons['coshclose'] = document.querySelector('.coshclose');
        me.comandButtons['coshnum'] = document.querySelector('.coshnum');
    }
    Set_panels(me){
        me.panels["news"] = document.querySelector('#news');
        me.panels["panel"] = document.querySelector('.absolute');
        // me.panels["coshpanel"] = document.querySelector('.coshpanel');
    }
    Set_searchMeniu(me){
        me.searchMeniu['brand'] = document.querySelector('#brand');
        me.searchMeniu['model']  = document.querySelector('#model');
        me.searchMeniu['typeMotor']  = 'input[name="gridRadiosMotor"]:checked';
        me.searchMeniu['gearBox']  = 'input[name="gridRadiosGearbox"]:checked';
        me.searchMeniu['wheelDrive']  = 'input[name="gridRadiosPrivod"]:checked';
        me.searchMeniu['cauta']  = document.querySelector('#cauta');
    }
    Set_comfortButtons(me){
        for(let i = 0; i < 8; i++)
            me.comfortButtons[i] = document.querySelector('#comfort'+(i+1));
    }
    Set_securityButtons(me){
        for(let i = 0; i < 8; i++)
            me.securityButtons[i] = document.querySelector('#secure'+(i+1));
    }
    Set_carSetsButtons(me){
        me.carSetsButtons['color'] = document.querySelector('#color');
        me.carSetsButtons['colorin'] = document.querySelector('#colorin');
        me.carSetsButtons['discuri'] = document.querySelector('#discuri');
        me.carSetsButtons['audio'] = document.querySelector('#audio');
        me.carSetsButtons['aer'] = document.querySelector('#aer');
        me.carSetsButtons['parbrize'] = document.querySelector('#parbrize');
        me.carSetsButtons['img'] = document.querySelector('#img');
    }
    Set_staticCarInfo(me){       
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
    }
    
    Set_comandButtonListener(me){
        document.body.addEventListener("click", function(e){
            if(e.target.classList.contains('comand'))
                me.panels['panel'].style.display = 'block';		
        });
    }
    Set_closeComandButtonListener(me){
        me.comandButtons['btnclose'].addEventListener("click", function(){
            me.panels['panel'].style.display = 'none';
        });
    }
    Set_brandListener(me,jsonM,selectB,selectM){
        selectB.onchange = function(){
            me.Set_domSelectBrandsorModels(selectM,jsonM[selectB.value])
        }
    }

    Set_domSelectBrandsorModels(select,jsonArray){
        select.innerHTML = "";
        //console.log(jsonArray);
        for(let i = 0; i < jsonArray.length; i++){
            let option = document.createElement('option');
            option.innerHTML = jsonArray[i];
            option.value = jsonArray[i];
            select.appendChild(option);
        }
    }
    
    createelement(tag,texthtml,clas,src,id){
        let domElement = document.createElement(tag);
        if(texthtml != '')
            domElement.innerHTML = texthtml;
        if(clas != '')
            if(Array.isArray(clas))
                for(let i = 0; i < clas.length; i++)
                    domElement.classList.add(clas[i]);
            else
                domElement.classList.add(clas);         
        if(src != ''){
            console.log(src)
            domElement.src = src;
        }
           
        if(id != '')
            domElement.id = id;
        return domElement;
    }

    creatNewsBlock(me,carinfo,carkey){
        let domElement = me.createelement("div",'','new','','')
        domElement.appendChild(me.createelement("img",'',"carsimg", carinfo.img,''));
        let text = carinfo.brand + ' ' + carinfo.model;
        domElement.appendChild(me.createelement("h2",text,'','',''));
        text = "Age: " + carinfo.anproductie;
        domElement.appendChild(me.createelement("p",text,'','',''));
        text = "Motor Capacity: " + carinfo.capacitateamotor;
        domElement.appendChild(me.createelement("p",text,'','',''));
        text = "Price: " + carinfo.pretdefoult;
        domElement.appendChild(me.createelement("p",text,'','',''));
        domElement.appendChild(me.createelement("button",'Comand',["btn","btn-primary","comand"],'',carkey));
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
    Set_cautaButtonListener(me,json){
        me.searchMeniu['cauta'].onclick = function(){
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
}