const express = require('express');
const router = new express.Router();
const uploadFile = require('express-fileupload')
const mediaController = require('../controllers/mediaController');

router.post('/uploadImage', uploadFile(), async (req, res) => {
    try{
        const images = await mediaController.uploadImage(req.files);
        return res.send(images);
    }
    catch(e){
        console.error(`---- UploadImage: ${e}`);
        return res.status(500).send({ type: 'error', message: `Une erreur est survenue lors de l'envoi de l'image.` });
    }
})

router.get('/renderImage/:fileName', async (req, res) => {
    return res.send(await mediaController.renderImage(req.params.fileName));
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