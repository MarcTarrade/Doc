const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    index: Number,
    name: String,
    path: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant'
    },
    type: String
});

module.exports = mongoose.model('Document', documentSchema);