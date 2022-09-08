const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

// create collection shops
module.exports = mongoose.model("shops", shopSchema)