import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/JFpHj7d/K30-Splash.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Ful HD Camera</h5>
                        <p>have real cameras and take real pictures.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/n1K5TBN/image0011010x757.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Camera Expert Lens</h5>
                        <p>contortions are the product of the snapshot camera.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/NSHY9yY/F4r-Oftb1010x757.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>High Fliable Drone</h5>
                        <p>followed by panting photographers bearing elephantine cameras</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;