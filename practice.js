function calcuñatePrice(productName, productPrice) {
let pN = productName;
let costoEnvio = 0;
let costoTotal=0;
 if(productPrice > 0 && productPrice < 2001) {
     costoEnvio= 300
     costoTotal= productPrice + costoEnvio;
    return  'product Name : ' + pN + ' costo envio : ' +  costoEnvio + ' costo total : ' + costoTotal; 
 }
 else if(productPrice >= 2001 && productPrice <= 4000) {
    costoEnvio= 500
    costoTotal= productPrice + costoEnvio;
   return  'product Name : ' + pN + ' costo envio : $' +  costoEnvio + ' costo total : $' + costoTotal; 
}
else {
        costoEnvio= 700
        costoTotal= productPrice + costoEnvio;
       return  'product Name : ' + pN + ' costo envio : ' +  costoEnvio + ' costo total : ' + costoTotal; 
}
}
/* calcuñatePrice('Macbook', 2500);
calculatePrice(‘Celular’, 500);
calculatePrice(‘Playstation’, 4500); */


console.log(calcuñatePrice('Macbook', 2500))

/*  Cada producto tiene un costo de envío individual según su rango de precio:

Si el precio es $ 1 - $ 2000 el costo de envío → es de $ 300 
Si el precio es $ 2001 - $ 4000 el costo de envío → es de $ 500
Si el precio es > $ 4000 el costo de envío → es de $ 700

El precio final de la compra es precio del producto + costo de envío*/

