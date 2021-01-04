/**
 * "Customer-model" for new users on the Racquet Dash Store App.
 */
const { racquetSchema } = require("./Racquet.js")
const { Schema, model } = require('mongoose');

const customerSchema = Schema({
    // username is required
    username: {
        type: String,
        required: [true, "Please provide a valid username"]
    },
    // password is a String
    password: String,
    // "product_cart" field establishes a "one-to-many" relationship between "Customer-model" and "Racquet-model"
    // every new "Customer" that registers with a username will have a "product-cart" array of "Racquet-objects"
    product_cart: [racquetSchema]
})

module.exports = model('Customer', customerSchema);