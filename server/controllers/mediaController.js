const fs = require('fs');

module.exports = {
    async uploadImage(files){
        try{
            const file = files.files;
            const fileName = new Date().getTime() + '_' + file.name.replaceAll(' ', '_');
            const filePath = `server/images/${fileName}`;
            fs.writeFileSync(filePath, file.data);
            return { type: 'success', message: 'Fichier envoyé avec succès', data: `/api/media/renderImage/${fileName}` }
        }
        catch(e){
            throw e
        }
    },
    async renderImage(fileName){
        if(fs.existsSync(`server/images/${fileName}`)){
            return fs.readFileSync(`server/images/${fileName}`);
        }
        else{
            return { type: 'error', message: 'Fichier introuvable' };
        }
    },
    async uploadDocument(files){
        try{
            const file = files.files;
            const fileName = new Date().getTime() + '_' + file.name.replaceAll(' ', '_');
            const filePath = `server/documents/${fileName}`;
            fs.writeFileSync(filePath, file.data);
            return { type: 'success', message: 'Fichier envoyé avec succès', data: `/api/media/renderPDF/${fileName}` }
        }
        catch(e){
            throw e
        }
    },
    async renderPDF(fileName){
        if(fs.existsSync(`server/documents/${fileName}`)){
            return fs.readFileSync(`server/documents/${fileName}`);
        }
        else{
            return { type: 'error', message: 'Fichier introuvable' };
        }
    },
    async deleteDocument(fileName){
        if(fs.existsSync(`server/documents/${fileName}`)){
            fs.unlinkSync(`server/documents/${fileName}`);
            return { type: 'success', message: 'Fichier supprimé avec succès' }
        }
        else{
            return { type: 'error', message: 'Fichier introuvable' };
        }
    }
}