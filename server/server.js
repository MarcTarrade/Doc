const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoute = require('./routes/user');

mongoose.connect(process.env.MONGO_HOST)

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use('/user', userRoute);

app.listen(process.env.PORT, () => {
    console.log('Server started !')
});