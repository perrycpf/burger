const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// Create the routes
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    let burgerName = req.body.burger_name;
    let objColVal = false;

    burger.insertOne(burgerName, objColVal, (result) => {
        // Send back the ID of the new burger
        console.log(result);
        res.json({id: result.insertId});
    });
});

router.put('/api/burgers/:id', (req, res) => {
    let condition = req.params.id;
    let objColVal = true;

    burger.updateOne(objColVal, condition, (result) => {
        if (result.changeRows === 0) 
        // If no row was updated, then ID doesn't exist
            return res.status(404).end();
        else
            res.status(200).end();
        console.log(result);
    });
});

module.exports = router;