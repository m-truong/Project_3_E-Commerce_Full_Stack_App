/**
 * "Racquet-model" used to create every "racquet-document-object" inside "RacquetDashDB" database.
 */

const mongoose = require('mongoose');

// Every "racquet-document-object" has this schema containing fields on racquet brand, model, Tennis Warehouse image link, description, and price. Properties such as stiffness, head_size, and string tension were created using the Racket Logger API database. 
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
