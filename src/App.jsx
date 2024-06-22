import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./page/dashboard";
import Kategori from "./page/kategori";
import ProdukKategori1 from "./page/produk/produk-kategori-1";

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
                    <ProdukKategori1 />
                } />
                <Route path="/kategori/2" element={
                    <ProdukKategori1 />
                } />
            </Routes>
        </Router>
    );
}

export default App;