
///PRECARGA DE FUNCIONES /////////////////////////////
window.onload = function(){ //Acciones tras cargar la página
pantalla=document.getElementById("display"); //elemento pantalla de salida
document.onkeydown = teclado; //función teclado disponible
}
////////////////////////////////////////////////////

//VARIABLES GLOBALES/////////////////////////////////

numero1="0"; //número en pantalla
ultimonumero="0";
numeroinicial=1; //iniciar número en pantalla: 1=si; 0=no;
punto=0; //estado coma decimal 0=no, 1=si;
numero2=0; //número oculto o en espera.
opereacion="no"; //operación en curso; "no" =  sin operación.
ultimaoperacion="0";
presoinnumero="0";
/////////////////////////////////////////////////////

//CLASE CALCULADORA/////////////////////////////////

var MyCalculadora = function() {
function igualar (tecla) {
           if (opereacion=="no") { //no hay ninguna operación pendiente.
             if(ultimaoperacion=="0" || tecla=="otra"){ //evaluamos que no exusta ultima operacion y que no se presione la tecla igual
               pantalla.innerHTML="";
             }
             else {//si se presiona la tecla igual hacemos la ultima operacion digitada
               ecuacion= numero1 + ultimaoperacion + ultimonumero;
               solucion=eval(ecuacion); //convertimos la cadena a código y resolvemos
               mypantalla(solucion);//mostramos la solución
               numero1=solucion; //guardamos la solución
               numeroinicial=1;
             }
            }
           else { //con operación pendiente resolvemos

              ecuacion=numero2+opereacion+numero1; // escribimos la operación en una cadena
              solucion=eval(ecuacion); //convertimos la cadena a código y resolvemos
              mypantalla(solucion);//mostramos la solución
              ultimonumero=numero1;//guardamos el ultimo numero operado
              ultimaoperacion=opereacion;//guardamos la ultima operacion
              numero1=solucion; //guardamos la solución
              opereacion="no"; //ya no hay operaciones pendientes
              numeroinicial=1; //se puede reiniciar la pantalla.
              }
}
function mypantalla (num) { // funcion que valida que no nos regresen numeros mayores a 8 digitos
        aux= String(num).indexOf(".");
        if(aux<0){
          decimales=0;
          if(String(num).length>8){num='99999999'}//si el numero es mayor a 8 digitos devolvemos el ultimo numero de 8 digitos
        }
        else{
          enteros=aux;
          decimales= String(num).length - enteros;
          if(enteros>8){
            num='99999999';
          }
          else{
            num= num.toFixed(8-enteros);
          }
      }
      pantalla.innerHTML=num;
}
return{
        numero: function(digito) { //recoge el número pulsado en el argumento.
               if (numero1=="0" || numeroinicial==1  ) {	// inicializar un número,
                  pantalla.innerHTML=digito; //mostrar en pantalla
                  numero1=digito; //guardar número

                 if (digito==".") { //si escribimos una coma al principio del número
                     pantalla.innerHTML="0."; //escribimos 0.
                     numero1=digito; //guardar número
                     punto=1;}
                  }
                 else { //continuar escribiendo un número
                    if(numero1.length<8){
                     if (digito=="." && punto==0) { //si escribimos una coma decimal pòr primera vez
                         pantalla.innerHTML+=digito;
                         numero1+=digito;
                         coma=1; //cambiar el estado de la coma
                     }
                     //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
                     else if (digito=="." && punto==1) {}
                     //Resto de casos: escribir un número del 0 al 9:
                     else {
                         pantalla.innerHTML+=digito;
                         numero1+=digito
                     }
                  }
                  }
                  numeroinicial=0 //el número está iniciado y podemos ampliarlo.
                  pressn="1";
               },
        operar: function(signo) {
               if(pressn=="1"){igualar("otra")} //si hay operaciones pendientes se realizan primero
               numero2=numero1 //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
               opereacion=signo; //guardamos tipo de operación.
               numeroinicial=1; //inicializar pantalla.
               pressn="0";
             },
        raizc: function() {
               numero1=Math.sqrt(numero1) //resolver raíz cuadrada.
               mypantalla(numero1); //mostrar en pantalla resultado
               opereacion="no"; //quitar operaciones pendientes.
               numeroinicial=1; //se puede reiniciar la pantalla
             },
        opuesto: function() {
               numero=Number(numero1); //convertir en número
               numero=-numero; //cambiar de signo
               numero1=String(numero); //volver a convertir a cadena
               pantalla.innerHTML=numero1; //mostrar en pantalla.
      },

        borradoTotal: function() {
               pantalla.innerHTML=0; //poner pantalla a 0
               numero1="0"; //reiniciar número en pantalla
               punto=0; //reiniciar estado coma decimal
               numero2=0 //indicador de número oculto a 0;
               opereacion="no"
               ultimaoperacion="0" //borrar operación en curso.
             },
        igual: function(){
              igualar("igual");
        }
      }
}
///////////////////////////////////////////////////////////////////////////////////////

