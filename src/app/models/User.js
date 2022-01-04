import { Schema, model } from "mongoose";

const userSchema = new Schema({
   fname: { type: String, required: true },
   lname: { type: String, required: true },
   username: { type: String, required: true },
   email: { type: String, required: true, lowercase: true, unique: true },
   profileImg: { type: String, required: true },
   dateCreated: { type: Date, default: () => Date.now() },
   isSeller: { type: Boolean, required: true },
   cartId: { type: Schema.Types.ObjectId, ref: "Cart", required: true },
   orderNum: { type: Schema.Types.ObjectId, ref: "Order", required: true },
});

export default model("User", userSchema);
