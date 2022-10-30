class GeoJSONNonPersistentStorage{
    constructor(){
        // jsObject sebagai array -> JS.Array
        this._jsObject = []
    }

    addGeoJSON(geoJSONstr){
        this._jsObject.push(geoJSONstr)
    }

    getGeoJSON(){
        return this._jsObject
    }

    deleteGeoJSON( index ){
        //misal data di -id return -> 404
        this._jsObject.splice(index, 1)
    }
}

const GeoDB = new GeoJSONNonPersistentStorage()

module.exports = GeoDB