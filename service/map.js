const mapDAO = require("../dao/map")


class MapService {
    placeList() {
        return mapDAO.placeList();
    }
    quoteSingle(id) {
        return mapDAO.placeSingle(id);
    }
    // createQuote(quote) {
    //     const {title, text_body, img_url} = quote;
    //     return mapDAO.createQuote(title,text_body,img_url);
    // }
    // deleteQuote(id) {
    //     return mapDAO.deleteQuote(id);
    // }

    editQuote(id, quote) {
        return mapDAO.editQuote(id, quote);
    }

    playerList() {
        return mapDAO.playerList();
    }
    playerSingle(id) {
        return mapDAO.playerSingle(id);
    }
}

module.exports = new MapService()