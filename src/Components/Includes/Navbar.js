import React from "react";
import styled from "styled-components";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar({item, setItem}) {
  const [search, setSearch] = useState([]);
  const handleFilter = (e) => {
    var searched = e.target.value.toLowerCase();
    setSearch(searched);
    console.log(search)
  };

  return (
    <Nav>
      <Wrapper>
        <LogoContainer>
          <Image src={require("../../assets/images.jpg")} />
        </LogoContainer>
        <SearchDiv>
          <InputBox
            placeholder="Search for Products "
            onChange={handleFilter}
          />
          <SearchBox>
            <FaSearch />
          </SearchBox>
        </SearchDiv>
        <Menubar>
          <Button to={"/cart"}>
            <FaShoppingCart />
            <Badge>
              <Priced>{item.length}</Priced>
            </Badge>
          </Button>
        </Menubar>
      </Wrapper>
      <Outlet />
    </Nav>
  );
}
const SearchBox = styled.span`
  position: absolute;
  left: 91%;
  bottom: 16%;
`;
const Priced = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const InputBox = styled.input`
  padding: 5px;
  margin-right: 5px;
  padding-right: 160px;
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
const Button = styled(Link)`
  color: white;
  cursor: pointer;
  position: relative;
  :hover {
    color: white;
  }
`;
const Nav = styled.div`
  padding: 6px;
  background: black;
  z-index: 100;
  width: 100%;
`;
const LogoContainer = styled.a`
  width: 7%;
  cursor: pointer;
`;
const Menubar = styled.div``;
const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 8px;
`;

export default Navbar;
