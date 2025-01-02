import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Add create at and update at fields
});

const Product = mongoose.model('Product', productSchema);
// Mongoose will automaticlly take "Product" and convert it to "products" and look for the collection in the database. So it make it lowercase and pluralize it.

export default Product;