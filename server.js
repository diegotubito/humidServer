const express = require('express')
const app = express()

// Setup a Json format for body request
app.use(express.json())

// lista de usuarios falsos
const userDiego = {
    name: 'Diego',
    age: 45
}
const userLiz = {
    name: 'Liz',
    age: 27
}

const list = [userDiego, userLiz]



app.get('/user', function (req, res) {
  res.json(list)
})

app.post('/user', function (req, res) {
    const body = req.body
   
    const name = body.name
    if (name == null ) {
        res.status(400).json({
            message: 'Error el parametro name es obligatorio'
        })
        return
    } else if (name == "") {
        res.status(400).json({
            message: 'Error el parametro name no puede estar vacio'
        })

    } else {
        list.push(body)

        res.status(201).json({
            message: 'success'
        })    
    }
})

app.listen(3000, () => {
    console.log('Servidor en puerto 3000')
})