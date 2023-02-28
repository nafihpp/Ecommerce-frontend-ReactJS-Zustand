import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartModal from "../Screens/Cart";
import Geocode from "react-geocode";
import { useCart } from "../../store/Cart/Cart";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { debounce } from "lodash";
const axios = require("axios");

function Header({ modal, setModal, activeTabs, setActiveTabs }) {
    //Geocode.setApiKey("AIzaSyA1Big55ZxwdB4Rr63kICLf9WdYN2yCqAc");
    //Geocode.setLanguage("en");

    // useEffect(() => {
    //     if (item?.length >= 1) {
    //         let checking = item?.filter((check) => check.id == current.id);
    //     }
    // }, [item.length]);

    //  setCurrent(
    //     items?.filter((item) => item?.title?.toLowerCase().includes(search))
    // );

    const [items, setItem] = useState([]);
    const cart = useCart((state) => state.cart);
    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0);
    const [current, setCurrent] = useState([]);
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        // Get user's location using geolocation API
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            // Call Google Maps API to convert latitude and longitude to address
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyA1Big55ZxwdB4Rr63kICLf9WdYN2yCqAc`;
            const response = await fetch(url);
            const data = await response.json();

            // Extract formatted address from response data
            const formattedAddress = data.results[0].formatted_address;

            // Set the location state with the formatted address
            setLocation(formattedAddress);
        });
    }, []);

    const handleFilter = debounce(() => {
        axios
            .get(`https://dummyjson.com/products/search?q=${search}`)
            .then(function (response) {
                setItem(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, 500);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        handleFilter();
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = () => {
        let heightToHideFrom = 10;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        setHeight(winScroll);

        if (winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };
    return (
        <>
            <MainContainer>
                {isVisible && (
                    <LocationContainer>
                        <LocationIcon>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                            </svg>
                        </LocationIcon>
                        <span>{location}</span>
                    </LocationContainer>
                )}
                <WrapperContainer>
                    <SubContainer>
                        <LeftContainer>
                            <MainList>
                                <SubList>Shop</SubList>
                                <SubList>About</SubList>
                                <SubList>Blog</SubList>
                            </MainList>
                        </LeftContainer>
                        <MiddleContainer>
                            <Input
                                type="text"
                                placeholder="Search What You Need."
                                className="zoom"
                                value={search}
                                onChange={handleSearchChange}
                            />
                            <SearchContainer>
                                {search &&
                                    current.map((ite) => (
                                        <Link
                                            to={`/${ite.id}`}
                                            style={{
                                                color: "#000",
                                                display: "flex",
                                                width: "75%",
                                                justifyContent: "space-between",
                                                textDecoration: "none",
                                                marginBottom: "15px",
                                            }}
                                        >
                                            <p style={{ fontSize: "15px" }}>
                                                {ite.description.slice(0, 20)}
                                            </p>
                                            <ImageContainer>
                                                <img
                                                    src={items.thumbnail}
                                                    alt=""
                                                    width={50}
                                                />
                                            </ImageContainer>
                                        </Link>
                                    ))}
                            </SearchContainer>
                            {search ? (
                                <CartContainer
                                    style={{
                                        cursor: "pointer",
                                        fontSize: "20px",
                                    }}
                                    onClick={(e) => {
                                        setSearch("");
                                        document.getElementsByClassName(
                                            "zoom"
                                        )[0].value = "";
                                    }}
                                >
                                    <AiOutlineCloseCircle />
                                </CartContainer>
                            ) : (
                                <CartContainer>
                                    <CartImg
                                        src={
                                            require("../../assets/search.icon.svg")
                                                .default
                                        }
                                        alt="imge"
                                    />
                                </CartContainer>
                            )}
                        </MiddleContainer>
                        <RightContainer>
                            <ImageBoxOne>
                                <ImgOne
                                    src={
                                        require("../../assets/heart.icon.svg")
                                            .default
                                    }
                                    alt="Image"
                                />
                            </ImageBoxOne>
                            <ImageBoxTwo
                                style={{ cursor: "pointer" }}
                                onClick={(e) => {
                                    setModal(true);
                                }}
                            >
                                <RoundBox style={{ cursor: "pointer" }}>
                                    {cart.length}
                                </RoundBox>
                                <svg
                                    width="20"
                                    height="22"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M1 5H19"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </ImageBoxTwo>
                            <ImageBoxThree to="/profile">
                                <ImgThree
                                    src={
                                        require("../../assets/avatar.icon.svg")
                                            .default
                                    }
                                    alt="Image"
                                />
                            </ImageBoxThree>
                        </RightContainer>
                    </SubContainer>
                </WrapperContainer>
                {modal && (
                    <CartModal
                        cart={cart}
                        modal={modal}
                        setModal={setModal}
                        activeTabs={activeTabs}
                        setActiveTabs={setActiveTabs}
                    />
                )}
            </MainContainer>
        </>
    );
}

export default Header;
const LocationIcon = styled.span`
    margin-right: 10px;
    font-size: 20px;
`;
const LocationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
`;

const ImageContainer = styled.span`
    width: 1%;
`;

const SearchContainer = styled.div`
    position: absolute;
    top: 35px;
    left: 0px;
    background: #fff;
    z-index: 10000;
    width: 100%;
    max-height: 230px;
    overflow: scroll;
    @media all and (max-width: 480px) {
    }
`;

const MainContainer = styled.div`
    padding: 13px 0px 18px 0px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 100000;
    background-color: #e5e5e5;
    &.hide {
        display: none;
    }
    @media all and (max-width: 980px) {
        padding: 21px 0px 12px 0;
    }
`;
const WrapperContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width: 980px) {
        justify-content: space-between;
    }
`;
const LeftContainer = styled.div``;
const MainList = styled.div`
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const SubList = styled.a`
    margin-right: 10px;
    @media all and (max-width: 980px) {
        font-size: 15px;
    }
`;
const MiddleContainer = styled.div`
    background-color: #fff;
    padding: 7px 12px;
    width: 474px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    position: relative;
    @media all and (max-width: 980px) {
        padding: 5px 12px;
        width: 314px;
    }
    @media all and (max-width: 768px) {
        padding: 9px 6px;
        width: 296px;
        margin-right: 50px;
    }
    @media all and (max-width: 640px) {
        padding: 9px 6px;
        width: 210px;
        margin-right: 10px;
    }
`;

const Input = styled.input`
    outline: none;
    border: none;
    ::placeholder {
        font-size: 13px;
    }
    &.zoom {
        @media all and (max-width: 768px) {
            font-size: 16px;
            transform-origin: top left;
            transform: scale(0.75);
        }
    }
`;
const CartContainer = styled.div`
    width: 7%;
    @media all and (max-width: 680px) {
        position: absolute;
        left: 189px;
    }
`;
const CartImg = styled.img`
    display: block;
    width: 100%;
`;
const RightContainer = styled.div`
    display: flex;
    width: 15%;
    @media all and (max-width: 768px) {
        width: 21%;
    }
    @media all and (max-width: 480px) {
        width: 26%;
    }
`;
const ImageBoxOne = styled.div`
    width: 21px;
    margin-right: 14px;
    @media all and (max-width: 480px) {
        width: 26px;
        display: none;
    }
`;
const ImgOne = styled.img`
    display: block;
    width: 100%;
`;
const ImageBoxTwo = styled.div`
    width: 21px;
    margin-right: 14px;
    position: relative;
    @media all and (max-width: 480px) {
        width: 27px;
    }
`;
const ImgTwo = styled.img`
    display: block;
    width: 100%;
`;
const RoundBox = styled.span`
    display: inline-block;
    position: absolute;
    text-align: center;
    width: 21px;
    border-radius: 50%;
    color: white;
    top: 15px;
    left: -10px;
    background-color: #000;
    @media all and (max-width: 980px) {
        width: 15px;
        height: 14px;
        font-size: 12px;
        border-radius: 50%;
        color: white;
        top: -13px;
    }
    @media all and (max-width: 780px) {
        width: 15px;
        height: 16px;
        font-size: 12px;
        border-radius: 50%;
        color: white;
        top: -6px;
    }
    @media all and (max-width: 480px) {
        width: 19px;
        height: 18px;
        font-size: 12px;
        border-radius: 50%;
        color: white;
        left: 16px;
        top: -7px;
    }
`;
const ImageBoxThree = styled(Link)`
    width: 21px;
    margin-right: 12px;
    @media all and (max-width: 480px) {
        width: 27px;
    }
`;
const ImgThree = styled.img`
    display: block;
    width: 100%;
`;
const ImageBoxFour = styled.div`
    width: 21px;
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const ImgFour = styled.img`
    display: block;
    width: 100%;
`;
