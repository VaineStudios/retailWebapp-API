import { Schema, model, Document } from "mongoose";

interface ProductImage extends Document {
   image: string;
   featured: boolean;
}

const ProductImageSchema = new Schema<ProductImage>({
   image: { type: String, required: true },
   featured: { type: Boolean },
});

const ProductImageModel = model<ProductImage>(
   "ProductImage",
   ProductImageSchema
);
export { ProductImageModel, ProductImage };
