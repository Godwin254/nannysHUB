const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nannySchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    empStatus: {
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    jobOptions: [{ type: String, required: true }],
    availability: {
        type: String,
        required: true
    },
    agreementOptions: [{ type: String, required: true }],
    message: {
        type: String,
        required: true
    },
    isApproved: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Nanny', nannySchema);