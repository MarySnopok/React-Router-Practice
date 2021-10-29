import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AlbumList } from "./code/AlbumList";
import { AlbumDetail } from "./code/AlbumDetail.js";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <h1>"The Weeknd" Albums</h1>
          <AlbumList />
        </Route>
        <Route path="/albums/:albumId">
          <AlbumDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
