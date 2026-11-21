const express = require("express"); // Import Express.js
const app = express(); // Create an Express application

const path = require("path");

const methodOverride = require("method-override");

const mongoose = require("mongoose"); // Import Mongoose to connect MongoDB

const Listing = require("./models/listing"); //Import listing file from model folder

const ejsMate = require("ejs-mate"); // Require ejs-mate to enable layouts, partials, and boilerplate templates in EJS

app.use(express.urlencoded({ extended: true })); // To read data sent from HTML forms
app.use(methodOverride("_method"));

// setting view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// use ejs-locals for all ejs templates:
app.engine("ejs", ejsMate);

// for static files
app.use(express.static(path.join(__dirname, "/public")));

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

// 1. Define the GET route for the root URL (/)
app.get("/", (req, res) => {
  // Send a response to the browser
  res.send("HEy! Where are you Going ? What's the Plan...?");
});

// 2. Testing / New Route
/*

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "Point Villa",
    description: "On the Hills...",
    price: 2500,
    location: "Mahabaleshwar,Maharashtra",
    country: "India",
  });

  await sampleListing.save();
  console.log("Sample was saved");
  res.send("Successfully tested");
});

*/

// 3. Index Route

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// 4. New Route --> create new listings
app.get("/listings/new", async (req, res) => {
  res.render("listings/new.ejs");
});

// 5. Show Route

app.get("/listings/:id", async (req, res) => {
  let { id } = req.params; // Get the id from the URL parameter
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// 6. create route

app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

//  7. Edit & Update Route

// Edit Route

app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params; // Get the id from the URL parameter
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

// Update Route

app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

// 8. Delete Route

app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deleted = await Listing.findByIdAndDelete(id);
  console.log(deleted);
  res.redirect("/listings");
});

// Start the server on port 8080
app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
