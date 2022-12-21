import React, { useState } from "react";
import Items from "./Screens/Items";
// import Navbar from "./Includes/NavBar";
import Header from "./Includes/Header";
import Spotlight from "./Includes/Spotlight";
import Achievement from "./Includes/Achievement";
import Story from "./Includes/Story";
import Slicker from "./Screens/Slicker";
import BottomNavigation from "reactjs-bottom-navigation";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import "reactjs-bottom-navigation/dist/index.css";

function Mainpage({
    item,
    setItem,
    modal,
    setModal,
    activeTabs,
    setActiveTabs,
}) {
    const [count, setCount] = useState(0);
    const bottomNavItems = [
        {
            title: "Home",
            noActiveBg: true,
            icon: <IoHomeOutline style={{ fontSize: "18px" }} />,

            activeIcon: (
                <AiFillHome style={{ fontSize: "18px", background: "fff" }} />
            ),
        },

        {
            title: "Search",

            icon: <IoHomeOutline style={{ fontSize: "18px" }} />,

            activeIcon: (
                <IoHomeOutline
                    style={{ fontSize: "18px", background: "fff" }}
                />
            ),
        },

        {
            title: "Notifications",

            icon: <IoHomeOutline style={{ fontSize: "18px" }} />,

            activeIcon: (
                <IoHomeOutline
                    style={{
                        fontSize: "18px",
                        color: "#fff",
                        background: "fff",
                    }}
                />
            ),
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
            {/* <Navbar
                item={item}
                setItem={setItem}
                modal={modal}
                setModal={setModal}
            /> */}
            <Header
                item={item}
                setItem={setItem}
                modal={modal}
                setModal={setModal}
                count={count}
                setCount={setCount}
            />
            <Spotlight />
            <Items
                item={item}
                setItem={setItem}
                count={count}
                setCount={setCount}
            />
            <Slicker />
            <Story />
            <Achievement />
            <BottomNavigation
                items={bottomNavItems}
                defaultSelected={0}
                onItemClick={(item) => console.log(item)}
            />
        </>
    );
}

export default Mainpage;
