import mongoose from "mongoose"

const userScheme = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    password: {
        type: String,
        required: true,

    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    phone: {
        type: String,
    },
   
  
    address: {
        type: String,
    }


}, { timestamps: true })

const ProductScheme = mongoose.Schema({
    title: {
        type: String,
        required: true,


    },
    desc: {
        type: String,
        required: true,
        min: 0,
    },
    price: {
        type: Number,
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    img: {
        type: String,

    },
    color: {
        type: String,

    },
    size: {
        type: String,
    }


}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model("User", userScheme)
export const Product = mongoose.models.Product || mongoose.model("Product", ProductScheme)