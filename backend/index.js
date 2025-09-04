import express from 'express';
import dotenv from 'dotenv';
import testRoutes from './routes/test.routes.js';
import connectDB from './db/connectdb.js';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();
connectDB();


const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(cookieParser());


app.use("/api",testRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
