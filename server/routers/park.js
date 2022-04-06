// routers are always plural and representing the route your using
const { Router } = require("express");
const Parks = require("../models/Parks");

const router = Router();

router.get("/", (request, response) => {
  Parks.model.find({}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    console.log(record);
    return response.json(record);
  });
});

module.exports = router;
