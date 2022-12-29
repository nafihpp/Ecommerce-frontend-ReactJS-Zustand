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
import { useStore } from "zustand";
import { useEffect } from "react";
import { Suspense } from "react";

function Mainpage({ modal, setModal }) {
    const [count, setCount] = useState(0);
    const bottomNavItems = [
        {
            title: "Home",
            icon: <IoHomeOutline style={{ fontSize: "18px" }} />,

            activeIcon: (
                <AiFillHome style={{ fontSize: "18px", background: "fff" }} />
            ),
        },

        {
            title: "Cart",

            icon: <AiOutlineShoppingCart style={{ fontSize: "18px" }} />,

            activeIcon: (
                <FaShoppingCart
                    style={{
                        fontSize: "18px",
                        background: "fff",
                    }}
                />
            ),
            onClick: () => {
                setModal(true);
            },
        },

        {
            title: "Menu",

            icon: <IoHomeOutline style={{ fontSize: "18px" }} />,

            activeIcon: (
                <IoHomeOutline
                    style={{ fontSize: "18px", background: "fff" }}
                />
            ),

            onClick: () => alert("menu clicked"),
        },
    ];
    return (
        <>
            <Header
                modal={modal}
                setModal={setModal}
                count={count}
                setCount={setCount}
            />
            {/* <Spotlight /> */}
            <SpotLightCarousal />
            <CategoryBar />

            <Items />

            <Slicker />
            <Story />
            <Achievement />
            {isMobile && (
                <BottomNavigation
                    items={bottomNavItems}
                    defaultSelected={0}
                    onItemClick={(item) => console.log(item)}
                />
            )}
        </>
    );
}

export default Mainpage;
