import { Schema, model } from "mongoose";

const orderItemSchema = new Schema({
   productId: [{ type: Schema.Types.ObjectId, ref: "Product" }],
   quantity: { type: Number, required: true },
});

export default model("OrderItem", orderItemSchema);
