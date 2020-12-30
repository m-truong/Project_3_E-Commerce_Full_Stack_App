// ===================
// SET DEV-ENVIRONMENT
// ===================

// =======================================
const SECRET = "abcdefghijklmnopqrstuvwxyz";
// =======================================
const {racquetModel, racquetSchema} = require ("../models/Racquet.js")
const jwt = require ( "jsonwebtoken")
const express = require ( "express")
const racquetController = express.Router();


// =============================
// JWT AUTHENTICATION MIDDLEWARE  
// =============================
// const auth = async (req, res, next) => {
//     const { authorization } = req.headers;
//     console.log(req.headers); 
//     if (authorization) {
//         const token = authorization.split(' ')[1];
//         try {
//             // decrypts back into object with username 
//             const payload = await jwt.verify(token, SECRET);
//             console.log("payload", payload);
//             req.user = payload;
//             next();
//         } catch (error) {
//             res.status(400).json(error);
//         }
//     } else {
//         res.status(400).json({ error: 'no token in header' });
//     }
// };

// ==============================================
// RESTFUL-ROUTES I-DUC-S: no NEW and EDIT routes
// ==============================================

// ======================================
// INDEX: display a list of all resources
// ======================================
racquetController.get('/', async (req, res) => {
    try {
        const foundRacquets = await racquetModel.find({});
        res.status(200).json(foundRacquets);
    } catch (error) {
        res.status(400).json(error);
    } finally {
        console.log('check Postman to verify if it displayed all tennis racquet document-objects fetched correctly...');
    }
});

// ==========================
// DELETE: destroy a resource
// ==========================

// ===========================================
// UPDATE(Functional-route): update a resource
// ===========================================

// ===============================================
// CREATE(Functional-route): create a NEW resource 
// ===============================================
racquetController.post('/', async (req, res) => {
    try {
        const createdRacquet = await racquetModel.create(req.body);
        res.status(200).json(createdRacquet);
    } catch (error) {
        res.status(400).json(error);
    } finally {
        console.log('check Postman to verify if new tennis racquet document-object was successfully created...');
    }
});
// ==========================================================
// SHOW(Presentational-route): DISPLAY an individual resource 
// ==========================================================

module.exports = racquetController; 