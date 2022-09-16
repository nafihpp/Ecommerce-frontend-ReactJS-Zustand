import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginModal from "./LoginModal";

function Header({ item, setItem, modal, setModal, activeTabs, setActiveTabs }) {
    const products = useSelector((state) => state.allProducts.products);
    const [current, setCurrent] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        handleFilter();
    }, [search]);

    const handleFilter = () => {
        setCurrent(
            products.filter((item) => item.title.toLowerCase().includes(search))
        );
    };
    return (
        <>
            <MainContainer className={modal ? "hide" : null}>
                <WrapperContainer>
                    <SubContainer>
                        <LeftContainer>
                            <MainList>
                                <SubList>Shop</SubList>
                                <SubList>Prom</SubList>
                                <SubList>About</SubList>
                                <SubList>Blog</SubList>
                            </MainList>
                        </LeftContainer>
                        <MiddleContainer>
                            <Input
                                type="text"
                                class="search-box"
                                placeholder="Search What You Need."
                                className="zoom"
                                onChange={(e) => {
                                    setSearch(e.target.value.toLowerCase());
                                }}
                            />
                            <SearchContainer>
                                {search &&
                                    current.map((items) => (
                                        <Link
                                            to={`/${items.id}`}
                                            style={{
                                                color: "green",
                                                display: "flex",
                                                width: "75%",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <p>{items.title}</p>
                                            <ImageContainer>
                                                <img
                                                    src={items.image}
                                                    alt=""
                                                    width={50}
                                                />
                                            </ImageContainer>
                                        </Link>
                                    ))}
                            </SearchContainer>
                            <CartContainer>
                                <CartImg
                                    src={
                                        require("../../assets/search.icon.svg")
                                            .default
                                    }
                                    alt="imge"
                                />
                            </CartContainer>
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
                                onClick={() => {
                                    setModal(true);
                                }}
                            >
                                <RoundBox>{item.length}</RoundBox>
                                <ImgTwo
                                    src={
                                        require("../../assets/cart.icon.svg")
                                            .default
                                    }
                                    alt="Image"
                                />
                            </ImageBoxTwo>
                            <ImageBoxThree to="/login">
                                <ImgThree
                                    src={
                                        require("../../assets/avatar.icon.svg")
                                            .default
                                    }
                                    alt="Image"
                                />
                            </ImageBoxThree>
                            <ImageBoxFour>
                                <ImgFour
                                    src={
                                        require("../../assets/bell.icon.svg")
                                            .default
                                    }
                                    alt="Image"
                                />
                            </ImageBoxFour>
                        </RightContainer>
                    </SubContainer>
                </WrapperContainer>
            </MainContainer>
            {modal && (
                <LoginModal
                    item={item}
                    setItem={setItem}
                    modal={modal}
                    setModal={setModal}
                    activeTabs={activeTabs}
                    setActiveTabs={setActiveTabs}
                />
            )}
        </>
    );
}

export default Header;

const ImageContainer = styled.span`
    width: 1%;
`;

const SearchContainer = styled.div`
    position: absolute;
    top: 47px;
    background: #fff;
    z-index: 10000;
    width: 80%;
    @media all and (max-width: 480px) {
    }
`;

const MainContainer = styled.div`
    padding: 18px 0px;
    position: fixed;
    top: 53px;
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
    top: -14px;
    left: 9px;
    background-color: red;
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
