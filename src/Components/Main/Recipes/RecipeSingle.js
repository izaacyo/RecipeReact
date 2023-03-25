import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "../Style/SingleRecipe.css"

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from 'react-bootstrap';


const RecipeSingle = () => {
    const [recipe, setRecipe] = useState();
    //  const [ingredients, setIngredients] = useState([]);

    let { id } = useParams();
    let history = useHistory();



    useEffect(() => {

        const getRecipe = async () => {
           // const resp = await axios.get("https://641f04e4f90d4f433e41309a--remarkable-licorice-7bd94f.netlify.app/recipe/find/" + id)
            const resp = await axios.get("https://abalone-bird-coyote.glitch.me/recipes" + id)
            const data = resp.data;
            setRecipe(data);
            //   setIngredients(data.ingredients)
        }
        getRecipe()

    }, [id]
    );


    let recipeData = undefined;

    if (!recipe) {
        recipeData = <h1>Loading...</h1>
    }


    if (recipe) {

        const listIngredients = (ingredients) =>
            ingredients.map((item) => {
                return (
                    <div key={item.id} >
                        <p>
                            {item.quantity} {item.name}
                        </p>
                    </div>
                )
            })

        const listInstructions = (instructions) =>
            instructions.map((item) => {
                return (
                    <div key={item.id}>
                        <p className="instructions_text">
                            {item.step} {item.instructions}
                        </p>
                    </div>
                )
            })



        recipeData = (
            < div className="card" >
                <Card border="warning" style={{ width: "30rem" }}>
                    <Card.Title>
                        <h2>{recipe.name}</h2>
                    </Card.Title>

                    <Card.Text>Time: {recipe.time}</Card.Text>
                    <Card.Text>Difficulty Level:{recipe.difficulty}</Card.Text>
                    <Card.Text>Portions:{recipe.portions}</Card.Text>
                    <div className="img-container">
                        <img src={recipe.image} alt="" />
                    </div>
                    <h4>Ingredients:</h4>
                    <ul> {listIngredients(recipe.ingredients)}
                    </ul>
                    <h4>Instructions:</h4>
                    <ul> {listInstructions(recipe.instructions)}
                    </ul>


                    <Button onClick={() => history.goBack()}>Back to recipes list</Button>
                </Card>
            </div >
        )

    } else {
        recipeData = <p>Loading..</p>;
    }


    return (
        <div>
            {recipeData}
        </div>)
}




export default RecipeSingle