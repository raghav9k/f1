const express = require('express');
const router = express.Router();
const formula1 = require('../services/formula1');


router.get('/',async function(req, res, next) {
    try {
        res.json(await formula1.getCircuits(req.query.page));
    } catch (err) {
        console.error('Error while getting list of circuits',  err.message);
        next(err);
    }
});

module.exports = router;