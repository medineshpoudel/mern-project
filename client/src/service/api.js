//
import axios from "axios";
const URL = "http://localhost:8000";
export const PostSave = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  } catch (err) {
    console.log("error while fetching data fomr the API", err);
  }
};
export const GetPosts = async (posts) => {
  try {
    let response = await axios.get(`${URL}/posts`, posts);
    return response.data;
  } catch (err) {
    console.log("error while calling GetAllPOsts API", err);
  }
};
export const getPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);
    return response.data;
  } catch (err) {
    console.log("error while calling getPost api", err);
  }
};
