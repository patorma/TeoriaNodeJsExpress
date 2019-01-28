//Node.js servidor

/*const http = require('http')
require('colors')

http.createServer((req, res) => {
    res.end('Hola Mundo')

}).listen(3000, () => {
    console.log('Desde puerto 3000 nodejs'.red)
})*/
const colors = require('colors')
    //Node.js con Espress
const express = require('express')
    //se incializa express
const app = express()
    //informacion al cliente
app.get('/', (req, res) => {
        //se finaliza la peticion
        res.end('Hello World!')
    })
    //se creo servidor
    //luego que se ejecuta el servidor en el puerto 300 se ejecuta una funcion (callback)
app.listen(3000, () => {
    console.log('servidor escuchando!!'.green)
})