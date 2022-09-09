import express from "express"
// import * as pool from "dbConfig"
const router = express.Router();
import mapController from "../controller/map.js"

router.get('/', (req, res) => {
    res.send({message: "map api working"})
  })
router.get('/map', mapController.placeList)
router.get('/map/:id', mapController.placeSingle)
router.put('/map/:id', mapController.editPlace)

router.get('/players', mapController.playerList)
router.get('/players/:id', mapController.playerSingle)

export default router;

