// ===================
// SET DEV-ENVIRONMENT
// ===================
if (process.env.NODE_ENV === 'development') {
    console.log("🎾🎾🎾 does this if statement-block run? 🎾🎾🎾")
    require('dotenv').config()
}
console.log(process.env.MONGODB_URI)
// ============
// DEPENDENCIES
// ============
const express = require("express")
const mongoose = require( "mongoose")
const cors = require( "cors")
const bcryptjs = require( "bcryptjs")
const jwt = require( "jsonwebtoken")
const Customer = require( "./models/Customer.js");
const { Racquet } = require( "./models/Racquet.js");
const racquetController = require( "./controllers/racquetRoutes.js")
const PORT = process.env.PORT || 3000
const app = express()

// =============
// MONGODB-ATLAS
// =============
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))
db.once('open', () => { console.log('connected to mongoose...'); })

const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// ===============
// JSON MIDDLEWARE 
// ** needs to be before router ** 
// ===============
// ===============
// USE ROUTER
// ===============
app.use(express.static("public"));
app.use(cors())
// app.use(cors(corsOptions))
app.use(express.json());
app.use('/api/racquets', racquetController);

// Non-Rest Routes
app.get('/', (req, res) => {
    res.send('Server is ready');
})

// About page
// app.get('/about', (req, res) => {
//     res.render('about', {
//         aboutContent: aboutContent
//     });
// })

// Contact page
// app.get('/contact', (req, res) => {
//     res.render('contact', {
//         contactContent: contactContent
//     });
// })

// ============
// OPEN PORT
// ============
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}, and ready to accept HTTP requests from client-side...`);
})


// const whitelist = [
//     'http://localhost:3007',
//     'https://fathomless-sierra-68956.herokuapp.com',
// ];
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
// };