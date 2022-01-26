import { Grid } from "@material-ui/core";
import Categories from "./Categories";
import Posts from "./Posts";
import Showcase from "./Showcase";
import Detail from "../Posts/Detail";

const Home = () => {
  return (
    <>
      <Showcase />
      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
          <Categories />
        </Grid>
        <Grid item container lg={10} xs={12} sm={10}>
          <Posts />
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
