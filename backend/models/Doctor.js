const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  specialty:  { type: String, required: true },
  location:   { type: String, required: true },
  fee:        { type: Number, required: true },
  rating:     { type: Number, default: 0 },
  experience: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', DoctorSchema);
