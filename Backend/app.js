const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const sauceRoutes = require('./routes/sauces');

const userRoutes = require('./routes/user')

mongoose.connect("mongodb+srv://nbrl:lolilol@cluster0.4xyys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log("Connexion à MongoDB réussie !"))
    .catch( () => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use((req, res, next) => {
    //permet d'accéder à l'API depuis n'importe quelle origine
    res.setHeader("Access-Control-Allow-Origin", "*");
    //permet d'ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    //permet d'envoyer des requêtes avec les méthodes mentionnées ( GET, POST, etc...)
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

//Donne accès au corps de la requête et rend ses données exploitables
//anciennement avec body-parser
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
