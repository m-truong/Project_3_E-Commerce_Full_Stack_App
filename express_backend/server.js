// ===================
// SET BUILD-ENVIRONMENT
// ===================
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('react_frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/react_frontend/build/index.html'));
    });
}
// ===================
// SET DEV-ENVIRONMENT
// ===================
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

// ============
// DEPENDENCIES
// ============
const PORT = process.env.PORT || 3000
const SECRET = process.env.SECRET
const MONGODB_URI = process.env.MONGODB_URI
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Customer = require("./models/Customer.js");
const racquetController = require("./controllers/racquetRoutes.js")
const customerController = require("./controllers/customerRoutes.js")
const app = express()

// =============
// MONGODB-ATLAS
// =============
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))
db.once('open', () => { console.log('connected to mongoose...'); })
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// ===============
// MIDDLEWARE 
// ===============
app.use(express.static("public"));
app.use(cors())
// app.use(cors(corsOptions))
app.use(express.json());

// ===============================
// RACQUET && CUSTOMER-ROUTERS
// ===============================
app.use('/api/racquets', racquetController);
app.use('/api/customers', customerController)

// LOGIN ROUTE
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Customer.findOne({ username })
        // ** This prevents the "login-route" from passing back a "null" value when a "username" is not found inside my "customers". 
        if (user === null) {
            return;
        }
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
                authenticated: true,
                user
            })
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

// ============
// OPEN PORT
// ============
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}, and ready to accept HTTP requests from client-side...`);
})
