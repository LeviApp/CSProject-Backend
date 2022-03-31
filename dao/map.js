const db = require('../dbConfig');

class MapDAO {

    async placeList() {
        try {
            return db('map');
        }
        catch (err) {
            console.log("Something went wrong.", err)
        }
    }

    async placeSingle(id) {
        try {
            return db('map')
            .where('id', id).first();
        }
        catch (err) {
            console.log("Something went wrong.", err)
        }
    }

    // async addPlace(title,text_body,img_url) {
    // try {
    //     const [id] = await db('quotes')
    //     .insert({
    //         title: title,
    //         text_body: text_body,
    //         img_url: img_url
    //     })
    //     .returning('id')

    // }

    // catch (err) {
    //     console.log("Something went wrong.", err)
    // }
    // }

    // async deleteQuote(id) {

    //     try {
    //         return db('quotes')
    //         .where('id', id)
    //         .first()
    //         .del();
    //     }
    
    //     catch (err) {
    //         console.log("Something went wrong.", err)
    //     }
    //     }

    async editPlace(id, place) {

        try {
            return db('map').where('id', id).first().update(place);
        }
    
        catch (err) {
            console.log("Something went wrong.", err)
        }
        }

        async playerList() {
            try {
                return db('players');
            }
            catch (err) {
                console.log("Something went wrong.", err)
            }
        }
    
        async playerSingle(id) {
            try {
                return db('players')
                .where('id', id).first();
            }
            catch (err) {
                console.log("Something went wrong.", err)
            }
        }
}

module.exports = new MapDAO()