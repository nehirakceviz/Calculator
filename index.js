
let display =
document.getElementById('display');
let girilen ='';

function press(val){
    girilen= girilen +val;
    display.textContent = girilen;
}
function cal(){
    girilen = String(eval(girilen.replace(/%/g,'/100')));
    display.textContent = girilen;
}
function backspace(){
    girilen = girilen.slice(0,-1);
    display.textContent = girilen || '0' ;
}

function ac(){
girilen = '';
display.textContent = '0' ;
}
function golden(){
    if (girilen ==='') return;
    girilen = String(eval(girilen)* 1.6180339887);
    display.textContent = girilen;
}
function percentage(){
 if(girilen==='')return;
    girilen+= '%';
    display.textContent = girilen || '0';
}