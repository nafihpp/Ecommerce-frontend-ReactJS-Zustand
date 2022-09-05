import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
import Cart from "../Screens/Cart";
import LoginModal from "../Includes/LoginModal";

function Navbar({ item, setItem }) {
    const [search, setSearch] = useState([]);
    const [modal, setModal] = useState(false);
    const handleFilter = (e) => {
        var searched = e.target.value.toLowerCase();
        setSearch(searched);
        console.log(search);
    };
    return (
        <NavbarMain>
            <Wrapper>
                <MainList>
                    <Childone>
                        <HeadDiv>
                            <LogoImg src={require("../../assets/LOGO.png")} />
                        </HeadDiv>
                    </Childone>
                    <Bar>
                        <ChildMiddle>
                            <SearchBar
                                placeholder="What are you looking for?"
                                onChange={handleFilter}
                            />
                        </ChildMiddle>
                        <SearchIcon>
                            <CgSearch />
                        </SearchIcon>
                    </Bar>
                    <Childtwo>
                        <DashboardLink to="/login">
                            <CgProfile />
                        </DashboardLink>
                        <Button
                            onClick={() => {
                                setModal(!modal);
                                console.log(modal);
                            }}
                        >
                            <CartDiv>
                                <FaShoppingCart />
                            </CartDiv>
                            <Badge>
                                <Priced>{item.length}</Priced>
                            </Badge>
                        </Button>
                    </Childtwo>
                </MainList>
            </Wrapper>
            {modal && (
                <LoginModal
                    item={item}
                    setItem={setItem}
                    modal={modal}
                    setModal={setModal}
                />
            )}
            {/* <Cart item={item} setItem={setItem} /> */}
        </NavbarMain>
    );
}
const SearchIcon = styled.div`
    position: absolute;
    right: 9px;
    top: 11px;
`;
const SearchBar = styled.input`
    padding: 13px;
    border: none;
    outline: none;
    padding-right: 42px;
`;
const Bar = styled.div`
    border-right: 2px solid #dddddd;
    border-left: 2px solid #dddddd;
    display: flex;
    position: relative;
`;
const ChildMiddle = styled.div`
    padding: 0 10px 0 0;
`;
const CartDiv = styled.div`
    font-size: 24px;
`;
const Priced = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.a`
    color: #8d8d8d;
    cursor: pointer;
    position: relative;
`;
const Badge = styled.div`
    background: green;
    border-radius: 131px;
    position: absolute;
    top: 10px;
    left: 14px;
    width: 92%;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`;
const NavbarMain = styled.section`
    width: 100%;
    height: 63px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 300;
    background: #fff;
    box-shadow: 0px 15px 10px -15px #111;
    @media all and (max-width: 480px) {
        height: 55px;
    }
`;
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
`;
const MainList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Childone = styled.div``;
const HeadDiv = styled.div`
    width: 100px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 3px;
    @media all and (max-width: 768px) {
        width: 100px;
    }
`;
const LogoImg = styled.img`
    display: block;
    width: 100%;
`;
const Childtwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const DashboardLink = styled(Link)`
    text-decoration: none;
    font-size: 30px;
    border-radius: 5px;
    color: #8d8d8d;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    &.Margin {
        margin-right: 10px;
    }
    @media all and (max-width: 640px) {
        width: 100px;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;

export default Navbar;
