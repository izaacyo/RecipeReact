import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"


const Home = () => {

    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-60"
                        src="https://source.unsplash.com/1600x400/?salad
                        "
                        alt="Feel"
                    />
                    <Carousel.Caption>
                        <h3>Feel</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-60"
                        src="https://source.unsplash.com/1600x400/?vegetables
                        "
                        alt="Taste"
                    />
                    <Carousel.Caption>
                        <h3>Taste</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-60"
                        src="https://source.unsplash.com/1600x400/?fruits
                        "
                        alt="Live"
                    />
                    <Carousel.Caption>
                        <h3>Live</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="main_description">
                <p>
                    While most meals are improved by the addition of a fresh, crisp green salad, these salad recipes prove that it can be so much more than just a healthy side dish. Salad can be a thing of beauty—a colorful, bountiful platter of seasonal produce, tossed with a homemade salad dressing, maybe a protein added to transform your salad into dinner. From hearty cobb salad recipes to easy summer salad recipes, light and healthy salad recipes to wintery salads loaded with root veggies, we’ve rounded up all of our very best salad recipes, and—while we were at it—we’ve included our salad dressing recipes, too! Nutritious and delicious, we can say with confidence that there’s a salad recipe (or two, or three) that you’ll love in this mix.
                </p>
            </div>
        </>


    )
}

export default Home;