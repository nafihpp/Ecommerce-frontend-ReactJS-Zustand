import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiHomeSmile2Fill, RiUser5Fill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsChatRightDotsFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const BottomNavBar = () => {
    const navigate = useNavigate();
    const [isModal, setModal] = useState(false);
    const [activeTabs, setActiveTabs] = useState("");
    useEffect(() => {
        switch (activeTabs) {
            case "home":
                navigate("/");
                break;
            case "cart":
                navigate("/cart");
                break;
            case "favourites":
                setModal(true);
                break;
            case "account":
                navigate("/account");
                break;
            default:
                navigate("/");
                break;
        }
    }, [activeTabs, navigate]);

    return (
        <Main className="bottom-nav">
            <Botton className="bn-tab" onClick={() => setActiveTabs("home")}>
                {activeTabs === "home" ? (
                    <>
                        <RiHomeSmile2Fill size="35" color="#000" />
                    </>
                ) : (
                    <AiOutlineHome
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("home")}
                    />
                )}
            </Botton>
            <Botton className="bn-tab" onClick={() => setActiveTabs("cart")}>
                {activeTabs === "cart" ? (
                    <AiOutlineShoppingCart size="35" color="#000" />
                ) : (
                    <AiOutlineShoppingCart
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("cart")}
                    />
                )}
            </Botton>
            <Botton className="bn-tab">
                {activeTabs === "favourites" ? (
                    <AiFillHeart
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("favourites")}
                    />
                ) : (
                    <AiOutlineHeart
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("favourites")}
                    />
                )}
            </Botton>
            <Botton className="bn-tab-last">
                {activeTabs === "account" ? (
                    <RiUser5Fill
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("account")}
                    />
                ) : (
                    <CgProfile
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("account")}
                    />
                )}
            </Botton>
        </Main>
    );
};
const Main = styled.div`
    &.bottom-nav {
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        background-color: #fff;
    }
`;
const Botton = styled.a`
    &.bn-tab {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    &.bn-tab-last {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;
export default BottomNavBar;
