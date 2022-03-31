const mapService = require('../service/quote')

class MapController {
    async placeList(req,res) {
        try {
            const places = await mapService.placeList()
            res.status(200).json(places)
        }

        catch (err) {
            console.error(err)
        }
    }
    async placeSingle(req,res) {
        const {id} = req.params;
        try {
            const place = await mapService.placeSingle(id)
            if (place) {res.json(place)}
    
            else {
                res
                .status(404)
                .json({"message": "Place with that id does not exist"})
            }
        }

        catch (err) {
            console.error(err)
        }
    }
    // async createQuote(req,res) {
    //     try {
    //         const id = await mapService.createQuote(req.body)
    //         res.status(201).json(id)
    //     }

    //     catch (err) {
    //         console.error(err)
    //     }
    // }

    // async deleteQuote(req,res) {
    //     const {id} = req.params;
    //     try {
    //         let deleted = await mapService.deleteQuote(id);
    
    //         if (deleted) {
    //         res.json({message: "Quote deleted"})}
        
    //         else {
    //         res.status(404).json({message: "Quote with this ID does not exist."})
    //         }
    //     }
    //     catch(err) {
    //         res
    //         .status(500)
    //         .json({message: `Quote could not be deleted ${err}`})
    //     }
    // }

    async editPlace(req,res) {
        const edittedPLACE  = req.body;
        const {id} = req.params;
        
            try {
            let count = await mapService.editPlace(id, edittedPLACE);

                if (count) {
                    res.status(200).json(edittedPLACE)
                }
        
                else { res.status(404).json({message:`The place with the specified ID does not exist.`})}
            }
            catch(err) {
                
                    res.status(500).json({error: `The place could not be updated ${err}`})
                
            }
    }

    async playerList(req,res) {
        try {
            const players = await mapService.playerList()
            res.status(200).json(players)
        }

        catch (err) {
            console.error(err)
        }
    }
    async playerSingle(req,res) {
        const {id} = req.params;
        try {
            const player = await mapService.playerSingle(id)
            if (player) {res.json(quote)}
    
            else {
                res
                .status(404)
                .json({"message": "Place with that id does not exist"})
            }
        }

        catch (err) {
            console.error(err)
        }
    }
}

module.exports = new MapController()