// routers are always plural and representing the route your using
const { Router } = require("express");
const Goexploring = require("../models/Goexploring");

const router = Router();

router.get("/", (request, response) => {
  Goexploring.model.find({}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
