const fs = require('fs');

module.exports = {
    async uploadImage(images){
        try{
            const failedImages = []
            Object.keys(images).forEach(key => {
                try{
                    const img = images[key];
                    const imagePath = `server/images/${img.name}`;
                    fs.writeFileSync(imagePath, img.data);
                }
                catch(e){
                    console.error(e);
                    failedImages.push(img.name)
                }
            })
            return failedImages;
        }
        catch(e){
            throw e
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