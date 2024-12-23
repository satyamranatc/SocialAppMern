import express from "express";
import bodyParser from "body-parser";
import "dotenv/config"
import cors from "cors";

import connectDB from "./config/db.js";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/users",UserRoute);
app.use("/api/post",PostRoute);
connectDB()



const PORT = process.env.PORT || 5600;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


