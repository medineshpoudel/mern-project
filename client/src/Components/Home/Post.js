import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import descriptiomImg from "../../img/sports.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  postCard: {
    height: 400,
    margin: "1rem 1.25rem",
    border: "1px solid rgba(224,224,224,1)",
    borderRadius: 10,

    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "&>*": {
      padding: "0 5px 5px 5px ",
    },
  },
  postImg: {
    height: 170,
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0 ",
  },
  text: {
    fontSize: 12,
    color: "#878787",
  },
  heading: {
    fontWeight: "bold",
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
  },
  btn: {
    background: "rgba(93, 170, 229, 1)",
    borderRadius: "10px",
    margin: "1rem",
    padding: "0.75 1.75rem",
  },
});
const Post = ({ post }) => {
  const classes = useStyles();
  const url = post.picture || descriptiomImg;
  return (
    <>
      <Box className={classes.postCard}>
        <img className={classes.postImg} src={url} alt="description"></img>
        <Typography className={classes.text}>{post.categories}</Typography>
        <Typography className={classes.heading}>{post.title}</Typography>
        <Typography className={classes.text}>
          Author: {post.username}
        </Typography>
        <Typography className={classes.wordBreak}>
          {post.description}
        </Typography>
        <Link
          to={`/details/${post._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button className={classes.btn}>Read More</Button>
        </Link>
      </Box>
    </>
  );
};
export default Post;
