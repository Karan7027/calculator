//getNumber
function Number(num){
var result=document.getElementById('input');
result.value+=num;
}

//result
function result(){
     var result=document.getElementById('input');
    result.value=eval(result.value);
}


//clear result
function clearResult(){
    var result=document.getElementById('input');
    result.value="";
}

