const express = require('express')
const app = express()

app.get('/user/list', function (req, res) {

    const mockUsers = {
        name: 'Diego',
        age: 45
    }

  res.json(mockUsers)
})

app.listen(3000, () => {
    console.log('Servidor en puerto 3000')
})