const mongoose = require("mongoose");

const salesSchema = mongoose.Schema({
    clientId: {
        type: Number,
        required: true
    },
    productId: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true      
    },
    total: {
        type: Number,
        required: true
    },
    saleDate: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Sales', salesSchema);