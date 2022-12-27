import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Orange from "../../assets/LOGO.png";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import banana from "../../assets/banana.jpg";
import apricot from "../../assets/apricot.jpg";
import apple from "../../assets/apple.jpg";
import { useEffect } from "react";
import { useState } from "react";

function Slicker() {
    const [item, setItem] = useState([]);
    useEffect(() => {
        const axios = require("axios");
        axios
            .get("https://fakestoreapi.com/products/")
            .then(function (response) {
                setItem(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    console.log(item, "slick item");
    SwiperCore.use([Autoplay]);
    return (
        <>
            <MainDiv>
                <Wrapper>
                    <TopContainer>
                        <TopHead>Top Items!</TopHead>
                    </TopContainer>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 500,
                        }}
                    >
                        {item.map((ite) => {
                            return (
                                <>
                                    <SwiperSlide>
                                        <MainContainer>
                                            <ImageContainer>
                                                <Img src={apple} />
                                            </ImageContainer>
                                        </MainContainer>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <MainContainer>
                                            <ImageContainer>
                                                <Img src={apricot} />
                                            </ImageContainer>
                                        </MainContainer>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <MainContainer>
                                            <ImageContainer>
                                                <Img src={banana} />
                                            </ImageContainer>
                                        </MainContainer>
                                    </SwiperSlide>
                                </>
                            );
                        })}
                    </Swiper>
                </Wrapper>
            </MainDiv>
        </>
    );
}
const SaleContainer = styled.div`
    background-color: grey;
    width: 15%;
    position: absolute;
    top: 0px;
`;
const SalePara = styled.p``;
const MainContainer = styled.div`
    position: relative !important;
    width: 70% !important;
    border-radius: 5px !important;
    @media (max-width: 480px) {
    }
`;

const TopContainer = styled.div`
    text-align: center;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 30px;
`;
const TopHead = styled.h2`
    margin-bottom: 20px;
`;
const TopPara = styled.p``;
const MainDiv = styled.div`
    padding: 30px 0;
`;
const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
`;
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
