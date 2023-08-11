const express = require('express');
const app = express();


let port = process.env.PORT || 5500;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
