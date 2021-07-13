import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../assets/css/Home.css";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper home__image" style={{ marginTop: '0', boxShadow: 'none' }}>
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="https://entrackr.com/wp-content/uploads/2020/10/flipkart.jpg.webp" />
                </div>
                <div>
                    <img src="https://entrackr.com/wp-content/uploads/2020/10/flipkart.jpg.webp" />

                </div>
                <div>
                    <img src="https://entrackr.com/wp-content/uploads/2020/10/flipkart.jpg.webp" />
                </div>
            </Carousel>
        </div>
    );
}
