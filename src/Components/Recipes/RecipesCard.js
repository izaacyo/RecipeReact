import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";


const RecipeCard = ({ name, time, difficulty, id }) => {

    return (
        <div className="card">
            <Card border="warning" style={{ width: "30rem" }}>
                <Card.Title>
                    <h2>{name}</h2>

                </Card.Title>
                <Card.Text>{time}</Card.Text>
                <Card.Text>{difficulty}</Card.Text>
                <Card.Text>
                    <Link to={`/recipes/${id}`}>
                        <h5>Read more</h5>
                    </Link>
                </Card.Text>
            </Card>
        </div >
    );
};



export default RecipeCard;
