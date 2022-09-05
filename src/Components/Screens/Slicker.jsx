import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Orange from "../../assets/fruit.webp";
import styled from "styled-components";

function Slicker() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <Sliders {...settings}>
                <div>
                    <ImageContainer>
                        <Img src={Orange} />
                    </ImageContainer>
                </div>
            </Sliders>
        </>
    );
}
const Sliders = styled(Slider)`
    width: 100% !important;
    @media all and (max-width: 680px) {
        padding-top: 60px !important;
    }
`;
const ImageContainer = styled.div``;
const Img = styled.img`
    display: block;
    width: 100%;
`;

export default Slicker;
