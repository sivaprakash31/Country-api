const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.SchemaTypes.ObjectId ,
            ref: "User"
        },
        isActive:{
            type: Boolean,
            default: true,
        },
        isTrail:{
            type: Boolean,
            default: false
        },
        totalHits: {
            type: Number,
            default: 0
        },
        currentHits: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Api', apiSchema);