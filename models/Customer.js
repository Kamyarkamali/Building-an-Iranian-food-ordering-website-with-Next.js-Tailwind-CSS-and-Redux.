import mongoose from "mongoose";

const { Schema, model, models } = mongoose;


const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    lastName: {
        type: String,
        required: true,
        minLength: 1
    },
    email: {
        type: String,
        required: true,
        minLength: 1
    },
    password: {
        type: Number
    },
    confirmPassword: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Customer = models.Customer || model("users", CustomerSchema);

export default Customer;