import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./page/dashboard";
import Kategori from "./page/kategori";
import Produk_Katalog from "./page/produk/Produk-Katalog";
import Detail_Produk from "./page/produk/Detail-Product";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/kategori" element={<Kategori />} />
                <Route path="/kategori/:id_kategori" element={<Produk_Katalog />} />
                <Route path="/produk/:id_produk" element={<Detail_Produk />} />
            </Routes>
        </Router>
    );
}

export default App;