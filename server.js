const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const jokes = require('./routes/api/jokes');


const app = express();

//Body Parser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to MongoDB
mongoose.connect(db)
    .then(()=> console.log('DB Connected...'))
    .catch(error => console.log(error));

app.use('/api/jokes', jokes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));