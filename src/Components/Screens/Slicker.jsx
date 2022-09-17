import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Orange from "../../assets/LOGO.png";
import styled from "styled-components";

function Slicker() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
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
                            <SaleContainer>
                                <SalePara>Sale</SalePara>
                            </SaleContainer>
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
const SaleContainer = styled.div`
    background-color: grey;
    width: 15%;
    position: absolute;
    top: 0px;
`;
const SalePara = styled.p``;
const MainContainer = styled.div`
    position: relative !important;
    background: black;
    height: 250px;
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
