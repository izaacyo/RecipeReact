import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from "react-router-dom";
import RecipeSingle from '../Recipes/RecipeSingle';
import RecipeCard from '../Recipes/RecipesCard';





function Search(props) {
    return (
        <div id="search">
            <input type="text" onChange={props.search} placeholder="Search recipes" />
        </div>
    );
}


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState("");

    const searchValueHandler = (e) => {
        setSearchRecipe(e.target.value);
        console.log(searchRecipe);


    }

    useEffect(() => {
        axios
            .get("http://localhost:3002/recipes")
            .then(((res) => setRecipes(res.data)));
    }, []);


    const filteredRecipes = recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchRecipe.toLowerCase());
    })

    const recipeList = filteredRecipes.map((recipe) => {

        return (
            <RecipeCard
                key={recipe.id}
                name={recipe.name}
                difficulty={recipe.difficulty}
                time={recipe.time}
                portions={recipe.portions}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                id={recipe.id}

            />
        )
    })

    return (

        <div className="recipes">
            <Switch>
                <Route path="/recipes" exact>
                    <div className="card2">
                        <h1>Recipe page</h1>
                        <Search search={searchValueHandler} />
                        <div className="filteredRecipes">{recipeList}</div>
                    </div>
                    <div className="recipelistlist"></div>
                </Route>
                <Route path="/recipes/:id">
                    <RecipeSingle />
                </Route>
            </Switch>
        </div>
    );
};


export default Recipes;