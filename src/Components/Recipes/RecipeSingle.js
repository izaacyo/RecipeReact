import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from 'react-bootstrap';
import axios from "axios";

const RecipeSingle = () => {
    const [recipe, setRecipe] = useState();
    let { id } = useParams();
    let history = useHistory();

    console.log("id is " + id);


    useEffect(() => {
        if (!recipe) {
            axios.get("http://localhost:3002/recipes/" + id)
                .then((res) => setRecipe(res.data));

        }

    });

    console.log("recipe", recipe)

    let recipeData = undefined;

    if (!recipe) {
        recipeData = <h1>Loading...</h1>
    }

    if (recipe) {
        recipeData = (
            < div className="card" >
                <Card border="warning" style={{ width: "30rem" }}>
                    <Card.Title>
                        <h2>{recipe.name}</h2>
                    </Card.Title>
                    <Card.Text>Time: {recipe.time}</Card.Text>
                    <Card.Text>Difficulty Level:{recipe.difficulty}</Card.Text>
                    <Card.Text>Portions:{recipe.portions}</Card.Text>
                    <h4>Ingredients:</h4>
                    <ul>
                        {recipe.ingredients.map((item) => {
                            return (
                                <div>
                                    <li>
                                        {item.name}
                                        {" "}
                                        {item.quantity}
                                    </li>

                                </div>)
                        })}
                    </ul>
                    <h3>Instructions</h3>
                    <ul>
                        {recipe.instructions.map((item) => {
                            return (
                                <div>
                                    <li>
                                        {item.step}
                                        {" "}
                                        {item.instructions}
                                    </li>
                                </div>)
                        })}
                    </ul>
                    <Button onClick={() => history.goBack()}>Back to homepage</Button>
                </Card>
            </div >
        )
    }


    return (
        <div>
            {recipeData}
        </div>)
}




export default RecipeSingle