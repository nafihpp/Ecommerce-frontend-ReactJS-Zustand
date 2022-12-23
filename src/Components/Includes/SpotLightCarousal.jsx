import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Orange from "../../assets/WebHomeBannerSlider.png";
import Jumka from "../../assets/JumkaSlider.jpg";

function SpotLightCarousal() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2900,
        autoplaySpeed: 3900,
        cssEase: "linear",
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
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
        <Slider {...settings} style={{ padding: "124px 0 0 0" }}>
            <div>
                <img
                    src={Orange}
                    alt="orange"
                    style={{ display: "block", width: "100%" }}
                />
            </div>
            <div>
                <img
                    src={Jumka}
                    alt="orange"
                    style={{ display: "block", width: "100%" }}
                />
            </div>
        </Slider>
    );
}

export default SpotLightCarousal;
