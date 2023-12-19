import axios from "axios";

export default {
    async getEstateListByUser(idUser) {
        try{
            if(!idUser){
                return { message: 'Aucun id de user', type: 'error' };
            }
            const response = await axios.get(`/api/estate/user/${idUser}`);
            return response.data;
        }
        catch(err){
            throw err;
        }
    },
    async getEstateInfo(idEstate) {
        try{
            if(!idEstate){
                return { message: 'Aucun id d\'appartement', type: 'error' };
            }
            const response = await axios.get(`/api/estate/${idEstate}`);
            return response.data;
        }
        catch(err){
            throw err;
        }
    },
    async updateEstate(estate) {
        try{
            const response = await axios.put(`/api/estate/${estate.estate._id}`, estate);
            return response.data
        }
        catch(err){
            throw err;
        }
    },
    async createEstate(estate) {
        try{
            const response = await axios.post(`/api/estate`, estate);
            return response.data
        }
        catch(err){
            throw err;
        }
    }
}