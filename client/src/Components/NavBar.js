import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  navbar: {
    background: "#ffffff",
    color: "black",
  },
  navItem: {
    justifyContent: "center",
    "&>*": {
      padding: "1.5rem",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});
const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.navbar}>
        <Toolbar className={classes.navItem}>
          <Link to="/" className={classes.link}>
            <Typography>Home</Typography>
          </Link>
          <Link to="/details" className={classes.link}>
            <Typography> Detail</Typography>
          </Link>
          <Link to="/about" className={classes.link}>
            <Typography>About</Typography>
          </Link>
          <Link to="/login" className={classes.link}>
            <Typography>Login</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavBar;
