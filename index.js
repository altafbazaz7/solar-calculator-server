import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import appRouter from "./router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

if (!MONGODB_USERNAME || !MONGODB_PASSWORD) {
  console.error("MongoDB username or password is not set.");
  process.exit(1);
}

const MONGODB_URI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.h5qdtmi.mongodb.net/solar-calculator`;

mongoose
  .connect(MONGODB_URI, {
    // @ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


app.use(bodyParser.json());
app.use("/", appRouter);



app.get("/", (req, res) => {
  res.send("endpoint testing !!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
