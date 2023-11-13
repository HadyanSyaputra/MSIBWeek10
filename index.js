const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const movies = require('./routes/movies');
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/movies', movies);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
