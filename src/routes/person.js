const express = require('express');
const { Router } = require('express');
let router = express.Router();

//querystring => query prop on the request object
router.get('/person', (req, res) => {
    if (req.query.name) {
        res.send(`U have requested a person, ${req.query.name}`);
    } else {
        res.send('U have requested a person');
    }
})

//Params property on the request object
router.get('/person/:name', (req, res) => {
    res.send(`U have requested a person, ${req.params.name}`);
})

router.get('/error', (req, res) => {
    throw new Error('this is a forced error')
})

module.exports = router;