const express = require('express');
const router = new express.Router();
const estateController = require('../controllers/estateController');

router.get('/:idUser', async (req, res) => {
    const documents = await estateController.getEstateListByUser(req.params.idUser);
    return res.send(documents);
})

module.exports = router;