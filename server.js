const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const dotenv = require ('dotenv')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
