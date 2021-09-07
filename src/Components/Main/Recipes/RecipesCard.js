import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";


function RecipeCard({ id, name, time, difficulty, image }) {
    let { url } = useRouteMatch();

    return (
        <div>
            <div className="card">
                <Card border="warning" style={{ width: "30rem" }}>
                    <Card.Title>
                        <h2>{name}</h2>

                    </Card.Title>
                    <Card.Text>{time}</Card.Text>

                    <Card.Text>{difficulty}</Card.Text>
                    <Card.Text>
                        <Card.Img variant="top" src={image} alt={name} />


                        <Link to={`${url}/${id}`} >
                            <button className="readMore">Read more</button>
                        </Link>
                    </Card.Text>
                </Card>


            </div>




        </div>
    );
};



export default RecipeCard;
