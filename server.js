const express=require('express');
const producto=require('./router/producto');
const carrito=require('./router/carrito');
const app=express();
const PORT=8080;
//importante esta exprecion para usar POST en POSTMAN
app.use(express.json());
app.use('/api/producto/',producto)
app.use('/api/carrito/',carrito)

const administrador=Boolean;

const server = app.listen(PORT,()=>{console.log(`El servidor esta inicializado en el puerto:${PORT}`)})
.on(`error`,error=>{console.log(`Error:${error}`)});
