import { Schema, model } from "mongoose";

const cartSchema = new Schema({
   orderItem: { type: Schema.Types.ObjectId, ref: "Order", required: true },
   totalCost: { type: Number, required: true },
});

export default model("Cart", cartSchema);
