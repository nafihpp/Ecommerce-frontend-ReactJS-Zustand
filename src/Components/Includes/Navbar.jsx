import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Geocode from "react-geocode";

function NavBar({ modal, setModal }) {
    const [lat, setLatitude] = useState("");
    const [lng, setLongitude] = useState("");
    Geocode.setApiKey("AIzaSyA1Big55ZxwdB4Rr63kICLf9WdYN2yCqAc");
    Geocode.setLanguage("en");
    const [data, setData] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);

    Geocode.fromLatLng(lat, lng).then(
        (response) => {
            const address = response.results[1].formatted_address;
            setData(address);
        },
        (error) => {
            console.log(error);
        }
    );
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
                    <MiddleLocation>
                        <LocationContainer>
                            <img
                                src={require("../../assets/location.jpg")}
                                alt="location"
                                width={30}
                            />
                        </LocationContainer>
                        <h4 style={{ display: "inline-block" }}>{data}</h4>
                    </MiddleLocation>
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
const MiddleLocation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    @media all and (max-width: 640px) {
        font-size: 6px;
        margin-left: 70px;
    }
`;
const MainContainer = styled.div`
    padding: 15px;
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: #fff;
    z-index: 100000000;

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
    @media all and (max-width: 680px) {
        display: none;
    }
`;
const CallImgContainer = styled.img`
    display: block;
    width: 100%;
`;
const CallHeading = styled.p`
    color: #11142d;
    @media all and (max-width: 480px) {
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
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const ShipImg = styled.img`
    display: block;
    width: 100%;
`;
const ShippingHeading = styled.p`
    color: #11142d;
    @media all and (max-width: 480px) {
        display: none;
    }
`;
