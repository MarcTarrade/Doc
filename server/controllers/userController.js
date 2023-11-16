const User = require('../models/User');
const mongoose = require('mongoose')

module.exports = {
    async getUsers(){
        try{
            const users = await User.find({ });
            return users;
        }
        catch(e){
            throw e
        }
    },
    async createUser(user){
        try{
            if(!user){
                return { type: 'error', message: 'Utilisateur non renseigné' }
            }
            await User.create(user);
            return { type: 'success', message: 'Utilisateur crée' }
        }
        catch(e){
            throw e
        }
    }
}