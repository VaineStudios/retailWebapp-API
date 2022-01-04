import { Schema, model } from "mongoose";

const orderSchema = new Schema({
   orderItems: [{ type: Schema.Types.ObjectId, ref: "OrderItem" }],
   dateCreated: { type: Date, immutable: true, default: () => Date.now() },
   total: { type: Number, required: true },
});

export default model("Order", orderSchema);
