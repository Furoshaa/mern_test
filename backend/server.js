import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); //allow use to use json data into request.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log('Server running on port ' + PORT + ' from localhost');
});