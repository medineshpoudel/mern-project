import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  picture: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
  },
});
const Post = mongoose.model("Posts", postSchema);
export default Post;
