import React from "react";
import RecipeCard from "./RecipesCard";

const RecipesList = ({ recipes }) => {
    return recipes.map((recipe) => {
        const props = {
            name: recipe.name,
            id: recipe.id,
            time: recipe.time,
            difficulty: recipe.difficulty,
            image: recipe.image
        };
        return <RecipeCard key={recipe.id} {...props} />;
    });

};
;




export default RecipesList;
