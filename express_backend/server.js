// ===================
// SET DEV-ENVIRONMENT
// ===================
if (process.env.NODE_ENV === 'development') {
    console.log("🎾🎾🎾 does this if statement-block run? 🎾🎾🎾")
    require('dotenv').config()
}
// Debugging
console.log(process.env.MONGODB_URI) // prints correctly
console.log(process.env.SECRET) // prints correctly

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
const SECRET = process.env.SECRET;

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
app.use(express.static("public"));
app.use(cors())
// app.use(cors(corsOptions))
app.use(express.json());

// ===============
// USE ROUTER
// ===============
app.use('/api/racquets', racquetController);

// ======================================
// AUTHENTICATION AND REGISTRATION ROUTES
// ======================================
// REGISTER-Customer ROUTE ** doesn't use async **
app.post('/register', (req, res) => {
    req.body.password = bcryptjs.hashSync(req.body.password, bcryptjs.genSaltSync(10));
    Customer.create(req.body, (err, newCustomer) => {
        if (!err) {
            res.status(200).json(newCustomer)
        } else {
            res.status(400).json(err)
        }
    })
})

// LOGIN ROUTE
app.post('/login', async (req, res) => {
    const { username, password } = req.body; 
    try {
        const user = await Customer.findOne( { username } )
        // 
        console.log("Customer logged in is: ", user);
        if (bcryptjs.compareSync(password, user.password)) { 
            // takes secret and username 
            // generates random String 'Bearer $2a' 
            // token keeps user logged in
            const token = jwt.sign({ 
                username: user.username 
            }, SECRET) 
            res.status(200).json({ 
                token, 
                username, 
                authenticated: true
            })
        }
    } catch(err) {
        res.status(400).json(err)
    }
})

// ============
// OPEN PORT
// ============
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}, and ready to accept HTTP requests from client-side...`);
})

// ** Cors-Options **
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