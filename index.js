const express = require('express')
const App = express()

App.get('/', (req, res) => res.send('Hello!!!'))

let PORT = process.env.PORT || 3000
App.listen(PORT, () => console.log('App started at ',PORT) )