import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/Product/Product";
import ProductPage from "../ProductPage/ProductPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='*' element={<Home/>}/>
            <Route path='/sweet-bars' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/sweet-bars/:id' element={<ProductPage/>}/>
        </Routes>
    );
};

export default AppRouter;
