const express = require('express');
const db = require('./data/dbConfig');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const cars = await db('cars');
        res.json(cars);
    } catch {
        res.status(500).json({ message: 'Failed to retrieve cars', err});
    }
});

router.post('/', async (req, res) => {
    const carsData = req.body;
    console.log(req.body);
    try{
        const [id] = await db('cars').insert(carsData);
        const newCarEntry = await db('cars').where({ id });

        res.status(201).json(newCarEntry);
    } catch {
        console.log('POST error', { err });
        res.status(500).json({ message: "Failed"})
    }
});

module.exports = router;