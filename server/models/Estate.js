const mongoose = require('mongoose');

const estateSchema = new mongoose.Schema({
    index: Number,
    name: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    current_tenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant'
    },
    old_tenants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant'
    }]
});

module.exports = mongoose.model('Estate', estateSchema);