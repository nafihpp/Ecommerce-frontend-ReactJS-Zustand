import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Orange from "../../assets/WebHomeBannerSlider.png";

function SpotLightCarousal() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            <div>
                <img
                    src={Orange}
                    alt="orange"
                    style={{ display: "block", width: "100%" }}
                />
            </div>
            <div>
                <img
                    src={Orange}
                    alt="orange"
                    style={{ display: "block", width: "100%" }}
                />
            </div>
            <div>
                <img
                    src={Orange}
                    alt="orange"
                    style={{ display: "block", width: "100%" }}
                />
            </div>
            <div>
                <img
                    src={Orange}
                    alt="orange"
                    style={{ display: "block", width: "100%" }}
                />
            </div>
            <div>
                <img
                    src={Orange}
                    alt="orange"
                    style={{ display: "block", width: "100%" }}
                />
            </div>
            <div>
                <img
                    src={Orange}
                    alt="orange"
                    style={{ display: "block", width: "100%" }}
                />
            </div>
        </Slider>
    );
}

export default SpotLightCarousal;
