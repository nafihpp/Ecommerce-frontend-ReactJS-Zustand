import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Components/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Screens/Cart";
import Elements from "./Components/Screens/Elements";
import { React, useState } from "react";
import Helmet from "react-helmet";
import Items from "../../client/src/Components/Screens/Items";

function App() {
  const [item, setItem] = useState([]);
  return (
    <>
      <Helmet>
        <title>Buy now Shopping</title>
      </Helmet>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MainPage item={item} setItem={setItem} />}
          />
          <Route
            path="/cart"
            element={<Cart item={item} setItem={setItem} />}
          />
          <Route
            path="/items"
            element={<Items item={item} setItem={setItem} />}
          />
          <Route path="/cart/:id" element={<Elements />} />
          <Route path="*" element={<h1>404 error the Page is not found!</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
