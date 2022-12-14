const express = require("express");
const router = express.Router();


//require controllers
const requestController = require("../controllers/requestController");

//crud operations
router.get("/", requestController.getAllRequests);

router.get("/:requestId", requestController.getOneRequest);

router.post("/", requestController.createNewRequest);

router.patch("/:requestId", requestController.updateOneRequest);

router.delete("/:requestId", requestController.deleteOneRequest);


module.exports = router;