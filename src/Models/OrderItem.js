const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
   productId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
   quantity: { type: Number, required: true },
});

module.exports = mongoose.model("OrderItem", orderItemSchema);
