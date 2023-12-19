const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const documentRoute = require('./routes/document');
const mediaRoute = require('./routes/media');
const userRoute = require('./routes/user');
const estateRoute = require('./routes/estate');

mongoose.connect(process.env.MONGO_HOST)
require('./models/User');
require('./models/Tenant');

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.use('/documents', documentRoute);
app.use('/media', mediaRoute)
app.use('/user', userRoute)
app.use('/estate', estateRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT} !`)
});