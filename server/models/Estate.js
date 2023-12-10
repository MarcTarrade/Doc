const mongoose = require('mongoose');

const estateSchema = new mongoose.Schema({
    index: Number,
    name: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Estate', estateSchema);