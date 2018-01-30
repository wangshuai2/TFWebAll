const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

//DoraCMS

app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/test', function(req, res) {
    res.render('test');
})

app.post('/test', function(req, res) {
    
})

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});