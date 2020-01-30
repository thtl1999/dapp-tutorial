const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, function(err) {
    console.log('Connected port' + port)
});

