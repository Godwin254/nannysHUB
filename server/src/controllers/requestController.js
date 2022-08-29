//require services
const requestService = require("../services/requestService");
//const Request = require("../models/request");


//handle requests
const getAllRequests = async (req, res) => {
    try {
        const requests = await requestService.getAllRequests();
        res.send({ status: "ok", data: requests });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOneRequest = async (req, res) => {
    const {requestId} = req.params;
    if (!requestId){
        res.status(400).json({ status: "FAILED", message: "request Id is missing" });
    }

    try {
        const request = await requestService.getOneRequest(requestId);
        res.send({ status: "ok", data: request });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createNewRequest = async (req, res) => {
    const {firstname, lastname, email, phone, city, estate, gender, age, employment_status, work_type, agreement_type, availableTime, message} = req.body; //update later to include more fields
    const newRequest = { firstname, lastname, email, phone, city, estate, gender, age, employment_status, agreement_type, availableTime,work_type, message, status: "pending"};
    try {
        const createdRequest = await requestService.createNewRequest(newRequest);
        res.status(201).send({ status: "ok", data: createdRequest });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateOneRequest = async (req, res) => {
    const {body, params: {requestId}} = req
    if (!requestId){
        res.status(400).json({ status: "FAILED", message: "request Id is missing" });
    }
    try {
        const updatedRequest = await requestService.updateOneRequest(requestId, body);
        res.json({ status: "ok", data: updatedRequest });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteOneRequest = async (req, res) => {
    const {requestId} = req.params;
    if (!requestId){
        res.status(400).json({ status: "FAILED", message: "request Id is missing" });
    }
    try {
        const deletedRequest = await requestService.deleteOneRequest(requestId);
        res.json({ status: "ok", data: deletedRequest });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllRequests,
    getOneRequest,
    createNewRequest,
    updateOneRequest,
    deleteOneRequest
    
}