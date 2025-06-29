// Database configuration file for a Node.js application using Mongoose
const mongoose = require("mongoose");

// Load environment variables from .env file
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
      console.log(err);
      process.exit(1); // Exit the process with failure
    });
};
