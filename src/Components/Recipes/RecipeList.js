import React from "react";

const RecipesList = ({ recipe }) => {
    return (
        <main id="recipes">
            <div className="recipesList">
                {recipe.map((recipes) => {
                    return (
                        <div className="recipeCard">
                            <h2>{recipes.name}</h2>
                            <div className="cardText">
                                <p>Servings: {recipes.difficulty}</p>
                                <p>Cooking time: {recipes.time}</p>

                                <h4>Instructions:</h4>
                                <p>
                                    {recipes.instructions.map((item) => {
                                        return (
                                            <p>
                                                {item.step}
                                                <div className="item">
                                                    <ul>
                                                        <p>{item.instructions}</p>
                                                    </ul>
                                                </div>
                                            </p>
                                        );
                                    })}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};
;




export default RecipesList;
