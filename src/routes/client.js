const ClientModel = require('../models/client.model');
const express = require('express');
const router = express.Router();


//create new customer
router.post('/customer', (res, req) => {
    //req.body
    if (!req.body) {
        return res.status(404).send('Req body is missing')
    }

    let model = new ClientModel(req.body);
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })

})

router.get('/customer', (req, res) => {
    if (!req.query.email) {
        return res.status(404).send('Missing URL param: email');
    }
    ClientModel.findOne({
        email: req.query.email
    })
        .then(doc =>
            res.json(doc))
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;