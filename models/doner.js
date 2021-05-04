const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sirname: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    blood: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    positive: {
        type: Date,
        required: true
    },
    negative: {
        type: Date,
        required: true
    },
    agreement: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

const Doner = mongoose.model("Doner",donerSchema);

module.exports = Doner;