import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage.jsx";
import CartListPage from "./pages/CartListPage.jsx";
import Helper from "./utility/Helper.js";
import LoginPage from "./pages/LoginPage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const App = () => {
  if (Helper.isLogin()) {
    return (
        <BrowserRouter>
          <Routes>
            <Route path= "/" element={<ProductListPage/>}></Route>
              <Route path= "/cart-list" element={<CartListPage/>}></Route>
              <Route path= "*" element={<PageNotFound/>}></Route>
          </Routes>
        </BrowserRouter>
    )
  }
  else {
      return (
          <BrowserRouter>
              <Routes>
                  <Route path= "/" element={<ProductListPage/>}></Route>
                  <Route path= "/user-login" element={<LoginPage/>}></Route>
                  <Route path= "/verify" element={<VerifyPage/>}></Route>
                  <Route path= "*" element={<PageNotFound/>}></Route>
              </Routes>
          </BrowserRouter>
      )
  }
};

export default App;
