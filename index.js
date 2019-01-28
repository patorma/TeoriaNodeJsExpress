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
const morgan = require('morgan')
    //se incializa express
const app = express()
    //informacion al cliente
    //rutas
    //middleware
    //morgan
app.use(morgan('dev'))


app.get('/', (req, res) => {
    //se finaliza la peticion
    res.end('Hello World!')
})

app.get('/login', (req, res) => {
    res.end('Aqui va el login')
})
app.get('*', (req, res) => {
        res.end('Archivo no encontrado')
    })
    //se creo servidor
    //luego que se ejecuta el servidor en el puerto 300 se ejecuta una funcion (callback)
app.listen(3000, () => {
    console.log('servidor escuchando!!'.green)
})