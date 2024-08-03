const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: String,
  plantingDate: Date,
  harvestDate: Date,
  growthStage: String
});

module.exports = mongoose.model('Crop', cropSchema);
