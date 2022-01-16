let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]
/*Utilizando el array anterior crear una función para cada uno de los siguientes requerimientos:

1.  Agregarle un id único a cada producto empezando en 1.
2. Imprimir en consola el nombre de cada uno de los productos.
3. Imprimir en consola el producto con el id 3.
4. Imprimir en consola los productos con color “black”.
5. Imprimir en consola los productos que no tienen color.
6. Agregar un producto nuevo al array con las mismas propiedades de los productos ya existentes.
7. Eliminar del array los productos fuera de stock.
8. Imprimir en consola la sumatoria del stock de todos los productos.
9. Imprimir los productos con un precio mayor a un importe determinado.
*/

 let wId = products.map((e, i) => {
  return e = {
      id: i+1,
      name: e.name,
      price: e.price, 
      queantity:e.quantity,
      colors:e.colors
  }
 })

 //console.log(wId)

 wId.forEach( e => {
     console.log(e.name)
 })

 let fil = wId.filter( e => {
     return e.id === 3
 })

 let fil2 = wId.filter( e => {
    return e.colors.find(e => e  === 'black')
})

 console.log(fil2)