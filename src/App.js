import "./App.css";
import MainPage from "./Components/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Screens/Cart";
import Elements from "./Components/Screens/Elements111";
import { React, useState } from "react";
import Helmet from "react-helmet";
import Items from "./Components/Screens/Items";
import Login from "./Components/Includes/Login";
import Signup from "./Components/Includes/Signup";

function App() {
    const [item, setItem] = useState([]);
    const [modal, setModal] = useState(false);
    return (
        <>
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
