// ===================
// SET DEV-ENVIRONMENT
// ===================
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
// ============
// DEPENDENCIES
// ============
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")
const express = require("express")
const Customer = require("../models/Customer.js");
const customerController = express.Router();
const SECRET = process.env.SECRET;

// =============================
// JWT AUTHENTICATION MIDDLEWARE  
// =============================
const auth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        const token = authorization.split(' ')[1];
        try {
            // decrypts back into object with username 
            const payload = await jwt.verify(token, SECRET);
            req.user = payload;
            next();
        } catch (error) {
            res.status(400).json(error);
        }
    } else {
        res.status(400).json({ error: 'no token in header' });
    }
};

// ===================================================
// AUTHENTICATION AND REGISTRATION ROUTES FOR CUSTOMER
// ===================================================
customerController.get('/', async (req, res) => {
    // ======================================
    // INDEX: display a list of all resources
    // ======================================
    try {
        const foundCustomers = await Customer.find({});
        res.status(200).json(foundCustomers);
    } catch (error) {
        res.status(400).json(error);
    } finally {
        // console.log('check Postman to verify if it displayed all "customer"" document-objects correctly...');
    }
})

// ===========================================
// UPDATE: update a resource
// ===========================================
customerController.put('/productcart/:id', auth, async (req, res) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(400).json(error);
    } finally {
        // console.log('check Postman to verify if "Customer" array of racquetSchema objects updated correctly correctly... ');
    }
});

// ===============================================
// CREATE: create a NEW resource 
// ===============================================
customerController.post('/register', async (req, res) => {
    try {
        const { username } = req.body;
        const user = await Customer.findOne({ username })
        // This prevents a new "customer" from registering with an existing "username" found in the "customers" collection.
        if (!user) {
            req.body.password = bcryptjs.hashSync(req.body.password, bcryptjs.genSaltSync(10));
            Customer.create(req.body, (err, newCustomer) => {
                if (!err) {
                    res.status(200).json(newCustomer)
                } else {
                    res.status(400).json(err)
                }
            })
        }
    } catch (err) {
        console.error(err)
        res.status(400).json(err)
    } finally {
        // console.log("check MongoDB Atlass to verifiy if new \"Customer\" created...")
    }
})

module.exports = customerController; 