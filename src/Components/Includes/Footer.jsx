import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <Mainsection>
            <Wrapper>
                <MainDiv>
                    <DivLeft>
                        <DivLogo>
                            <Img
                                src={require("../../assets/apple.jpg").default}
                                alt="grey-logo"
                            />
                        </DivLogo>
                        <P>
                            BuyCommerce Private Limited,
                            <br /> Dubai,India
                            <br />
                        </P>
                    </DivLeft>
                    <DivRight>
                        <DivOne>
                            <H5>Company</H5>
                            <DivButtons>
                                <Button>About us</Button>
                                <Button>Careers</Button>
                                <Button>Contact us</Button>
                            </DivButtons>
                        </DivOne>

                        <DivOne>
                            <H5>Contact</H5>
                            <DivButtons>
                                {" "}
                                <Button>+91-8593908025</Button>
                                <Button>help@buycommerce.com</Button>
                            </DivButtons>
                            <Spanner>
                                {/* <Buttons>
                                    <ImgSocial
                                        src={
                                            require("../../assets/instagram.svg")
                                                .default
                                        }
                                        alt="Instagram"
                                    />
                                </Buttons>
                                <Buttons>
                                    <ImgSocial
                                        src={
                                            require("../../assets/facebook.svg")
                                                .default
                                        }
                                        alt="facebook"
                                    />
                                </Buttons>
                                <Buttons>
                                    <ImgSocial
                                        src={
                                            require("../../assets/twitter.svg")
                                                .default
                                        }
                                        alt="twitter"
                                    />
                                </Buttons>
                                <Buttons>
                                    <ImgSocial
                                        src={
                                            require("../../assets/linkedin.svg")
                                                .default
                                        }
                                        alt="linkedin"
                                    />
                                </Buttons>
                                <Buttons>
                                    <ImgSocial
                                        src={
                                            require("../../assets/youtube.svg")
                                                .default
                                        }
                                        alt="youtube"
                                    />
                                </Buttons> */}
                            </Spanner>
                        </DivOne>
                    </DivRight>
                </MainDiv>
            </Wrapper>
            <Wrapper>
                <DivFoot>
                    <Divfirst>
                        <Parafirst>
                            &copy; 2023, Buy Commerce Private Limited. All
                            rights reserved
                        </Parafirst>
                    </Divfirst>
                    <DivLast>
                        <ButtonOne>Terms of Service</ButtonOne>
                        <ButtonTwo>Privacy Policy</ButtonTwo>
                    </DivLast>
                </DivFoot>
            </Wrapper>
        </Mainsection>
    );
}
const Spanner = styled.span``;
const ImgSocial = styled.img``;
const Buttons = styled.a`
    margin-right: 15px;
    cursor: pointer;
    width: 20px;
    display: inline-block;
`;
const ButtonOne = styled.a`
    margin-right: 10px;
    cursor: pointer;
`;
const ButtonTwo = styled.a`
    cursor: pointer;
`;
const DivFoot = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;
const Divfirst = styled.div`
    color: #868686;
`;
const Parafirst = styled.p``;
const DivLast = styled.div`
    color: #868686;
`;
const DivButtons = styled.div`
    display: flex;
    flex-direction: column;
`;
const DivOne = styled.div`
    margin-right: 131px;
    :nth-child(4) {
        margin-right: 0;
    }
`;
const H5 = styled.h5`
    color: rgb(255, 255, 255);
    font-family: "gorditamedium";
    margin-bottom: 20px;
    font-size: 16px;
`;
const Button = styled.a`
    color: rgb(170, 170, 170);
    font-size: 15px;
    font-family: "gorditamedium";
    margin-bottom: 20px;
    cursor: pointer;
`;
const DivLeft = styled.div``;
const DivRight = styled.div`
    display: flex;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
    }
`;
const P = styled.p`
    color: rgb(170, 170, 170);
    line-height: 1.5rem;
`;
const Mainsection = styled.section`
    padding: 100px 0 50px 0;
    background-color: rgb(30, 30, 30);
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1380px) {
        //1281
    }
    @media all and (max-width: 1280px) {
        //1051
    }
    @media all and (max-width: 1080px) {
        //981
    }
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
    }
    @media all and (max-width: 768px) {
        //641
    }
    @media all and (max-width: 640px) {
        //481
    }
    @media all and (max-width: 480px) {
        //361
    }
    @media all and (max-width: 360px) {
        //321
    }
`;
const DivLogo = styled.div`
    width: 40%;
    margin-bottom: 20px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;

export default Footer;
