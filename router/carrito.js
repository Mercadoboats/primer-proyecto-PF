const express= require('express');
const productos=require('./producto');
const router=express.Router();


carritoProductos=[{

}];

//Se listan todos los productos en el carrito
router.get('/listar',(req,res)=>{
    if(!carritoProductos)
    {
        return res.status(400).send('No hay productos en el carrito');
    }
    res.status(200).send(carrito)

});

router.get('/listar/:id',(req,res)=>{
    const carrito=carritoProductos.find(carrito=>carrito.id === parseInt(req.params.id))

    if(!carrito)
    {
        res.status(400).send('El producto no esta en el carrito');
    }

   
    res.send(200).send(carrito);

});

router.post('/agregar/id',(req,res)=>{
    const producto=prodcutos.find(producto=>producto.id === parseInt(req.params.id))
    

    if(!carrito)
    {
        return res.status(400).send('No existe el producto que queres agregar al carrito');
    }else{

        const producto={
            id:producto.id,
            timestamp:Date.now(),
            nombre:producto.nombre,
            descripcion:producto.descripcion,
            codigo:producto.codigo,
            url:producto.url,
            precio:producto.precio,
            stock:producto.stock
        }
    
        carritoProductos.push(producto)
    
        
        res.status(200).send('Producto agregado correctamente');
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