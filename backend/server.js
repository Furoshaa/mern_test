import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get('/products', async (req, res) => {
    const product = req.body; // User will send this data

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: 'Please fill all fields' });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create product : ", error.message);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

app.listen(5000, () => {
    connectDB();
    console.log('Server running on port 5000 from localhost');
});