// ===================
// SET DEV-ENVIRONMENT
// ===================
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
// ============
// DEPENDENCIES
// ============
import express from "express";
import data from "./data.js";
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcryptjs = require("bcryptjs");
// const jwt = require('jsonwebtoken');
// const Customer = require('./models/customerModel');
// const restfulController = require('./controllers/restfulRoutes.js');
const app = express(); 
const PORT = process.env.PORT || 3000;

app.get('/api/products', (req, res)=> {
    res.send(data.products); 
})

// Non-Rest Routes
app.get('/', (req, res) => {
    res.send('Server is ready');
})

// MongoDB_URI 
// const MONGODB_URI = process.env.MONGODB_URI; 
// MONGODB_URI=mongodb+srv://mtruong:everwood@cluster0.danc0.mongodb.net/<password>?retryWrites=true&w=majority

// =============
// MONGODB ATLAS
// =============
// mongoose.connection.on('error', (err) =>
//   console.log(err.message + ' is Mongod not running?')
// );
// mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
// mongoose.connection.once('open', () => {
//   console.log('connected to mongoose...');
// });
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// ============
// OPEN PORT
// ============
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})