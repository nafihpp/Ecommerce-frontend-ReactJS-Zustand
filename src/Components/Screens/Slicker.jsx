import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Orange from "../../assets/fruit.webp";
import styled from "styled-components";

function Slicker() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
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
        <>
            <MainDiv>
                <Wrapper>
                    <TopContainer>
                        <TopHead>Top Items</TopHead>
                        <TopPara>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Illo eveniet quae, ipsa sequi doloribus
                            repudiandae iste perferendis ad debitis expedita,
                            fugiat ipsum saepe! Natus velit, deleniti ducimus
                            sit officiis vitae!
                        </TopPara>
                    </TopContainer>
                    <Sliders {...settings}>
                        <MainContainer>
                            <ImageContainer>
                                <Img src={Orange} />
                            </ImageContainer>
                        </MainContainer>
                        <MainContainer>
                            <ImageContainer>
                                <Img src={Orange} />
                            </ImageContainer>
                        </MainContainer>
                        <MainContainer>
                            <ImageContainer>
                                <Img src={Orange} />
                            </ImageContainer>
                        </MainContainer>
                        <MainContainer>
                            <ImageContainer>
                                <Img src={Orange} />
                            </ImageContainer>
                        </MainContainer>
                        <MainContainer>
                            <ImageContainer>
                                <Img src={Orange} />
                            </ImageContainer>
                        </MainContainer>
                        <MainContainer>
                            <ImageContainer>
                                <Img src={Orange} />
                            </ImageContainer>
                        </MainContainer>
                        <MainContainer>
                            <ImageContainer>
                                <Img src={Orange} />
                            </ImageContainer>
                        </MainContainer>
                        <MainContainer>
                            <ImageContainer>
                                <Img src={Orange} />
                            </ImageContainer>
                        </MainContainer>
                        <MainContainer>
                            <ImageContainer>
                                <Img src={Orange} />
                            </ImageContainer>
                        </MainContainer>
                        <MainContainer>
                            <ImageContainer>
                                <Img src={Orange} />
                            </ImageContainer>
                        </MainContainer>
                    </Sliders>
                </Wrapper>
            </MainDiv>
        </>
    );
}
const MainContainer = styled.div`
    background: #e2e2ea;
    height: 250px;
    width: 80% !important;
    border-radius: 6px;
    overflow: hidden;
    display: flex !important;
    justify-content: center !important;
    @media (max-width: 480px) {
        height: 150px;
    }
`;

const TopContainer = styled.div`
    text-align: center;
    width: 70%;
`;
const TopHead = styled.h2``;
const TopPara = styled.p``;
const MainDiv = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const Wrapper = styled.div``;
const Sliders = styled(Slider)`
    display: flex !important;
    justify-content: space-between !important;
    @media all and (max-width: 680px) {
    }
`;
const ImageContainer = styled.div`
    width: 100%;
    margin-top: 20px !important;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;

export default Slicker;
