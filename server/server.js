const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const documentRoute = require('./routes/document');
const mediaRoute = require('./routes/media');

mongoose.connect(process.env.MONGO_HOST)
require('./models/User');

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use('/documents', documentRoute);
app.use('/media', mediaRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT} !`)
});