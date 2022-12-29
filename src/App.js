import "./App.css";
import MainPage from "./Components/Screens/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Screens/Cart";
import Elements from "./Components/Screens/Elements";
import { React, useState } from "react";
import Login from "./Components/Includes/Login";
import Signup from "./Components/Includes/Signup";
import animationData from "./loader/75400-shopping-bag.json";
import { useEffect } from "react";
import { useStore } from "./store/Products/Products";
import Lottie from "react-lottie";

function App() {
    const [item, setItem] = useState([]);
    const [modal, setModal] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [activeTabs, setActiveTabs] = useState("");

    const fetch = useStore((state) => state.fetchProducts);
    const items = useStore((state) => state.Allproducts);
    useEffect(() => {
        fetch();
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/"
                        element={
                            items?.length !== 0 ? (
                                <MainPage
                                    item={item}
                                    setItem={setItem}
                                    modal={modal}
                                    setModal={setModal}
                                    activeTabs={activeTabs}
                                    setActiveTabs={setActiveTabs}
                                />
                            ) : (
                                <Lottie
                                    options={defaultOptions}
                                    height={400}
                                    width={400}
                                />
                            )
                        }
                    />
                    <Route path="/:id" element={<Elements />} />
                    <Route
                        path="*"
                        element={<h1>404 error the Page is not found!</h1>}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
