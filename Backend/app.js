const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const helmet = require('helmet');
require("dotenv").config();

const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user')

const app = express();

//protection des headers
app.use(helmet());

//connexion BDD
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log("Connexion à MongoDB réussie !"))
    .catch( () => console.log("Connexion à MongoDB échouée !"));


//Paramétrage des headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
});

app.use(express.json()); // anciennement body parser
app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
