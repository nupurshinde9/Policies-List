const express = require('express');
const router = express.Router();

const policies = require('../models/policies')

//retriving data
router.get('/policies', (req, res, next) => {
    // res.setHeader('Content-Type', 'application/json');
    policies.find(function(err, policies) {
        res.json(policies);
    })
});

module.exports = router;