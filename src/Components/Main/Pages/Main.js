import React from "react";
import Home from "./Home"
import { Route, Switch } from "react-router";
import Recipes from "../Recipes/Recipes";
import addRecipe from "../Recipes/AddRecipe"


const Main = () => {
    return (
        <div id="main">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/recipe/all" component={Recipes} />
                <Route path="/recipe/add" component={addRecipe} />
            </Switch>
        </div>
    );
};

export default Main;
