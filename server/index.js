import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/auth-routes.js";
import callRoutes from "./routes/call-routes.js";

const app = express();
dotenv.config();

const corsOptions ={
  origin:'*', 
  credentials:true, 
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/auth", userRoutes);
app.use('/calls',callRoutes)

mongoose
  .connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log(`Server is connected at ${process.env.PORT}`))
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));

app.use((err, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Somthing Went Wrong!!";
  return res.status(status).json({
    status: false,
    status,
    message,
  });
});
