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
    },
    async saveUsers(users){
        try{
            if(users.usersToDelete.length){
                await User.deleteMany({ _id: users.usersToDelete.map(user => new mongoose.Types.ObjectId(user._id)) });
            }
            for (const user of users.users) {
                if(!user._id && !user.name) continue;
                await User.updateOne({ _id: new mongoose.Types.ObjectId(user._id) }, user, { upsert: true });
            }
            return users;
        }
        catch(e){
            throw e
        }
    },
}