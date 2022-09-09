import mapDAO from "../dao/map.js"


class MapService {
    placeList() {
        return mapDAO.placeList();
    }

    placeSingle(id) {
        return mapDAO.placeSingle(id);
    }

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

export default new MapService()