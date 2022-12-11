import React, { useState } from "react";
import Items from "./Screens/Items";
import Navbar from "./Includes/NavBar";
// import Header from "./Includes/Header";
import Spotlight from "./Includes/Spotlight";
import Achievement from "./Includes/Achievement";
import Story from "./Includes/Story";
import Slicker from "./Screens/Slicker";

function Mainpage({
    item,
    setItem,
    modal,
    setModal,
    activeTabs,
    setActiveTabs,
}) {
    const [count, setCount] = useState(0);
    return (
        <>
            <Navbar
                item={item}
                setItem={setItem}
                modal={modal}
                setModal={setModal}
            />
            {/* <Header
                item={item}
                setItem={setItem}
                modal={modal}
                setModal={setModal}
                count={count}
                setCount={setCount}
            /> */}
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
        </>
    );
}

export default Mainpage;
