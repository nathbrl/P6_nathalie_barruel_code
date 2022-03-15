const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//schéma de données utilisateur
const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true}
});

//vérification que l'adresse mail soit unique
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);