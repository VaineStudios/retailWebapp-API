const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
   orderItem: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
   totalCost: { type: Number, required: true },
});

module.exports = mongoose.model("Cart", cartSchema);
