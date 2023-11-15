import axios from 'axios'

export default {
    async getDocuments(idUser) {
        try{
            if(!idUser){
                return { message: 'Aucun id de user', type: 'error' };
            }
            const response = await axios.get(`/api/documents/${idUser}`);
            return response.data
        }
        catch(err){
            throw err;
        }
    },
    async updateDocuments(documents) {
        try{
            if(!documents.documents.length && !documents.documentsToDelete.length){
                return;
            }
            const response = await axios.put(`/api/documents`, documents);
            return response.data
        }
        catch(err){
            throw err;
        }
    }
}