import { Schema, model, Document } from "mongoose";
import { Order } from "./Order";
import { Cart } from "./Cart";
// start with an interface
interface User extends Document {
   fname: string;
   lname: string;
   username: string;
   email: string;
   profileImg: string;
   dateCreated: Number;
   cartId: Cart["_id"];
   orderNum: Order["_id"];
   isSeller: boolean;
}
// create a schema
const userSchema = new Schema<User>({
   fname: { type: String, required: true },
   lname: { type: String, required: true },
   username: { type: String, required: true },
   email: { type: String, required: true, lowercase: true, unique: true },
   profileImg: { type: String, required: true },
   dateCreated: { type: Date, immutable: true, default: () => Date.now() },
   cartId: { type: Schema.Types.ObjectId, required: false, ref: "Cart" },
   orderNum: { type: Schema.Types.ObjectId, required: false, ref: "Order" },
   isSeller: { type: Boolean, required: true },
});
// Create a model
const UserModel = model<User>("User", userSchema);
export { UserModel, User };
