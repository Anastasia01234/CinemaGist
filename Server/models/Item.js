const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
    },

    img: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    movieTitle: {
        type: String,
        required: true,
    },
});

module.exports = Item = mongoose.model('item', ItemSchema);