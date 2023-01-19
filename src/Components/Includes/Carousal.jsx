import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function carousal() {
    return (
        <OwlCarousel className="owl-theme" items={5} margin={4} nav={true}>
            <div className="item">Your Content1</div>
            <div className="item">Your Content2</div>
            <div className="item">Your Content3</div>
            <div className="item">Your Content2</div>
            <div className="item">Your Content3</div>
            <div className="item">Your Content1</div>
            <div className="item">Your Content2</div>
            <div className="item">Your Content3</div>
            <div className="item">Your Content2</div>
            <div className="item">Your Content3</div>
        </OwlCarousel>
    );
}

export default carousal;
