import "dotenv/config";
import express from "express";
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({message: "Bienvenidos a la API REST"});
});

import productsRouter from './src/routes/products.router.js'
app.use("/api",productsRouter);

import authRouter from './src/routes/auth.router.js';
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