//LISTENERS //////////////////////////////////////////////////////////////////////////

  teclas = document.querySelectorAll(".tecla");

    teclas[0].onmousedown = function(){buttonclick(teclas[0].getAttribute('id'));entradas(teclas[0].getAttribute('id'));}
    teclas[0].onmouseup = function(){buttonOut(teclas[0].getAttribute('id'));}
    teclas[1].onmousedown = function(){buttonclick(teclas[1].getAttribute('id'));entradas(teclas[1].getAttribute('id'));}
    teclas[1].onmouseup = function(){buttonOut(teclas[1].getAttribute('id'));}
    teclas[2].onmousedown = function(){buttonclick(teclas[2].getAttribute('id'));entradas(teclas[2].getAttribute('id'));}
    teclas[2].onmouseup = function(){buttonOut(teclas[2].getAttribute('id'));}
    teclas[3].onmousedown = function(){buttonclick(teclas[3].getAttribute('id'));entradas(teclas[3].getAttribute('id'));}
    teclas[3].onmouseup = function(){buttonOut(teclas[3].getAttribute('id'));}
    teclas[4].onmousedown = function(){buttonclick(teclas[4].getAttribute('id'));entradas(teclas[4].getAttribute('id'));}
    teclas[4].onmouseup = function(){buttonOut(teclas[4].getAttribute('id'));}
    teclas[5].onmousedown = function(){buttonclick(teclas[5].getAttribute('id'));entradas(teclas[5].getAttribute('id'));}
    teclas[5].onmouseup = function(){buttonOut(teclas[5].getAttribute('id'));}
    teclas[6].onmousedown = function(){buttonclick(teclas[6].getAttribute('id'));entradas(teclas[6].getAttribute('id'));}
    teclas[6].onmouseup = function(){buttonOut(teclas[6].getAttribute('id'));}
    teclas[7].onmousedown = function(){buttonclick(teclas[7].getAttribute('id'));entradas(teclas[7].getAttribute('id'));}
    teclas[7].onmouseup = function(){buttonOut(teclas[7].getAttribute('id'));}
    teclas[8].onmousedown = function(){buttonclick(teclas[8].getAttribute('id'));entradas(teclas[8].getAttribute('id'));}
    teclas[8].onmouseup = function(){buttonOut(teclas[8].getAttribute('id'));}
    teclas[9].onmousedown = function(){buttonclick(teclas[9].getAttribute('id'));entradas(teclas[9].getAttribute('id'));}
    teclas[9].onmouseup = function(){buttonOut(teclas[9].getAttribute('id'));}
    teclas[10].onmousedown = function(){buttonclick(teclas[10].getAttribute('id'));entradas(teclas[10].getAttribute('id'));}
    teclas[10].onmouseup = function(){buttonOut(teclas[10].getAttribute('id'));}
    teclas[11].onmousedown = function(){buttonclick(teclas[11].getAttribute('id'));entradas(teclas[11].getAttribute('id'));}
    teclas[11].onmouseup = function(){buttonOut(teclas[11].getAttribute('id'));}
    teclas[12].onmousedown = function(){buttonclick(teclas[12].getAttribute('id'));entradas(teclas[12].getAttribute('id'));}
    teclas[12].onmouseup = function(){buttonOut(teclas[12].getAttribute('id'));}
    teclas[13].onmousedown = function(){ buttonclick(teclas[13].getAttribute('id')); entradas(teclas[13].getAttribute('id'));}
    teclas[13].onmouseup = function(){buttonOut(teclas[13].getAttribute('id'));}
    teclas[14].onmousedown = function(){buttonclick(teclas[14].getAttribute('id'));entradas(teclas[14].getAttribute('id'));}
    teclas[14].onmouseup = function(){buttonOut(teclas[14].getAttribute('id'));}
    teclas[15].onmousedown = function(){buttonclick(teclas[15].getAttribute('id'));entradas(teclas[15].getAttribute('id'));}
    teclas[15].onmouseup = function(){buttonOut(teclas[15].getAttribute('id'));}
    teclas[16].onmousedown = function(){buttonclick(teclas[16].getAttribute('id'));entradas(teclas[16].getAttribute('id'));}
    teclas[16].onmouseup = function(){buttonOut(teclas[16].getAttribute('id'));}
    teclas[17].onmousedown = function(){buttonclick(teclas[17].getAttribute('id'));entradas(teclas[17].getAttribute('id'));}
    teclas[17].onmouseup = function(){buttonOut(teclas[17].getAttribute('id'));}
    teclas[18].onmousedown = function(){buttonclick(teclas[18].getAttribute('id'));entradas(teclas[18].getAttribute('id'));}
    teclas[18].onmouseup = function(){buttonOut(teclas[18].getAttribute('id'));}
