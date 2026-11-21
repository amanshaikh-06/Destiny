const mongoose = require("mongoose"); // Import Mongoose to connect MongoDB
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default:
        "https://awoiaf.westeros.org/thumb.php?f=Ted_Nasmith_A_Song_of_Ice_and_Fire_Winterfell.jpg&width=800",
      set: (v) =>
        v === ""
          ? "https://awoiaf.westeros.org/thumb.php?f=Ted_Nasmith_A_Song_of_Ice_and_Fire_Winterfell.jpg&width=800"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
