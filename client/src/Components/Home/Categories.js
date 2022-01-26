import { categories } from "../../Data/data";
import { Link } from "react-router-dom";
import {
  Button,
  makeStyles,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";

const useStyles = makeStyles({
  categoryBtn: {
    background: "rgba(93, 170, 229, 1)",
    borderRadius: "10px",
    margin: "1rem",
    padding: "0.75 1.75rem",
    width: "86%",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});
const Categories = () => {
  const classes = useStyles();
  return (
    <>
      <Link to="/create" className={classes.link}>
        <Button variant="contained" className={classes.categoryBtn}>
          Create Blog
        </Button>
      </Link>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>All Categories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow>
              <TableCell>{category} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default Categories;
