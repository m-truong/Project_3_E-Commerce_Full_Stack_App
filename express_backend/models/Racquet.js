/**
 * Schema for 'Racquet' for tennis racquet product mongo-database.
 */


const { Schema, model } = require('mongoose');

const racquetSchema = Schema({
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

module.exports = model('Racquet', racquetSchema);

// name: 'Babolat Pure Drive 2018',
//     category: "Tennis Racquet",
//         image: "https://img.tennis-warehouse.com/watermark/rs.php?path=BPD1H-1.jpg",
//             price: 219,
//                 countInStock: 10,
//                     brand: 'Babolat',
//                         rating: 4.5,
//                             numReviews: 10,
//                                 description: "High quality tennis racquet",

// "brand": "Babolat",
//         "model": "Pure Drive 2015",
//         "stiffness": 72,
//         "head_size": 100,
//         "weight": 11.1,
//         "pattern": "16 Mains / 19 Crosses",
//         "tension": "50-66 pounds",
//         "swingweight": "308",
//         "balance": -4,
//         "stiffness_human": "Very high - 85% (72 RA)"