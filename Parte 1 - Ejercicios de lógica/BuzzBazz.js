/**
 * BuzzBazz.js
 * 
 * Imprimir los números del 0 al 100, si es par imprimir la palabra buzz en caso de que el número sea par. Sí el número es múltiplo de 5 debe imprimirse en la misma línea la palabra bazz.
 */

let x;

const buzzbazz = numero => {
    if (numero % 2 == 0 && numero % 5 == 0) return numero +" "+ "buzz"+" "+ "bazz";
	if (numero % 2 == 0) return numero +" "+ "buzz";
    if (numero % 5 == 0) return numero +" "+ "bazz";
    
    else return numero
}

for (x = 1; x <= 100; x++) 
{
    console.log(buzzbazz(x));   
}