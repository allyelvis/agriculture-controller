const express = require('express');
const router = express.Router();
const Crop = require('../models/Crop');

// Add new crop
router.post('/', async (req, res) => {
  const crop = new Crop(req.body);
  await crop.save();
  res.status(201).send(crop);
});

// Get all crops
router.get('/', async (req, res) => {
  const crops = await Crop.find();
  res.send(crops);
});

module.exports = router;
