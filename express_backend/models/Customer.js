/**
 * Schema for 'Customer' when a new online customer registers for a new account on storefront page. 
 */

const {Schema, model} = require('mongoose');

const customerSchema = Schema({
    username: {type: String, required: true},
    password: String,
    product_cart: Array
})

module.exports = model('Customer', customerSchema);