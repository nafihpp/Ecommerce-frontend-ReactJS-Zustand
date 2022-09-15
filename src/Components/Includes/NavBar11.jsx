import React from "react";
import styled from "styled-components";

function NavBar(item, setItem, modal, setModal) {
    return (
        <MainContainer>
            <WrapperContainer>
                <SubContainer>
                    <LogoBox>
                        <LogoContainer>
                            <LogoImg
                                src={require("../../assets/Dealerz.png")}
                                alt="Image"
                            />
                        </LogoContainer>
                    </LogoBox>
                    <InfoContainer>
                        <ContactBox>
                            <ContactImg>
                                <CallImgContainer
                                    src={
                                        require("../../assets/call.icon.svg")
                                            .default
                                    }
                                    alt="Image"
                                />
                            </ContactImg>
                            <CallHeading>Call Center</CallHeading>
                        </ContactBox>
                        <ShippingContainer>
                            <ShippingImgContainer>
                                <ShipImg
                                    src={
                                        require("../../assets/truck.icon.svg")
                                            .default
                                    }
                                    alt="Image"
                                />
                            </ShippingImgContainer>
                            <ShippingHeading>
                                Shipping {"&"} Returns
                            </ShippingHeading>
                        </ShippingContainer>
                    </InfoContainer>
                </SubContainer>
            </WrapperContainer>
        </MainContainer>
    );
}

export default NavBar;

const MainContainer = styled.div`
    padding: 15px;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const WrapperContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LogoBox = styled.div``;
const LogoContainer = styled.div`
    width: 150px;
    @media all and (max-width: 768px) {
        width: 115px;
    }
`;
const LogoImg = styled.img`
    display: block;
    width: 100%;
`;
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ContactBox = styled.div`
    display: flex;
    align-items: center;
    margin-right: 25px;
`;
const ContactImg = styled.div`
    width: 20px;
    margin-right: 10px;
`;
const CallImgContainer = styled.img`
    display: block;
    width: 100%;
`;
const CallHeading = styled.p`
    color: #11142d;
    @media all and (max-width: 320px) {
        display: none;
    }
`;
const ShippingContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ShippingImgContainer = styled.div`
    width: 20px;
    margin-right: 10px;
`;
const ShipImg = styled.img`
    display: block;
    width: 100%;
`;
const ShippingHeading = styled.p`
    color: #11142d;
    @media all and (max-width: 320px) {
        display: none;
    }
`;
