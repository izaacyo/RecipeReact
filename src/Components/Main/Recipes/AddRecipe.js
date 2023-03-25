import React, { useState } from "react";
import "../Style/Form.css"
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const AddRecipe = () => {

    const [newRecipe, setNewRecipe] = useState({

        name: "",
        time: "",
        difficulty: "",
        portions: "",
        ingredients: [],
        instructions: [],
    })

    const [ingredients, setIngredients] = useState([
        { id: 1, name: "", quantity: "" },
    ])

    const [instructions, setInstructions] = useState([
        { id: 1, step: "", instructions: "" }
    ])



    const changeRecipe = (e) => {
        setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
    };

    const changeInstructions = (e, i) => {
        const { name, value } = e.target;
        const list = [...instructions];
        list[i][name] = value;
        setInstructions(list);
        setNewRecipe({ ...newRecipe, instructions: instructions });
    };

    const changeIngredients = (e, i) => {
        const { name, value } = e.target;
        const list = [...ingredients];
        list[i][name] = value;
        setIngredients(list);
        setNewRecipe({ ...newRecipe, ingredients: ingredients });
    };



    const addMore = (e, i) => {
        e.preventDefault();
        const newRecipeIngredient = { id: ingredients.length + 1, name: "", quantity: "" };
        setIngredients([...ingredients, newRecipeIngredient]);
    };

    const addMoreStep = (e, i) => {
        e.preventDefault();
        const newRecipeInstructions = { id: instructions.length + 1, step: "", instruction: "" };
        setInstructions([...instructions, newRecipeInstructions]);
    };

    const submitData = (e) => {
        e.preventDefault();
        // axios.post("https://secure-earth-77311.herokuapp.com/recipe/add", newRecipe)
         axios.post("https://abalone-bird-coyote.glitch.me/recipes", newRecipe)
            .then(() => {
                e.target.reset();
                window.scrollTo(0, 0)
            });

    };


    return (

        <div>

            <Form onSubmit={submitData}>
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control id="name" type="text" name="name" onChange={changeRecipe} placeholder="eg: Caesar Salad" required />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="time">Cooking Time</Form.Label>
                    <Form.Control id="time" type="text" name="time" onChange={changeRecipe} placeholder="ex: 30" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="portions">Portions</Form.Label>
                    <Form.Control id="portions" type="number" name="portions" onChange={changeRecipe} placeholder="ex: 2" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="difficulty">Difficulty</Form.Label>
                    <Form.Control id="difficulty" type="text" name="difficulty" onChange={changeRecipe} placeholder="Easy/Medium/Hard" required />
                </Form.Group>
                <div>
                    <div className="ingredients-title">Recipe Ingredients</div>
                    {ingredients.map((_, i) => {
                        return (
                            <div key={i}>
                                <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label htmlFor="name">Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="name"
                                                name="name" required
                                                onChange={(e) => changeIngredients(e, i)}
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Label htmlFor="quantity">Quantity</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="quantity"
                                                name="quantity" required
                                                onChange={(e) => changeIngredients(e, i)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </div>
                        );
                    })}

                    <Button className="form-button" variant="outline-success" onClick={addMore}>
                        Add more
                    </Button>
                </div>
                <div>
                    <div className="instructions-title">Recipe Instructions</div>
                    {instructions.map((_, i) => {
                        return (
                            <div key={i}>
                                <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label htmlFor="step">Step number:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="step"
                                                name="step" required
                                                onChange={(e) => changeInstructions(e, i)}
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Label htmlFor="instructions">Instructions</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="instructions"
                                                name="instructions" required
                                                onChange={(e) => changeInstructions(e, i)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </div>
                        );
                    })}


                    <Button className="form-button" variant="outline-success" onClick={addMoreStep}>
                        Add step
                    </Button>
                </div >

                <div className="Image">
                    <p>It would be nice to also see the salad, right?
                        Add the link of the image here:</p>
                </div>
                <Form.Group>
                    <Form.Label htmlFor="">Image</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="image"
                        onChange={changeRecipe}
                    />
                </Form.Group>

                <Button className="submit-button" type="submit" variant="success" value="Send data" >
                    Post recipe
                </Button>
            </Form>
        </div>
    );
};



export default AddRecipe