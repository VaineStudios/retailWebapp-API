const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
   title: { type: String, required: true },
   body: { type: String, required: true },
   flag: { type: Boolean, required: true },
   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Comment", commentSchema);
