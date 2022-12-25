import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

function Achievement() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <MainContainer>
            <Wrapper>
                <Heading>Our Partners</Heading>
                <Parent>
                    <Child>
                        <img
                            src={require("../../assets/Combined Shape.png")}
                            alt="Reuters"
                        />
                    </Child>
                    <Child>
                        <img
                            src={require("../../assets/Combined Shape-1.png")}
                            alt="Taboola"
                        />
                    </Child>
                    <Child>
                        <img
                            src={require("../../assets/Combined Shape-2.png")}
                            alt="Bloomberg"
                        />
                    </Child>
                    <Child>
                        <img
                            src={require("../../assets/Combined Shape-3.png")}
                        />
                    </Child>
                    <Child>
                        <img
                            src={require("../../assets/Combined Shape-4.png")}
                        />
                    </Child>
                    <Child>
                        <img
                            src={require("../../assets/Combined Shape-5.png")}
                        />
                    </Child>
                </Parent>
            </Wrapper>
        </MainContainer>
    );
}
const MainHead = styled.h1`
    color: #f86338;
`;

const RightContainer = styled.div`
    width: 40%;
`;
const MainSliderContainer = styled.div`
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 350px;
    margin-top: 40px;
    padding: 0px 30px;
`;
const BottomContainer = styled.div`
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BottomDiv = styled.div`
    background-color: #fff;
    width: 80%;
    min-height: 300px;
`;
const Heading = styled.h4`
    text-align: center;
    font-size: 40px;
    @media all and (max-width: 680px) {
        font-size: 20px;
    }
`;
const MainContainer = styled.div`
    padding: 20px 0 20px 0;
    background-color: #f4f7f8;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Parent = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    @media all and (max-width: 680px) {
        flex-wrap: wrap;
    }
`;
const Child = styled.li`
    text-align: center;
    width: 100%;
    margin-top: 20px;
    @media all and (max-width: 680px) {
        width: 20%;
    }
`;

export default Achievement;
