//#1...............................................
//alert("Bienvenidos al Mundo de JavaScrip");

//#2...............................................
//document.write("Hola Mundo");

//#3.............................................................
/*var a=25;
var b=13;
document.write("Resultado de la suma de ",a," + ",b," es: " ,a+b);*/

//#4...........................................................
/*var usuario=prompt("Cual es tu Nombre de Usuario");
document.write("Hola ", usuario);*/

//#5...........................................................
/*var numero1=prompt("Ingresa el Primer Numero");
var numero2=prompt("Ingresa el segundo numero");

if(numero1>numero2){
    console.log("El número mayor es: ",numero1);
}else{
    console.log("El número mayor es: ",numero2);
}*/

//#6...........................................................
/*var numero1=prompt("Ingresa el Primer Numero");
var numero2=prompt("Ingresa el segundo numero");
var numero3=prompt("Ingresa el Tercer numero");

if(numero1>numero2&&numero1>numero3){
    console.log("El número mayor es: ",numero1);
}else if(numero2>numero3){
    console.log("El número mayor es: ",numero2);
}else{
    console.log("El número mayor es: ",numero3);
}*/

//#7...........................................................
/*var numero = prompt("Ingresa un número");
residuo=numero%2;

if(residuo==0){
    console.log("el número ",numero," Si es divisible entre 2");
}else{
    console.log("el número ",numero," No es divisible entre 2");
}*/

//#8...........................................................
/*var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Ocubre","Noviembre","Diciembre"];

var contador;

for( contador=0; contador < 12; ) {
    console.log( "El valor de la posición [" + contador + "] es [" + meses[contador] + "]" ),contador++ ;
}*/

//#9..........................................................
/*var valores=[true,5,false,"Hola","Adios",2];
var mayor=0;

for(i=0;i<valores.length;i++){
    if(valores[i]>mayor){
        mayor=valores[i];
    }
}
console.log(mayor);

var a=valores[1];
var b=valores[5];

suma=a+b;console.log(suma);
resta=a-b;console.log(resta);
multi=a*b;console.log(multi);
divi=a/b;console.log(divi);
resi=a%b;console.log(resi);
*/

//#10..........................................................
/*var Motor=prompt("Ingrese el Tipo de Motor");

switch(Motor){
    case "0":
    console.log("No se ha establecido un valor definido para el tipo de bomba");
    break;
    case "1":
    console.log("La bomba es una bomba de agua");
    break;
    case "2":
    console.log("La bomba es una bomba de gasolina");
    break;
    case "3":
    console.log("La bomba es una Bomba de Hormigón");
    break;
    case "4":
    console.log("La bomba es una Bomba de Pasta Alimenticia");
    break;
    default:
        console.log("No existe un valor válido para este tipo de bomba");
        break;
}*/

//#11..........................................................
/*var edad=prompt("Ingrese su Edad por favor");

var mensaje=(edad>=18)?"Tiene Permiso para tomar":"Usted es Menor de Edad, No puede tomar";

console.log(mensaje);
*/