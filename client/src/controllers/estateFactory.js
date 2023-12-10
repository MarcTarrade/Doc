import axios from "axios";

export default {
    async getEstateListByUser(idUser) {
        try{
            if(!idUser){
                return { message: 'Aucun id de user', type: 'error' };
            }
            const response = await axios.get(`/api/estate/${idUser}`);
            return response.data;
        }
        catch(err){
            throw err;
        }
    }
}