const express=require('express');
const router=express.Router();
const {check,validationResult}=require('express-validator');

const  productos=[
    {
      id:0,
      timestamp:Date.now(),
      nombre:'El señor de los anillos',
      descripcion:'Sarasa',
      codigo:01,
      url:'',
      precio:150,
      stock:5
    },
    {
        id:1,
        timestamp:Date.now(),
        nombre:'Iron Man',
        descripcion:'Basado en....',
        codigo:02,
        url:'',
        precio:200,
        stock:10
      }
];


//Listar todos los productos
router.get('/listar/',(req,res)=>{
   
    res.status(200).send(productos)
    

});
//Listar un prodcuto por su id
router.get('/listar/:id',(req,res)=>{
    const producto=productos.find(producto=>producto.id === parseInt(req.params.id))
    if(!producto)
    {
        res.status(400).send('El producto no existe');
    }else
    {
        res.status(200).send(producto);
    }

});
//Funcion para agregar productos
router.post('/agregar',
[check('nombre').isLength({min:4}),
check('descripcion').isLength({min:4}),
check('codigo').isLength({min:2}),
check('precio').toFloat().isLength({min:1}),
check('stock').toInt()
],
(req,res)=>{
 const errors=validationResult(req);
 if(!errors.isEmpty())
 {
     return res.status(400).send({errors:errors.array()});
 }

 const productoId=productos.length;
 const producto={
     id:productoId,
     timestamp:Date.now(),
     nombre:req.body.nombre,
     descripcion:req.body.descripcion,
     codigo:req.body.codigo,
     url:req.body.url,
     precio:req.body.precio,
     stock:req.body.stock
 }


 productos.push(producto);
 res.status(200).send(producto)

});

//Metodo para actualizar el Producto 

router.put('/actualizar/:id',
[
check('nombre').isLength({min:4}),
check('descripcion').isLength({min:4}),
check('codigo').isLength({min:2}),
check('precio').toFloat().isLength({min:1}),
check('stock').toInt()
]
,(req,res)=>{

    const error=validationResult(req);

    if(!error.isEmpty())
    {
        return res.send(400).jason({error:error.array()})
    }


    const producto=prodcutos.find(producto=>producto.id === parseInt(req.params.id))

    if(!producto)
    {
        res.status(400).send('No existe el producto ha modificar');

    }else
    {
        
            producto.nombre=req.body.nombre,
            producto.descripcion=req.body.descripcion,
            producto.precio=req.body.precio,
            producto.stock=req.body.stock

            res.status(200).send(producto);


        

    }

//Metodo para eliminar un producto

router.delete('/borrar/:id',(req,res)=>{
    const producto=productos.find(producto=>producto.id === parseInt())

    if(!producto)
    {
      return   res.status(400).send('Producto no eliminado porque no existe')
    }

    const index=productos.indexOf(producto);
    productos.splice(index,1);
    res.status(200).send('Producto Borrado')

})

})


module.exports=router;