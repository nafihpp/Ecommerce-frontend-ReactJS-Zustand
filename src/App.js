import "./App.css";
import MainPage from "./Components/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Screens/Cart";
import Elements from "./Components/Screens/Elements";
import { React, useState } from "react";
import Items from "./Components/Screens/Items";
import Login from "./Components/Includes/Login";
import Signup from "./Components/Includes/Signup";
import animationData from "./loader/75400-shopping-bag.json";

function App() {
    const [item, setItem] = useState([]);
    const [modal, setModal] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [activeTabs, setActiveTabs] = useState("");

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
            {isLoading ? (
                <div
                    style={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
                    <h1> loading </h1>
                </div>
            ) : null}
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/"
                        element={
                            <MainPage
                                item={item}
                                setItem={setItem}
                                modal={modal}
                                setModal={setModal}
                                activeTabs={activeTabs}
                                setActiveTabs={setActiveTabs}
                            />
                        }
                    />
                    <Route
                        path="/cart"
                        element={<Cart item={item} setItem={setItem} />}
                    />
                    <Route
                        path="/items"
                        element={<Items item={item} setItem={setItem} />}
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
