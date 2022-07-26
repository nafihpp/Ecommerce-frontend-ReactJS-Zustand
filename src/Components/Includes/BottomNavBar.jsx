import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
    RiHomeSmile2Line,
    RiHomeSmile2Fill,
    RiUser5Fill,
    RiSearchEyeFill,
} from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiUser5Line } from "react-icons/ri";
import { BsChatRightDots } from "react-icons/bs";
import { BsChatRightDotsFill } from "react-icons/bs";

const BottomNavBar = () => {
    const navigate = useNavigate();
    const [isModal, setModal] = useState(false);
    const [activeTabs, setActiveTabs] = useState();
    useEffect(() => {
        switch (activeTabs) {
            case "home":
                navigate("/");
                break;
            case "search":
                navigate("/home");
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
    function done() {
        setModal(true);
        console.log("hai");
    }

    return (
        <Main className="bottom-nav">
            <Botton className="bn-tab">
                {activeTabs === "home" ? (
                    <RiHomeSmile2Fill
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("home")}
                    />
                ) : (
                    <RiHomeSmile2Line
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("home")}
                    />
                )}
            </Botton>
            <Botton className="bn-tab">
                {activeTabs === "search" ? (
                    <BsChatRightDotsFill
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("search")}
                    />
                ) : (
                    <BsChatRightDots
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("search")}
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
            <Botton className="bn-tab">
                {activeTabs === "account" ? (
                    <RiUser5Fill
                        size="35"
                        color="#000"
                        onClick={() => setActiveTabs("account")}
                    />
                ) : (
                    <RiUser5Line
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
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        border-top: 1px solid rgb(230, 230, 230);
        background-color: grey;
        border-top-left-radius: 36px;
        border-top-right-radius: 36px;
    }
`;
const Botton = styled.div`
    &.bn-tab {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export default BottomNavBar;
