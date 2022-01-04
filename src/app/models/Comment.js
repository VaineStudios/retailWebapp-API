import { Schema, model } from "mongoose";

const commentSchema = new Schema({
   title: { type: String, required: true },
   body: { type: String, required: true },
   flag: { type: Boolean, required: true },
   userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default model("Comment", commentSchema);
