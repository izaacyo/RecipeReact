import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, useRouteMatch } from "react-router-dom";


import Search from "../Recipes/Search";
import RecipesList from "../Recipes/RecipeList";
import RecipeSingle from "../Recipes/RecipeSingle"

import { Container, Figure } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";


const Recipes = () => {
    /*state for recipe to fetch info*/
    const [recipes, setRecipes] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState("");



    useEffect(() => {

        const getRecipes = async () => {
            const resp = await axios.get(" https://secure-earth-77311.herokuapp.com/recipe/all")
            const data = resp.data
            setRecipes(data)
        };
        getRecipes();
    }, []);


    const filteredRecipes = recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchRecipe.toLowerCase());
    })

    let { url } = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={url} exact>
                    <Container fluid className="text-center mx-auto mt-5">
                        <Figure>
                            <blockquote className="blockquote">
                                <p>Explore our garden's variety of choices </p>
                            </blockquote>
                            <FigureCaption className="blockquote-footer">
                                <cite title="source">Salads & Smiles</cite>
                            </FigureCaption>
                        </Figure>
                    </Container>

                    <Search
                        search={(e) => {
                            setSearchRecipe(e.target.value);
                        }}
                    />

                    <section className="recipes mb-5">
                        <RecipesList recipes={filteredRecipes} />
                    </section>
                </Route>
                <Route path={`${url}/:id`}>
                    <RecipeSingle />
                </Route>
            </Switch>
        </div>
    );
};


export default Recipes;