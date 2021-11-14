const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "user"
        },
        orderId: {
            type: String,
            require: true,
            trim: true,
            unique: true
        },
        entity: {
            type: String,
            trim: true
        },
        amount: { 
            type: Number,
            required: true
        },
        amount_paid: {
            type: Number,
            default: 0
        },
        currency: {
            type: String,
            default: "INR",
        },
        receipt: {
            type: String,
        
        },
        status: {
            type: String,
            required: true
        },
        created_at: {
            type: String,
            require: true
        }
    }
);

module.exports = mongoose.model('Order', orderSchema);