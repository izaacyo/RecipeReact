import React, { useState } from "react";
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



    const [instructions, setInstructions] = useState([
        { id: 1, step: "", instructions: "" }
    ])

    const [ingredients, setIngredients] = useState([
        { id: 1, quantity: "", ingredients: "" },
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
        axios.post("http://localhost:3002/recipes/", newRecipe);
        e.target.reset();

    };

    return (

        <div>

            <Form onSubmit={submitData}>
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control id="name" type="text" name="name" onChange={changeRecipe} placeholder="eg: Caesar Salad" required />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="time">Cooking Time (in Minutes)</Form.Label>
                    <Form.Control id="time" type="number" name="time" onChange={changeRecipe} placeholder="ex: 30" required />
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
                    <p>Recipe Ingredients</p>
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

                    <Button variant="outline-success" onClick={addMore}>
                        add more
    </Button>
                </div>
                <div>
                    <p>Recipe Instructions</p>
                    {instructions.map((_, i) => {
                        return (
                            <div key={i}>
                                <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label htmlFor="step">Step</Form.Label>
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

                    <Button variant="outline-success" onClick={addMoreStep}>
                        Add step
    </Button>
                </div>
                <Button type="submit" variant="success" value="Send data" >
                    Post recipe
        </Button>
            </Form>
        </div>
    );
};



export default AddRecipe