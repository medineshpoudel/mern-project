import Post from "../schema/postSchema.js";
export const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    post.save();
    console.log(req.body);
    res.status(200).json("new post create in the database successfully ");
  } catch (err) {
    res.status(500).json("error creating new post ");
  }
};
export const getAllPost = async (req, res) => {
  try {
    let posts = await Post.find({});
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json("error getting the posts form the databse", err);
  }
};
export const getPost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    res.status(500).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};
