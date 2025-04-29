const express    = require('express');
const mongoose   = require('mongoose');
const cors       = require('cors');
const bodyParser = require('body-parser');
const doctors    = require('./routes/doctors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  'mongodb://localhost:27017/apolloClone',
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('MongoDB Connected'))
 .catch(err => console.error(err));

app.use('/api/doctors', doctors);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
