class Cosh{
    constructor(){
        this.personInput = null;
        this.orderList = document.querySelector('.orderlist');
        this.totalpricedom = document.querySelector('.totalprice')
    }
    drowData(){
        this.drowOrders();
        this.dorwPersonDate();
    }
    dorwPersonDate(){
        let person = null;
        if(
            localStorage.getItem('person') !== null
            && localStorage.getItem('person') !== undefined
        ){
            person = JSON.parse(localStorage.getItem('person'));
            this.personInput["nume"].value = person.nume;
            this.personInput["prenume"].value = person.prenume;
            this.personInput["telefon"].value = person.telefon;
        }
        
    }
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
        this.totalpricedom.innerHTML = totalprice;
    }
    savePersonData(){
        let person = {};
        console.log(this.personInput)
        person.nume = this.personInput["nume"].value;
        person.prenume = this.personInput["prenume"].value;
        person.telefon = this.personInput["telefon"].value;
        localStorage.setItem('person', JSON.stringify(person));
    }
    numOrders(obj){
        let orders = JSON.parse(localStorage.getItem('orders'));
        obj.innerHTML = (orders == null)? 0 : orders.length;
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
        this.drowOrders();
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
}
