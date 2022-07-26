import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
function Navbar({ item, setItem }) {
    const [search, setSearch] = useState([]);
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
                            <LogoImg src={require("../../assets/images.jpg")} />
                        </HeadDiv>
                    </Childone>
                    <Childtwo>
                        <DashboardLink to="/signup" className="Margin">
                            Signup
                        </DashboardLink>
                        <DashboardLink to="/login">Login</DashboardLink>
                        <Button to="/cart">
                            <FaShoppingCart />
                            <Badge>
                                <Priced>{item.length}</Priced>
                            </Badge>
                        </Button>
                    </Childtwo>
                </MainList>
            </Wrapper>
        </NavbarMain>
    );
}
const Priced = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled(Link)`
    color: white;
    cursor: pointer;
    position: relative;
    :hover {
        color: white;
    }
`;
const Badge = styled.div`
    background: green;
    border-radius: 84px;
    position: absolute;
    top: 10px;
    left: 11px;
    width: 130%;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NavbarMain = styled.section`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 300;
    background: #000;
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
    font-size: 16px;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
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
