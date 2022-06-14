function one() {
  document.getElementById("screen").value += '1';
}
function two() {
  document.getElementById("screen").value += '2';
}
function three() {
  document.getElementById("screen").value += '3';
}
function four() {
  document.getElementById("screen").value += '4';
}
function five() {
  document.getElementById("screen").value += '5';
}
function six() {
  document.getElementById("screen").value += '6';
}
function seven() {
  document.getElementById("screen").value += '7';
}
function eight() {
  document.getElementById("screen").value += '8';
}
function nine() {
  document.getElementById("screen").value += '9';
}
function zero() {
  document.getElementById("screen").value += '0';
}
function mod() {
    document.getElementById("screen").value += '%';
}
function div() {
    document.getElementById("screen").value += '/';
}
function add() {
    document.getElementById("screen").value += '+';
}
function sub() {
    document.getElementById("screen").value += '-';
}
function mul() {
    document.getElementById("screen").value += '*';
}
function lparn() {
    document.getElementById("screen").value += ')';
}
function rparn() {
    document.getElementById("screen").value += '(';
}
function del() {
    let exp = document.getElementById("screen").value;
    document.getElementById("screen").value = exp.slice(0,exp.length-1)  
}
function clr() {
    document.getElementById("screen").value = '';
}
function result(){
  let exp = document.getElementById("screen").value 
  document.getElementById('screen').value = eval(exp)
  

}

