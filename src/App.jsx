import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./page/dashboard";
import Kategori from "./page/kategori";
import Produk_Katalog_1 from "./page/produk/produk-katalog-1";
import Produk_Katalog_2 from "./page/produk/produk-katalog-2";
import Produk_Katalog_3 from "./page/produk/produk-katalog-3";
import Produk_Katalog_4 from "./page/produk/produk-katalog-4";

const App = () => {
    return (

        <Router>
            <Routes>
                <Route path="/" element={
                    <Dashboard />
                } />
                <Route path="/kategori" element={
                    <Kategori />
                } />
                <Route path="/kategori/1" element={
                    <Produk_Katalog_1 />
                } />
                <Route path="/kategori/2" element={
                    <Produk_Katalog_2 />
                } />
                <Route path="/kategori/3" element={
                    <Produk_Katalog_3 />
                } />
                <Route path="/kategori/4" element={
                    <Produk_Katalog_4 />
                } />
            </Routes>
        </Router>
    );
}

export default App;