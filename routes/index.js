var express = require('express');
var geoDB = require('../services/nonPersistentStorage.js');
var router = express.Router();

/* GET home page. */
router.get('/geojson/', function(req, res, next) {
  res.status(200).json(geoDB.getGeoJSON());
});

router.post('/geojson', function(req, res, next) {
  //ada req.body.geoJSON ato ga
  geoDB.addGeoJSON(req.body.geoJSON)
  res.status(200).json({message: "Successfully saved"});
});

router.get('/geojson/delete/:id', function(req, res, next) {
  geoDB.deleteGeoJSON(req.params.id)
  res.status(200).json({massage: "Successfully deleted"})
});

module.exports = router;
