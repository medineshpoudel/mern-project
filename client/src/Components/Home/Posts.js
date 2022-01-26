import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Post from "./Post";
import { GetPosts } from "../../service/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    const fetchData = async () => {
      let data = await GetPosts();
      console.log(data);
      setPosts(data);
    };
    fetchData();
  }, []);

  return posts.map((post) => (
    <Grid item lg={3} sm={4} xs={12}>
      <Post post={post} />
    </Grid>
  ));
};
export default Posts;
