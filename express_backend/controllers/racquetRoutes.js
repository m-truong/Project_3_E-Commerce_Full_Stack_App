// ===================
// SET DEV-ENVIRONMENT
// =================== 
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
// ============
// DEPENDENCIES
// ============
const { racquetModel } = require("../models/Racquet.js")
const jwt = require("jsonwebtoken")
const express = require("express")
const racquetController = express.Router();

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

// ==============================================
// RESTFUL-ROUTES 
// ==============================================
racquetController.route("/") 
    .get(async (req, res) => {
        // ======================================
        // INDEX: display a list of all resources
        // ======================================
        try {
            const foundRacquets = await racquetModel.find({});
            res.status(200).json(foundRacquets);
        } catch (error) {
            res.status(400).json(error);
        } finally {
            // console.log('check Postman to verify if it displayed all tennis racquet document-objects fetched correctly...');
        }
    })
    .post(async (req, res) => {
        // ===============================================
        // CREATE: create a NEW resource 
        // ===============================================
        try {
            const createdRacquet = await racquetModel.create(req.body);
            res.status(200).json(createdRacquet);
        } catch (error) {
            res.status(400).json(error);
        } finally {
            // console.log('check Postman to verify if new tennis racquet document-object was successfully created...');
        }
    });

module.exports = racquetController; 