// Usando objeto express
const express = require('express')
// App de Express
const app = express()
// Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000

// path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Se inicializa esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Se agrega una ruta nueva para poder responder en la url localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})

// Regresando un objeto en localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

// Se agrega nueva ruta que reciba Query Params
// En /explorers/:explorerName, :explorerName será un valor enviado por la url
// http://localhost:3000/explorers/andrea
// req.params = {"explorerName": "andrea"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})