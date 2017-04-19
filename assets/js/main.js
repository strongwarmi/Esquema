window.addEventListener("load", function(){
  var body= document.getElementById("contenedor");
  var rosa=document.createElement('div');
  rosa.className="rosa center";
  var morado= document.createElement('div');
  morado.className="morado";
  var amarillo= document.createElement('div');
  amarillo.className="amarillo";
  morado.appendChild(amarillo);
  rosa.appendChild(morado);
  body.appendChild(rosa);
  var azul=document.createElement('div');
  azul.className="azul center"
  var negro=document.createElement('div');
  negro.className="negro";
  var verde=document.createElement('div');
  verde.className="verde";
  azul.appendChild(negro);
  azul.appendChild(verde);
  body.appendChild(azul);
});
