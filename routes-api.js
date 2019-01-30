const express = require('express') //primero se requiere express
const router = express.Router() //luego este modulo router

//si me piden la ruta incial, se responde con json
router.get('/', (req, res) => {
    res.json({
        miprimerApi: 'Works'
    })
})

module.exports = router