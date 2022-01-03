import { Schema, model, Document } from "mongoose";

interface Cart extends Document {
   cartId: string;
   orderItem: string;
   totalCost: number;
}

const CartSchema = new Schema<Cart>({
   cartId: { type: String, required: true },
   orderItem: { type: String, required: true },
   totalCost: { type: Number, required: true },
});

const CartModel = model<Cart>("Cart", CartSchema);
export { CartModel, Cart };
