const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
   orderItem: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
   totalCost: { type: Number, required: true },
});
const userSchema = new mongoose.Schema({
   fname: { type: String, required: true },
   lname: { type: String, required: true },
   username: { type: String, required: true },
   email: { type: String, required: true, lowercase: true, unique: true },
   profileImg: { type: String, required: true },
   dateCreated: { type: Date, default: () => Date.now() },
   isSeller: { type: Boolean, required: true },
   // cartId: {
   //    type: mongoose.Schema.Types.ObjectId,
   //    ref: "Cart",
   //    required: true,
   // },
   cart: { type: cartSchema },
   orderNum: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
   },
});

module.exports = mongoose.model("User", userSchema);
