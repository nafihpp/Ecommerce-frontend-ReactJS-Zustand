import React from "react";
import Items from "./Screens/Items";
import Navbar from "./Includes/NavBar11";
import Header from "./Includes/Header";
import Spotlight from "./Includes/Spotlight";
import Helmet from "react-helmet";
import Slicker from "./Screens/Slicker";
import { useSelector } from "react-redux";

function Mainpage({
    item,
    setItem,
    modal,
    setModal,
    activeTabs,
    setActiveTabs,
}) {
    return (
        <>
            <Navbar
                item={item}
                setItem={setItem}
                modal={modal}
                setModal={setModal}
            />
            <Header />
            <Spotlight />
            <Items item={item} setItem={setItem} />
        </>
    );
}

export default Mainpage;
