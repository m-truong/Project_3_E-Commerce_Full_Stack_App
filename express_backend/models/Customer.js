/**
 * Schema for 'Customer' when a new online customer registers for a new account on storefront page. 
 */
const { racquetModel, racquetSchema } = require("./Racquet.js")
const { Schema, model } = require('mongoose');

const customerSchema = Schema({
    username: {
        type: String,
        required: [true, "Please provide a valid username!"]
    },
    password: String,
    // One to many Document-Object relationship
    product_cart: [racquetSchema]
})

module.exports = model('Customer', customerSchema);