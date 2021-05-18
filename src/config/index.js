require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

// database configuration
require('./database');

// bodyparser configuration
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cors configuration
app.use(require('cors')());

// routes
app.use('/user', require('../api/routes/userroutes'));
app.use('/recipe', require('../api/routes/reciperoutes'));


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`));