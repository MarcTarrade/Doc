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
    }
}