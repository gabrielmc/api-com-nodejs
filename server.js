var express = require('express');

app = express();
port = process.env.PORT || 3000;
livro = require('./api/models/livroModel');
bodyParser = require('body-parser');

// Mongoose 
mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('SEU LINK DO BANCO');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/livroRoutes');
routes(app);

app.listen(port);
