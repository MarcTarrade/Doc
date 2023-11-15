const express = require('express');
const router = new express.Router();
const uploadFile = require('express-fileupload')
const mediaController = require('../controllers/mediaController');

router.post('/uploadImage', uploadFile(), async (req, res) => {
    try{
        const images = await mediaController.uploadImage(req.files);
        if(images.length > 0){
            return res.send({ type: 'success', data: images, message: "Certaines images n'ont pas pu être envoyées" });
        }
        else{
            return res.send({ type: 'success', message: "Toutes les images ont bien été envoyées" });
        }
    }
    catch(e){
        console.error(`---- UploadImage: ${e}`);
        return res.status(500).send({ type: 'error', message: `Une erreur est survenue lors de l'envoi de l'image.` });
    }
})

router.post('/uploadDocument', uploadFile(), async (req, res) => {
    try{
        const files = await mediaController.uploadDocument(req.files);
        return res.send(files);
    }
    catch(e){
        console.error(`---- UploadFile: ${e}`);
        return res.status(500).send({ type: 'error', message: `Une erreur est survenue lors de l'envoi du fichier.` });
    }
})

router.get('/renderPDF/:fileName', async (req, res) => {
    return res.send(await mediaController.renderPDF(req.params.fileName));
})

router.delete('/deleteDocument/:fileName', async (req, res) => {
    return res.send(await mediaController.deleteDocument(req.params.fileName));
})

module.exports = router;