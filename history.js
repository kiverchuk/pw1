window.onload = function(){
    if(
        localStorage.getItem('history') !== null
        && localStorage.getItem('history') !== undefined
    ){
        history = JSON.parse(localStorage.getItem('history'));
        drowTable(history);
    }
}
function drowTable(obj){

}
function createElement(tag,texthtml,clas,src,id){
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
