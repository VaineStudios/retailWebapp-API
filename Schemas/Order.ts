import { Schema, model, Document } from "mongoose";
import { OrderItem } from "./OrderItem";
interface Order extends Document {
   orderItems: [OrderItem["_id"]];
   dateCreated: Number;
   total: number;
}

const orderSchema = new Schema<Order>({
   orderItems: [{ type: Schema.Types.ObjectId, ref: "OrderItem" }],
   dateCreated: { type: Date, immutable: true, default: () => Date.now() },
   total: { type: Number, required: true },
});

const OrderModel = model<Order>("Order", orderSchema);
export { OrderModel, Order };
