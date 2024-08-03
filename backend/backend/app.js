const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cropRoutes = require('./routes/cropRoutes');
const livestockRoutes = require('./routes/livestockRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/agriculture-management', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/crops', cropRoutes);
app.use('/api/livestock', livestockRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
