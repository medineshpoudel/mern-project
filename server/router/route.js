import express from "express";
import {
  createPost,
  getAllPost,
  getPost,
} from "../controller/postController.js";

const router = express.Router();
router.post("/create", createPost);
router.get("/posts", getAllPost);
router.get("/post:id", getPost);
export default router;
