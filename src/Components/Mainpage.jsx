import React from "react";
import Items from "./Screens/Items";
import Navbar from "./Includes/NavBar11";
import Header from "./Includes/Header";
import Spotlight from "./Includes/Spotlight";
import Achievement from "./Includes/Achievement";
import Story from "./Includes/Story";

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
            <Header
                item={item}
                setItem={setItem}
                modal={modal}
                setModal={setModal}
            />
            <Spotlight />
            <Items item={item} setItem={setItem} />
            <Achievement />
            <Story />
        </>
    );
}

export default Mainpage;
