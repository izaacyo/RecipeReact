import React from "react";
import Home from "./Pages/Home"
import { Route, Switch } from "react-router";
import Recipes from "./Pages/Recipes"
import addRecipe from "./Pages/AddRecipe";


const Main = () => {
    return (
        <div id="main">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/recipes" component={Recipes} />
                <Route path="/addRecipe" component={addRecipe} />
            </Switch>
        </div>
    );
};

export default Main;
