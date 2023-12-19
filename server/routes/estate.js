const express = require('express');
const router = new express.Router();
const estateController = require('../controllers/estateController');

router.get('/user/:idUser', async (req, res) => {
    const estates = await estateController.getEstateListByUser(req.params.idUser);
    return res.send(estates);
})

router.get('/:id', async (req, res) => {
    const estate = await estateController.getEstateInfo(req.params.id);
    return res.send(estate);
})

router.put('/:id', async (req, res) => {
    const estate = await estateController.updateEstate(req.params.id, req.body);
    return res.send(estate);
})

router.post('/', async (req, res) => {
    const estate = await estateController.createEstate(req.body.estate);
    return res.send(estate);
})


module.exports = router;