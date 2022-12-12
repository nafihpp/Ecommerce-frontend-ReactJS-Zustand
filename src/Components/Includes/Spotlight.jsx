import React from "react";

import styled from "styled-components";

function Spotlight() {
    return (
        <>
            <MainContainer id="Items">
                <WrapperContainer className="wrapper">
                    <SubContainer>
                        <LeftContainer>
                            <LeftImg>
                                <LeftOne
                                    src={require("../../assets/Ellipse 153.png")}
                                    alt="Image"
                                />
                            </LeftImg>
                            <RightImg>
                                <RightOne
                                    src={require("../../assets/Ellipse 154.png")}
                                    alt="Image"
                                />
                            </RightImg>
                            <MiddleImg>
                                <MiddleOne
                                    src={require("../../assets/Ellipse 156.png")}
                                    alt="Image"
                                />
                            </MiddleImg>
                            <CenterImg>
                                <CenterOne
                                    src={require("../../assets/Ellipse 157.png")}
                                    alt="Image"
                                />
                            </CenterImg>
                        </LeftContainer>
                        <RightContainer>
                            <MainHeading>
                                Shop Your Favuorite Gadgets, <br />
                                in One Click!
                            </MainHeading>
                            <Button href="#Items">Start Shopping</Button>
                            <RightImgOne>
                                <ImgOne
                                    src={require("../../assets/Ellipse 155.png")}
                                    alt="Image"
                                />
                            </RightImgOne>
                            <RightImgTwo>
                                <ImgTwo
                                    src={require("../../assets/Ellipse 157.png")}
                                    alt="Image"
                                />
                            </RightImgTwo>
                            <RightImgThree>
                                <ImgThree
                                    src={require("../../assets/Ellipse 158.png")}
                                    alt="Image"
                                />
                            </RightImgThree>
                        </RightContainer>
                    </SubContainer>
                </WrapperContainer>
            </MainContainer>
        </>
    );
}

export default Spotlight;
const Button = styled.a`
    background-color: #f86338;
    padding: 5px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 18px 0;
    width: 40%;
    text-decoration: none;
    @media all and (max-width: 980px) {
        width: 65%;
        height: 10px;
        font-size: 15px;
    }
    @media all and (max-width: 480px) {
        width: 65%;
        height: 10px;
        font-size: 15px;
    }
`;
const MainContainer = styled.div`
    padding: 204px 0 172px 0;
`;
const WrapperContainer = styled.div``;
const SubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LeftContainer = styled.div`
    width: 45%;
    position: relative;
    @media all and (max-width: 768px) {
        width: 30%;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const LeftImg = styled.div`
    width: 50px;
    position: absolute;
    top: -49px;
    left: 50px;
    @media all and (max-width: 768px) {
        width: 40px;
        position: absolute;
        top: 28px;
        left: 50px;
    }
`;
const LeftOne = styled.img`
    width: 100%;
    display: block;
`;
const RightImg = styled.div`
    width: 34px;
    position: absolute;
    top: 211px;
    right: 140px;
    @media all and (max-width: 980px) {
        top: 125px;
        right: 91px;
    }
`;
const RightOne = styled.img`
    width: 100%;
    display: block;
`;
const MiddleImg = styled.div`
    width: 26px;
    position: absolute;
    right: 77px;
    top: -28px;
`;
const MiddleOne = styled.img`
    width: 100%;
    display: block;
`;
const CenterImg = styled.div`
    width: 10px;
    position: absolute;
    top: 212px;
    left: 67px;
`;
const CenterOne = styled.img`
    width: 100%;
    display: block;
`;
const RightContainer = styled.div`
    width: 40%;
    position: relative;
    @media all and (max-width: 768px) {
        width: 50%;
        font-size: 40px;
    }
`;
const MainHeading = styled.h3`
    font-size: 50px;
    @media all and (max-width: 980px) {
        font-size: 42px;
    }
    @media all and (max-width: 768px) {
        font-size: 40px;
    }
    @media all and (max-width: 640px) {
        font-size: 35px;
    }
`;
const ParaHeading = styled.h4`
    font-size: 15px;
    margin: 10px 0 10px 0;
    width: 75%;
    @media all and (max-width: 980px) {
        font-size: 13px;
        width: 100%;
    }
    @media all and (max-width: 768px) {
        font-size: 12px;
        width: 100%;
    }
    @media all and (max-width: 640px) {
        font-size: 12px;
    }
`;
const RightImgOne = styled.div`
    width: 41px;
    position: absolute;
    top: -22px;
    right: 74px;
    @media all and (max-width: 980px) {
        right: -16px;
    }
`;
const ImgOne = styled.img`
    width: 100%;
    display: block;
`;
const RightImgTwo = styled.div`
    width: 10px;
    position: absolute;
    bottom: -68px;
    left: 104px;
    @media all and (max-width: 980px) {
        left: 239px;
    }
`;
const ImgTwo = styled.img`
    width: 100%;
    display: block;
`;
const RightImgThree = styled.div`
    width: 15px;
    position: absolute;
    top: 163px;
    right: 193px;
    @media all and (max-width: 980px) {
        top: 199px;
    }
    @media all and (max-width: 480px) {
        top: 192px;
        left: -57px;
    }
`;
const ImgThree = styled.img`
    width: 100%;
    display: block;
`;
