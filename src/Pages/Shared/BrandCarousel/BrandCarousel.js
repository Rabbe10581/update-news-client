import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import apple from '../../../assets/brands/apple.jpg'
import laptop from '../../../assets/brands/laptop.jpg'

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={apple}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={laptop}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;