const express = require('express')
const app = express ()

app.get('/', (req,res)=>{
    const nombre = req.query.nombre;
    if(nombre==='Juan'){
        res.send(`<h1>Hola ${nombre}!</h1>`)
    }else{res.send('<h1>Hola desconocido!</h1>')}
    
})
app.listen (3000,()=>console.log('listening on port 3000'))