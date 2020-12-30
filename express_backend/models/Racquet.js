/**
 * Schema for 'Racquet' for tennis racquet product mongo-database.
 */

const mongoose = require('mongoose');

const racquetSchema = new mongoose.Schema({
    brand: String,
    model: String, 
    image: String,
    description: String,
    price: Number,
    countInStock: Number,
    rating: Number,
    numReviews: Number,
    stiffness: Number,
    head_size: Number,
    weight: Number,
    pattern: String,
    tension: String,
    swingweight: Number, 
    balance: Number, 
    stiffness_human: String
})
const Racquet = mongoose.model('Racquet', racquetSchema);

module.exports = {
    racquetModel: Racquet,
    racquetSchema: racquetSchema
}
