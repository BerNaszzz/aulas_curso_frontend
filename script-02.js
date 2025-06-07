function soma(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
<<<<<<< HEAD
  document.getElementById('demo').innerHTML = parseInt(a) + parseInt(b);
}
function subtração(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = a - b;
}
function multiplicação(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = a * b;
}
function divisão(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  if (b == 0) {
    document.getElementById('demo').innerHTML = "Divisão por zero não é permitida.";
  } else {
    document.getElementById('demo').innerHTML = a / b;
  }
}
function potenciação(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = Math.pow(a, b);
=======
  //document.getElementById('demo').innerHTML = a + b;
  document.getElementById('demo').innerHTML = parseInt(a) + parseInt(b);
>>>>>>> 6d150319fc645e0c1fef63ac52ae18eae88fda8e
}