const mongoose = require('mongoose');

//schéma de données pour les sauces
const sauceSchema = mongoose.Schema({
    
    userId: { type: String, required: true },
    name: { type: String, required: true, maxLength: [50, "Le nom doit comporter moins de 51 caractères"], },
    manufacturer: { type: String, required: true, maxLength: [50, "Le nom doit comporter moins de 51 caractères"], },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true, maxLength: [35, "Le nom doit comporter moins de 36 caractères"] },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, default: 0},
    dislikes: { type: Number, default: 0},
    usersLiked: { type: Array},
    usersDisliked: { type: Array},
});

module.exports = mongoose.model('Sauce', sauceSchema);