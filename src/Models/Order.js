const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
   orderItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderItem" }],
   dateCreated: { type: Date, immutable: true, default: () => Date.now() },
   total: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