/////////////////////////////////////////////////////////////////////////////////

//FUNCIONES DE LISTENERS/////////////////////////////////////////////////////////

  function buttonclick (id) {

    document.getElementById(id).style="padding:1px;"
  }
  function buttonOut (id) {
    document.getElementById(id).style="padding:0px;"

  }
  function entradas(elemento) {

    switch (elemento) {
      case "punto":
            MyCalculadora().numero('.');
        break;
      case "on":
            MyCalculadora().borradoTotal();
        break;
      case "sign":
            MyCalculadora().opuesto();
        break;
      case "raiz":
            MyCalculadora().raizc();
        break;
      case "dividido":
            MyCalculadora().operar('/');
        break;
      case "por":
            MyCalculadora().operar('*');
        break
      case "mas":
            MyCalculadora().operar('+');
        break;
      case "menos":
            MyCalculadora().operar('-');
        break;
      case "igual":
            MyCalculadora().igual();
        break;
      default:
          MyCalculadora().numero(elemento);
    }
  }
///////////////////////////////////////////////////////////////////////////////

//IMPLEMENTACIONDE TECLADO ///////////////////////////////////////////////////
  function teclado (elEvento) {
           evento = elEvento || window.event;
           k=evento.keyCode; //número de código de la tecla.
           //teclas númericas del teclado alfamunérico
           if (k>47 && k<58) {
              p=k-48; //buscar número a mostrar.
              p=String(p) //convertir a cadena para poder añádir en pantalla.
              MyCalculadora().numero(p); //enviar para mostrar en pantalla
              }
           //Teclas del teclado númerico. Seguimos el mismo procedimiento que en el anterior.
           if (k>95 && k<106) {
              p=k-96;
              p=String(p);
              MyCalculadora().numero(p);
              }
           if (k==110 || k==190) {MyCalculadora().numero(".")} //teclas de coma decimal
           if (k==106) {MyCalculadora().operar('*')} //tecla multiplicación
           if (k==107) {MyCalculadora().operar('+')} //tecla suma
           if (k==109) {MyCalculadora().operar('-')} //tecla resta
           if (k==111) {MyCalculadora().operar('/')} //tecla división
           if (k==32 || k==13) {MyCalculadora().igual()} //Tecla igual: intro o barra espaciadora
           if (k==46) {MyCalculadora().borradoTotal()} //Tecla borrado total: "supr"
           if (k==8) {MyCalculadora().retro()} //Retroceso en escritura : tecla retroceso.
    }
/////////////////////////////////////////////////////////////////////////////
