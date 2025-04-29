const express = require('express');
const router  = express.Router();
const Doctor = require('../models/Doctor');

// Add a doctor
router.post('/', async (req, res) => {
  try {
    const doc = new Doctor(req.body);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// List doctors with filters & pagination
router.get('/', async (req, res) => {
  try {
    const { page=1, limit=10, specialty, location, minFee, maxFee } = req.query;
    const query = {};
    if (specialty) query.specialty = specialty;
    if (location)  query.location  = location;
    if (minFee)    query.fee       = { ...query.fee, $gte: +minFee };
    if (maxFee)    query.fee       = { ...query.fee, $lte: +maxFee };

    const doctors = await Doctor
      .find(query)
      .skip((page-1)*limit)
      .limit(+limit);

    const total = await Doctor.countDocuments(query);
    res.json({ doctors, total, page: +page, pages: Math.ceil(total/limit) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
