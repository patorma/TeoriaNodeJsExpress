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
    //requerimiento rutas
const routes = require('./routes')
const routesApi = require('./routes-api')
    //informacion al cliente
    //rutas
    //settings
app.set('appName', 'Mi primer serve')
    //se configura un motor de plantilla
    //pero primero se debe decir en que carpeta se dejara esta plantilla(ejs) y luego decir que la usaremos
    //__dirname muestra el directorio actual con index.js
    //la carpeta views se encuentra en el directorio
app.set('views', __dirname + '/views')

app.set('view engine', 'ejs')

//middleware
//morgan
app.use(morgan('combined'))
    //rutas
app.use(routes) //va a encontrar todas las rutas aqui
app.use('/api', routesApi) //si ninguna coincide se va a esta

app.get('*', (req, res) => {
    res.end('Archivo no encontrado')
})

//se creo servidor
//luego que se ejecuta el servidor en el puerto 300 se ejecuta una funcion (callback)
app.listen(3000, () => {
    console.log('servidor escuchando!!'.green)
        //con  app.get('name') llamo a app.set() su contenido 
    console.log('Nombre de la App: ', app.get('appName'))
})