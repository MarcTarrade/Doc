import axios from 'axios'

export default {
    async getUsers() {
        try{
            const response = await axios.get(`/api/user`);
            return response.data
        }
        catch(err){
            throw err;
        }
    },
    async saveUsers(users, usersToDelete){
        try{
            const response = await axios.post(`/api/user`, { users, usersToDelete });
            return response.data
        }
        catch(err){
            throw err;
        }
    }
}