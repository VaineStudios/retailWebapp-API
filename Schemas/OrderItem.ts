import { Schema, model, Document } from "mongoose";
import { Product } from "./Product";
interface OrderItem extends Document {
   productId: Product["_id"];
   quantity: number;
}

const orderItemSchema = new Schema<OrderItem>({
   productId: { type: Schema.Types.ObjectId, required: true, ref: "Product" },
   quantity: { type: Number, required: true },
});

const OrderItemModel = model<OrderItem>("OrderItem", orderItemSchema);
export { OrderItemModel, OrderItem };
