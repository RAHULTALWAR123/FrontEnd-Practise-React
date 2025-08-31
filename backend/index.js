import express from 'express';
import testRoutes from './routes/test.routes.js';

const app = express();
const PORT = 5000;

app.use("/api",testRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
