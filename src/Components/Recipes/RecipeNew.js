import React, { useState, useEffect } from 'react';
import axios from "axios"
import RecipeList from "./Recipes/RecipeList"
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';


const SearchBox = ({ search }) => {
    return (
        <div >
            <input type="text" className="searchBox" onChange={search} placeholder="Search recipes"></input>
        </div>
    );
};


const Main = () => {

    const [recipes, setRecipes] = useState([]);
    /* const [searchInput, setSearchInput] = useState("");
 
     const searchValueHandler = (event) => {
         setSearchInput(event.target.value);
     }; */

    useEffect(() => {
        axios
            .get("http://localhost:3000/home")
            .then((res => setRecipes(res.data)));

    }, [])

    const filteredRecipes = recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    const recipeList = filteredRecipes.map((recipe) => {

        return (
            <RecipesCard
                key={recipe.id}
                name={recipe.Name}
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
            <BrowserRouter>
                <Switch>
                    <Route path="/Home" exact>
                        <div className="card2">
                            <h1>Recipe page</h1>
                            <SearchBox search={searchValueHandler} />
                        </div>
                    </Route>
                    <Route path="/recipes/:id">
                        <RecipeList recipes={recipes} />
                        <AddRecipe submit={recipeList} />

                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Main;