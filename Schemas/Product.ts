import { Schema, model, Document, Number, AnyObject } from "mongoose";
import { User } from "./User";
import { ProductImageModel, ProductImage } from "./ProductImages";
interface Product extends Document {
   name: string;
   price: number;
   productType: string;
   productImage: ProductImage;
   condition: string;
   description: string;
   sellerId: User["_id"];
   dateCreated: Number;
   inventory: number;
}

const ProductSchema = new Schema<Product>({
   name: { type: String, required: true },
   price: { type: Number, required: true },
   productType: { type: String, required: true },
   productImage: {
      ProductImageModel,
      required: true,
   },
   condition: { type: String, required: true },
   description: { type: String, required: true },
   sellerId: { type: String, required: true },
   dateCreated: { type: Date, required: true, default: () => Date.now() },
   inventory: { type: Number, required: true },
});

const ProductModel = model<Product>("Product", ProductSchema);
export { ProductModel, Product };
