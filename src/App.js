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
import Category from "./Components/Includes/Category";
import ProfilePage from "./Components/Screens/ProfilePage";
import ProfileOrder from "./Components/Screens/ProfileOrder";
import ShippingAddress from "./Components/Screens/ShippingAddress";

function App() {
    const [item, setItem] = useState([]);
    const [modal, setModal] = useState(false);
    const [inititalLoader, setInititalLoader] = useState(true);
    const [activeTabs, setActiveTabs] = useState("");

    const fetch = useStore((state) => state.fetchProducts);
    const items = useStore((state) => state.Allproducts);

    useEffect(() => {
        fetch();
    }, []);

    setTimeout(function () {
        setInititalLoader(false);
    }, 2500);

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
                            inititalLoader ? (
                                <>
                                    <div
                                        style={{
                                            background: "#000",
                                            width: "100%",
                                            height: "100vh",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Lottie
                                            options={defaultOptions}
                                            height={250}
                                            width={250}
                                        />
                                    </div>
                                </>
                            ) : (
                                <MainPage
                                    item={item}
                                    setItem={setItem}
                                    modal={modal}
                                    setModal={setModal}
                                    activeTabs={activeTabs}
                                    setActiveTabs={setActiveTabs}
                                />
                            )
                        }
                    />
                    <Route path="category/:category" element={<Category />} />
                    <Route
                        path="category/:category/:id"
                        element={<Elements />}
                    />
                    <Route path="products/:id" element={<Elements />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/orders" element={<ProfileOrder />} />
                    <Route path="/shipping" element={<ShippingAddress />} />
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
