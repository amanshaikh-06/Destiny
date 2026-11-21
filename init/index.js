const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// MongoDB connection URL (database name: destiny)
let MONGO_URL = "mongodb://127.0.0.1:27017/destiny";

// Call the main function to connect to the database
main()
  .then(() => {
    // Runs when the database connection is successful
    console.log("Connected to DB");
  })
  .catch((err) => {
    // Displays an error if the database connection fails
    console.log(err);
  });

// Async function to connect to MongoDB
async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
