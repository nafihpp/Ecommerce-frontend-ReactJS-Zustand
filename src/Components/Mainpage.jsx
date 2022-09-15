import React from "react";
import Items from "./Screens/Items";
import Navbar from "./Includes/Navbar";
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
                activeTabs={activeTabs}
                setActiveTabs={setActiveTabs}
            />
            <Items item={item} setItem={setItem} />
        </>
    );
}

export default Mainpage;
