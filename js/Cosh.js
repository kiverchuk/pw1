class Cosh{
    constructor(){
        
    }
    drowData(){
        //this.drowOrders();
        this.dorwPersonDate();
    }
    dorwPersonDate(personInput){
        let person = null;
        if(
            localStorage.getItem('person') !== null
            && localStorage.getItem('person') !== undefined
        ){
            person = JSON.parse(localStorage.getItem('person'));
            personInput["nume"].value = person.nume;
            personInput["prenime"].value = person.prenume;
            personInput["telefon"].value = person.telefon;
        }
        
    }
    
    numOrders(obj){
        let orders = JSON.parse(localStorage.getItem('orders'));
        obj.innerHTML = (orders == null)? 0 : orders.length;
        console.log("get from local");
        //this.addOrder({"brand":"Audi","model":"A5","price": 23000})
    }
    // addId(){
    //     let ids = [];
    //     if(
    //         localStorage.getItem('ids') !== null
    //         && localStorage.getItem('ids') !== undefined
    //     ){
    //         ids = JSON.parse(localStorage.getItem('ids'));
    //     }
    //     if( ids.length == 0)
    //         ids = [1];
    //     else
    //         ids.push(1+ids[ids.length-1]);
    //     localStorage.setItem('ids', JSON.stringify(ids));
    // }
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
    }
}
