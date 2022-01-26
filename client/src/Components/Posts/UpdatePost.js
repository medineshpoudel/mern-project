import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import detailImg from "../../img/showcase.jpg";
const useStyles = makeStyles((theme) => ({
  showcase: {
    padding: "0 8rem",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },

  showcaseImg: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  text: {
    flex: 1,
    margin: "0 2rem",
    fontSize: "1.5rem",
  },
  textarea: {
    width: "100%",
    border: "1px solid red",
    borderRadius: 5,
    margin: "1rem 0",
    fontSize: "1.25rem",
    padding: "1rem",
    "&:focus-visible": {
      outline: "none",
    },
  },
}));

const UpdatePost = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.showcase}>
        <img src={detailImg} alt="showcase" className={classes.showcaseImg} />
        <FormControl className={classes.form}>
          <AddCircle fontSize="large" color="action" />
          <InputBase placeholder="Title" className={classes.text} />
          <Button variant="contained" color="secondary">
            Update
          </Button>
        </FormControl>
        <TextareaAutosize
          className={classes.textarea}
          minRows="5"
          minColumn="10"
          placeholder="Write Your Blog......"
        />
      </Box>
    </>
  );
};
export default UpdatePost;
