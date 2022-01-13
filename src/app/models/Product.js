const mongoose = require("mongoose");
const productImageSchema = new mongoose.Schema({
   image: { type: String, required: true },
   featured: { type: Boolean },
});
const productSchema = new mongoose.Schema({
   name: { type: String, required: true },
   price: { type: Number, required: true },
   productType: { type: String, required: true },
   productImage: {
      productImageSchema,
   },
   condition: { type: String, required: true },
   description: { type: String, required: true },
   sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
   },
   dateCreated: { type: Date, default: () => Date.now() },
   inventory: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
