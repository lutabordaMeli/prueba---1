const express = require('express');
const app = express();
const lumi = ``;
let products = [
    {id: 1, name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    {id: 2, name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    {id: 3, name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    {id: 4, name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    {id: 5, name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    {id: 6, name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    {id: 7, name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    {id: 8, name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    {id: 9, name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    {id: 10, name: 'Monitor', price: 200, quantity: 3, colors: [] },
]


app.use(express.json())


app.get('/', (req, res) =>{
 res.status(200).send('funciona')
})

app.get('/api/products', (req, res) =>{
    res.status(200).send(products)
   })


app.get('/api/products/:id', (req, res) =>{
    let { id }  = req.params
    let findId = products.find(e => e.id === Number(id))
    findId ? res.status(200).send(findId) :
    res.status(200).send('Id No existe')
   })

app.post('/api/products', (req, res) =>{
 let newProduct = req.body
  products.push(newProduct)
    res.status(200).json({products, msg:'todo ok'})
})

app.put('/api/products/:id', (req, res) =>{
    let { id }  = req.params
   
  try {
     let findId = products.find(e => e.id === Number(id)) 
     findId.price = 'no existe'  
     res.status(200).send(products)
  } catch (error) {
    res.status(200).send('no existe producto')
      }
   })

   app.delete('/api/products/:id', (req, res) =>{
    let { id }  = req.params
   
  try {
    products = products.filter(e => e.id !== Number(id))  
     res.status(200).json({msj:'producto con ID: ' + id + 'fue eliminado',products})
  } catch (error) {
    res.status(200).send('no existe producto')
      }
   })

app.listen(3001,() => {
 console.log('server listening port 3001')
})


/* 1. Retornar todos los productos del array. “/api/products”,
2. Obtener un producto específico mediante su ID “/api/product/:id”
3. Agregar un nuevo producto “/api/product”,
4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/product/:id”,
5. Eliminar un producto mediante su ID “/api/product/:id”, */