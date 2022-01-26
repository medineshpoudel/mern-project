import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import detailImg from "../../img/showcase.jpg";
import { Edit, Delete } from "@material-ui/icons";
import Post from "../Home/Post";
import { useState, useEffect } from "react";
import { getPost } from "../../service/api";
const useStyles = makeStyles((theme) => ({
  showcase: {
    padding: "0 8rem",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    border: "1px solid black",
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 600,
    textAlign: "Center",
    margin: "50px 0px 10px 0",
  },
  mheading: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
const Detail = ({ match }) => {
  const classes = useStyles();
  const url = detailImg;
  const [Post, setPost] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, []);
  return (
    <Box className={classes.showcase}>
      <img src={url} className={classes.image} alt="detailImg"></img>
      <Box className={classes.icons}>
        <Link to="/update">
          <Edit className={classes.icon} color="primary" />
        </Link>
        <Delete className={classes.icon} color="error" />
      </Box>
      <Typography className={classes.heading}> Title of the Blog</Typography>
      <Box className={classes.mheading}>
        <Typography>
          {" "}
          Author : <span style={{ fontWeight: 600 }}>Dinesh Poudel</span>
        </Typography>
        <Typography style={{ marginLeft: "auto" }}>Aug 24 2021</Typography>
      </Box>
      <Typography> This is a blog from dinesh poudel</Typography>
    </Box>
  );
};
export default Detail;
