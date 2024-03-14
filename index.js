import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from './Routes/AuthRoute.js'; 
import UserRoute from './Routes/UserRoute.js'; 
import PostRoute from './Routes/PostRoute.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const uri = 'mongodb+srv://yuvaraj:yuvaraj123@mohanmavan.qi78uk0.mongodb.net/Socialmedia?retryWrites=true&w=majority&appName=mohanmavan';


app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected successfully");
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});



app.use('/auth', AuthRoute); 
app.use('/user', UserRoute); 
app.use('/post', PostRoute); 
