class Cosh{
    constructor(){
        this.personInput = null;
        this.orderList = document.querySelector('.orderlist');
        this.totalpricedom = document.querySelector('.totalprice');
        this.totalpricecupondom = document.querySelector('.totalpricecupon');
        this.coshNum = null;
        this.cuponJson = null;
        this.cuponInput = null;
        this.pricetotal = 0;
        this.pricetotalcupon = 0;
        this.discountPorcent = 0;
    }
    drowData(){
        this.drowOrders();
        //this.dorwPersonDate();
    }
    // dorwPersonDate(){
    //     let person = null;
    //     if(
    //         localStorage.getItem('person') !== null
    //         && localStorage.getItem('person') !== undefined
    //     ){
    //         person = JSON.parse(localStorage.getItem('person'));
    //         this.personInput["nume"].value = person.nume;
    //         this.personInput["prenume"].value = person.prenume;
    //         this.personInput["telefon"].value = person.telefon;
    //     }
        
    // }
    // deletPersonData(){
    //     this.personInput["nume"].value = "";
    //     this.personInput["prenume"].value = "";
    //     this.personInput["telefon"].value = "";
    //     localStorage.removeItem('person');
    // }
    // savePersonData(){
    //     let person = {};
    //     //console.log(this.personInput)
    //     person.nume = this.personInput["nume"].value;
    //     person.prenume = this.personInput["prenume"].value;
    //     person.telefon = this.personInput["telefon"].value;
    //     localStorage.setItem('person', JSON.stringify(person));
    // }
    drowOrders(){
        let orders = [];
        if(
            localStorage.getItem('orders') !== null
            && localStorage.getItem('orders') !== undefined
        ){
            let totalprice = 0;
            orders = JSON.parse(localStorage.getItem('orders'));
            this.orderList.innerHTML = '';
            for(let i = 0; i < orders.length; i++){
                totalprice += parseInt(orders[i].price);
                let orderblock = this.creatElm("h6",'hclas','','');
                orderblock.appendChild(this.creatElm('span', 'margin', '', orders[i].brand))
                orderblock.appendChild(this.creatElm('span', 'margin', '', orders[i].model))
                orderblock.appendChild(this.creatElm('span', 'float', i, 'X'))
                orderblock.appendChild(this.creatElm('span', 'floatmargin', '', '$' + orders[i].price))
                this.orderList.appendChild(orderblock);
            }
            this.setAllPrice(totalprice);
        }
    }
    setAllPrice(totalprice){
        this.pricetotal = totalprice
        this.totalpricedom.innerHTML = totalprice;
        this.calculatePlataCupon(0);
    }
    
    
    numOrders(){
        let orders = JSON.parse(localStorage.getItem('orders'));
        this.coshNum.innerHTML = (orders == null)? 0 : orders.length;
        console.log("get from local");
        //this.addOrder({"brand":"Audi","model":"A5","price": 23000})
    }
    addOrder(order){
        let orders = [];
        if(
            localStorage.getItem('orders') !== null
            && localStorage.getItem('orders') !== undefined
        ){
            orders = JSON.parse(localStorage.getItem('orders'));
        }
        if(order != null)
            orders.push(order); 
        localStorage.setItem('orders', JSON.stringify(orders));
        this.numOrders();
    }
    deletOrder(key){
        let orders = [];
        if(
            localStorage.getItem('orders') !== null
            && localStorage.getItem('orders') !== undefined
        ){
            orders = JSON.parse(localStorage.getItem('orders'));
        }       
        orders.splice(key, 1);       
        localStorage.setItem('orders', JSON.stringify(orders));
        this.drowData();
        this.numOrders();
        this.verifyCupon();
    }
    creatElm(tag, clas, id, text){
        let obj = document.createElement(tag);
        if(clas != '')
            obj.classList.add(clas);
        if(id != '')
        obj.id = id;
        obj.innerHTML = text;
        return obj;
    }
    calculatePlataCupon(discount){
        console.log("discount: "+ discount);
        this.discountPorcent = discount;
        this.pricetotalcupon = parseInt(this.pricetotal * (1 - discount / parseFloat(100)));
        this.totalpricecupondom.innerHTML = this.pricetotalcupon;
    }
    verifyCupon(){
       for(var cupon of  this.cuponJson) {
            if( this.cuponInput.value == cupon.name){
                console.log(cupon.discount);
                this.calculatePlataCupon(cupon.discount);
                return;
            }
        };
        this.calculatePlataCupon(0);
    }
    CumparaLista(){
        if(
            localStorage.getItem('orders') !== null
            && localStorage.getItem('orders') !== undefined
        ){
            console.log("buy click");
            let orders = [];
            orders = JSON.parse(localStorage.getItem('orders'));
            let element = {};
            element.date = Date.now();
            element.carlist = orders;
            element.pricelist = this.pricetotal;
            element.pricecupon = this.pricetotalcupon;
            element.discountprocent = this.discountPorcent;
            let person = {};
            person.nume = this.personInput["nume"].value;
            person.prenume = this.personInput["prenume"].value;
            person.telefon = this.personInput["telefon"].value;
            element.person = person;
            console.log(element);
            this.addHistory(element)
            
        }
    }
    addHistory(element){
        let history = [];
        if(
            localStorage.getItem('history') !== null
            && localStorage.getItem('history') !== undefined
        ){
            history = JSON.parse(localStorage.getItem('history'));
        }
        history.push(element); 
        localStorage.setItem('history', JSON.stringify(history));
        localStorage.removeItem('orders');
        location.reload();
    }
}
