import axios from 'axios';

export default {
    async deleteDocument(fileName) {
        try{
            if(!fileName){
                return { message: 'Aucun nom de fichier', type: 'error' };
            }
            const response = await axios.delete(`/api/media/deleteDocument/${fileName}`);
            return response.data;
        }
        catch(err){
            throw err;
        }
    },
    async uploadDocument(file, fileName){
        try{
            if(!file && !fileName){
                return { message: 'Aucun fichier', type: 'error' };
            }
            const fd = new FormData();
            fd.append('files',file, fileName);
            const response = await axios.post('/api/media/uploadDocument', fd);
            return response.data;
        }
        catch(err){
            throw err;
        }
    }
}