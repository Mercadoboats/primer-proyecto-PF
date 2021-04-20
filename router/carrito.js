const express= require('express');
const productos=require('./ListaProductos');
const router=express.Router();


const carritoProductos=[];

//Se listan todos los productos en el carrito
router.get('/listar',(req,res)=>{

        
   
    res.status(200).send(carritoProductos)
    

});

router.get('/listar/:id',(req,res)=>{
    const carrito=carritoProductos.find(carrito=>carrito.id === parseInt(req.params.id))

    if(!carrito)
    {
        res.status(400).send('El producto no esta en el carrito');
    }

   
    res.send(200).send(carrito);

});

router.post('/agregar/:id',(req,res)=>{

    const productoCarrito=productos.find(producto=>producto.id === parseInt(req.params.id))
    

  if(!productoCarrito)
    {
        return res.status(400).send('No existe el producto que queres agregar al carrito');
    }else{

       
    
        carritoProductos.push(productoCarrito)
    
        
        res.status(200).send('Producto enviado');
    }
     

});

router.delete('/borrar/:id',(req,res)=>{
    const producto=carritoProductos.find(producto=>producto.id === parseInt(req.params.id))

    if(!producto)
    {
      return  res.status(400).send('No existe el producto ha borrar en el carrito')

    }

    const index=carritoProductos.indexOf(producto);
    carritoProductos.splice(index,1);
    res.status(200).send('Producto Borrado')




    
})

module.exports=router;