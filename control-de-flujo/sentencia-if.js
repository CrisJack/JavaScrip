//condición IF
//sintaxis
//if(condición){
//las instrucciones si la condición es verdadera
//}
var nota = 16;

if(nota>10){
   // document.write("usted esta aprobado");
}
//ELSE .. especifica un bloque de código que se ejecuta si una condición es falsa.

var nota1=9;

/*if(nota1>10){
    document.write("Felicidades, Usted aprobo el curso");
}else{
    document.write("Lo siento mucho, Usted Desaprobo")
}*/

//Else if.... especifica una nueva condición se la primera es falsa

var nota3=10;
if(nota3<=10){
    document.write("Usted esta desaprobado");
}else if(nota3>10 && nota3<=15){
    document.write("Usted tiene una nota aceptable");
}else if(nota3==16 || nota3==17){
    document.write("Usted tiene una nota excelente");
}else if(nota3==18 || nota3 == 19 || nota3==20){
    document.write("Usted es un genio");

}else{
    document.write("El valor ingresado no es valido");
}