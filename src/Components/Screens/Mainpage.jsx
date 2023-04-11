import React, { useState } from "react";
import Items from "../Includes/Items";
// import Navbar from "./Includes/NavBar";
import Header from "../Includes/Header";
import Spotlight from "../Includes/Spotlight";
import Achievement from "../Includes/Achievement";
import Story from "../Includes/Story";
import Slicker from "../Screens/Slicker";
import BottomNavigation from "reactjs-bottom-navigation";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import "reactjs-bottom-navigation/dist/index.css";
import { isMobile } from "mobile-device-detect";
import SpotLightCarousal from "../Includes/SpotLightCarousal";
import CategoryBar from "../Includes/CategoryBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "../Includes/Footer";
import { useStore } from "../../store/Products/Products";

function Mainpage({ modal, setModal }) {
    const [count, setCount] = useState(0);
    const loader = useStore((state) => state.loading);
    const item = useStore((state) => state.Allproducts);
    return (
        <>
            <Header
                modal={modal}
                setModal={setModal}
                count={count}
                setCount={setCount}
            />
            <SpotLightCarousal />

            <CategoryBar />
            {item.length !== 0 ? <Items /> : null}
            <Slicker />
            <Story />
            <Achievement />
            <Spotlight />
            <Footer />
            {isMobile && console.log("mobile")}
        </>
    );
}

export default Mainpage;
