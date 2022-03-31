const mapDAO = require("../dao/map")


class MapService {
    placeList() {
        return mapDAO.placeList();
    }
    placeSingle(id) {
        return mapDAO.placeSingle(id);
    }
    // createQuote(quote) {
    //     const {title, text_body, img_url} = quote;
    //     return mapDAO.createQuote(title,text_body,img_url);
    // }
    // deleteQuote(id) {
    //     return mapDAO.deleteQuote(id);
    // }

    editPlace(id, place) {
        return mapDAO.editPlace(id, place);
    }

    playerList() {
        return mapDAO.playerList();
    }
    playerSingle(id) {
        return mapDAO.playerSingle(id);
    }
}

module.exports = new MapService()