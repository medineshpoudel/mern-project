import React from "react";
import { Box } from "@material-ui/core";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import Detail from "./Components/Posts/Detail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePost from "./Components/Posts/CreatePost";
import UpdatePost from "./Components/Posts/UpdatePost";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Box style={{ marginTop: 70 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Detail} />
          <Route exact path="/create" component={CreatePost} />
          <Route exact path="/update" component={UpdatePost} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
