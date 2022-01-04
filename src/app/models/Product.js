import { Schema, model } from "mongoose";
const productImageSchema = new Schema({
   image: { type: String, required: true },
   featured: { type: Boolean },
});
const productSchema = new Schema({
   name: { type: String, required: true },
   price: { type: Number, required: true },
   productType: { type: String, required: true },
   productImage: {
      productImageSchema,
      required: true,
   },
   condition: { type: String, required: true },
   description: { type: String, required: true },
   sellerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
   dateCreated: { type: Date, required: true, default: () => Date.now() },
   inventory: { type: Number, required: true },
});

export default model("Product", productSchema);
