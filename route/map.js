const express = require("express");
// import * as pool from "dbConfig"
const router = express.Router();
const mapController = require('../controller/map')

router.get('/', (req, res) => {
    res.send({message: "map api working"})
  })
router.get('/map', mapController.placeList)
router.get('/map/:id', mapController.placeSingle)
router.put('/map/:id', mapController.editPlace)

router.get('/players', mapController.playerList)
router.get('/players/:id', mapController.playerSingle)

module.exports = router;

