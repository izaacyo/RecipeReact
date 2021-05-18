import React from "react";
import RecipeCard from "../Recipes/RecipesCard";
import RecipesList from "../Recipes/RecipeList";
import RecipeSingle from "../Recipes/RecipeSingle";
import Recipes from "./Recipes"


const Home = () => {
    return (
        <div className="home">
            <div className="card">
                <section id="pins">
                    <div className="pin"></div>
                    <div className="pin"></div>
                </section>

                <h1>Home page</h1>
                <p>Welcome to find your perfect recipes</p>
            </div>
        </div>

    )
}

export default Home;