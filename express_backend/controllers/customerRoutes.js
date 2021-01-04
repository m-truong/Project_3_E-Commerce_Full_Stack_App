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
        console.log('check Postman to verify if "Customer" array of racquetSchema objects updated correctly correctly... ');
    }
});

// ===============================================
// CREATE: create a NEW resource 
// ===============================================
customerController.post('/register', (req, res) => {
    req.body.password = bcryptjs.hashSync(req.body.password, bcryptjs.genSaltSync(10));
    Customer.create(req.body, (err, newCustomer) => {
        if (!err) {
            res.status(200).json(newCustomer)
        } else {
            res.status(400).json(err)
        }
    })
})

module.exports = customerController; 