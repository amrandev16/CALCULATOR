

function numShow(number){
    result.value +=number;
}

let result =document.getElementById('result');

function clrAll(){
    result.value='';
}

function Del(){
    result.value= result.value.slice(0, -1);
}

function calculator() {
    let x =result.value;
    let y = eval(x);
    result.value = y;
}

// tumi cayle emneo likhete paro aita 
// function  calculator(){
//     result.value = eval(result.value);

// }