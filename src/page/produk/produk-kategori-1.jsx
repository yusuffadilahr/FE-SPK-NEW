import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.css';
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProdukKategori1 = () => {
    const { id_product } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api-v1/product/${id_product}`);
                if (response.data && response.data.data) {
                    setProduct(response.data.data);
                }
                setAnimate(true);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id_product]);

    const containerStyle = {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative"
    };

    const animateStyle = {
        animation: "fadeIn 1s ease-out"
    };

    const cardStyle = {
        width: "300px",
        margin: "10px",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "transform 0.2s ease-out",
        transform: "translateY(0)"
    };

    const cardContentStyle = {
        padding: "20px",
        background: "#fff",
        color: "#000",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    };

    const goBack = () => {
        navigate("/kategori");
    };

    return (
        <div style={containerStyle}>
            <Link to="/" style={{ position: "absolute", top: "20px", left: "20px", textDecoration: "none", color: "#000" }}>
                <i className="fas fa-arrow-left" style={{ marginRight: "5px" }}></i> Back
            </Link>
            <div className={animate ? "animate" : ""} style={animate ? animateStyle : {}}>
                <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px", color: "#000" }}>Detail Produk</h1>
                <div style={cardStyle}>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        product ? (
                            <div style={cardContentStyle}>
                                <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>{product.nama_produk}</h2>
                                <p style={{ fontSize: "16px" }}>{product.deskripsi}</p>
                                <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>Harga: Rp {product.harga}</p>
                                <p style={{ fontSize: "16px" }}>Stok: {product.stok}</p>
                            </div>
                        ) : (
                            <p>Produk tidak ditemukan.</p>
                        )
                    )}
                </div>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

export default ProdukKategori1;