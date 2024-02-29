const express = require("express");
const salesSchema = require("../models/sales");

const router = express.Router();

// create sale
router.post('/sales', (req, res) => {
    const sales = salesSchema(req.body);
    sales
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all sales
router.get('/sales', (req, res) => {
    salesSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a sale by id
router.get('/sales/:id', (req, res) => {
    const { id } = req.params;
    salesSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a sale
router.put('/sales/:id', (req, res) => {
    const { id } = req.params;
    const { clientId, productId, quantity, unitPrice, total, saleDate, paymentType } = req.body;
    salesSchema
    .updateOne({ _id: id }, { $set: { clientId, productId, quantity, unitPrice, total, saleDate, paymentType } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a sale
router.delete('/sales/:id', (req, res) => {
    const { id } = req.params;
    salesSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;