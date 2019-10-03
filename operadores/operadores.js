//operadores de asignación
var x=15;
var y=2;

//var res=x+y;
x+=y;//x=x+y;
console.log("suma",x);

x-=y;//x=x-y;
console.log("resta",x);

x*=y;//x=x*y;
console.log("multiplicación",x);

x/=y;//x=x/y;
console.log("división",x);

x%=y;//x=x%y;
console.log("residuo",x);
//incremento
var a =35;
a++;
console.log(a);
//decremento
a--;
console.log(a);

//Operadores de Comparación

//igual ==
var edad=20;//asignando un valor
console.log("igual1...",edad==16);// valor booleano false
console.log("igual2...",edad==20);// valor booleano true
console.log("igual3...",edad=="20");// valor booleano true

//desigualdad !=
var edad2=15;
console.log("desigualdad1...",edad2!=18);// valor booleano true
console.log("desigualdad2...",edad2!=15);// valor booleano false
console.log("desigualdad3...",edad2!="15");// valor booleano false

//identico ===
var edad1=15;
console.log("identico1...",edad1===18);// valor booleano false
console.log("identico2...",edad1===15);// valor booleano true
console.log("identico3...",edad1==="15");// valor booleano false

//No identico !==
var edad3=30;
console.log("NoIdentico1...",edad3!=="20");// valor booleano true
console.log("NoIdentico2...",edad3!==30);// valor booleano false
console.log("NoIdentico3...",edad3!=="30");// valor booleano true

//OPERADORES LÓGICOS AND(&&);OR();NOT(!)

var numero1 =27;
var numero2 =25;

//AND PARA QUE SEA VERDADERO AMBAS CONDICIONES DEBEN SER TRUE
console.log("AND..",(numero1>26&&numero2<26));//TRUE
console.log("AND..",(numero1<26&&numero2<26));//FALSE

//OR PARA QUE SEA VERDADERO BASTA QUE UNA OPERACIÓN SEA TRUE
console.log("OR..",(numero1<26 || numero2 <26));//true
console.log("OR..",(numero1<26 || numero2 >26));//false

//NOT NEGACIÓN 
console.log("NOT...",!(numero1 > 20));//false
console.log("NOT...",!(numero1 < 20));//true
