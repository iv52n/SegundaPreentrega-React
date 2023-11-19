import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/cart" element={<Cart />}/>
          <Route exact path="/itemListContainer" element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<ItemListContainer/>} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
