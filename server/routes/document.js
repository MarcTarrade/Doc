const express = require('express');
const router = new express.Router();
const documentController = require('../controllers/documentController');

router.get('/:idUser', async (req, res) => {
    const documents = await documentController.getDocumentById(req.params.idUser);
    return res.send(documents);
})

router.put('/', async (req, res) => {
    await documentController.updateDocuments(req.body);
    return res.send()
})

router.post('/:idUser', async (req, res) => {
    await documentController.createDocument(req.params.idUser, req.body);
    return res.send();
})

router.delete('/:id', async (req, res) => {
    await documentController.deleteDocument(req.params.id);
    return res.send();
})

module.exports = router;