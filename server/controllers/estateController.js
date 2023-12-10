const Estate = require('../models/Estate');
const mongoose = require('mongoose');

module.exports = {
    async getEstateListByUser(idUser){
        try{
            const estateList = await Estate.find({ user: new mongoose.Types.ObjectId(idUser) });
            return estateList;
        }
        catch(e){
            throw e
        }
    }
}