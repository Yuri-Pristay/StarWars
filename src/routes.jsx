import React, { Component } from 'react';
import {Switch} from "react-router-dom";
import Star_wars from "./star_wars.jsx";
import {BrowserRouter} from "react-router-dom";
import movieDetails from "./movieDetails.jsx";
import { Route, Redirect } from 'react-router'

const Routes = ()=>(
    <BrowserRouter>
      <Switch>
        <Route path="/movies" exact component={Star_wars}></Route>
        <Route path="/movies/:id" exact component={movieDetails}></Route>
        <Redirect path="*" to="/movies" />
      </Switch>
    </BrowserRouter>
);

export default Routes;