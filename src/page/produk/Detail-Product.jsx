import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.css';
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Detail_Produk = () => {
    const { id_produk } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api-v1/product/${id_produk}`);
                console.log("API Response:", response.data); // Debugging: Cek respons dari API

                if (response.data && response.data.data && response.data.data.length > 0) {
                    setProduct(response.data.data[0]); // Ambil objek pertama dari array data
                } else {
                    throw new Error("Produk tidak ditemukan.");
                }
                setAnimate(true);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id_produk]);

    const containerStyle = {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative"
    };

    const contentContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "20px", // Adjust as needed
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

    const imageStyle = {
        width: "100%",
        height: "auto",
        marginBottom: "10px"
    };

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac nisl fringilla varius. Maecenas nec justo vitae ex laoreet posuere. Quisque placerat enim nec ex scelerisque, vel rutrum nunc lacinia. Cras sodales, libero eget dapibus malesuada, turpis elit congue turpis, ac fermentum purus ipsum vel sapien.";

    const goBack = () => {
        navigate("/kategori"); // Kembali ke halaman kategori menggunakan useNavigate
    };

    return (
        <div style={containerStyle}>
            <Link to="/" style={{ position: "absolute", top: "20px", left: "20px", textDecoration: "none", color: "#000" }}>
                <i className="fas fa-arrow-left" style={{ marginRight: "5px" }}></i> Back
            </Link>
            <div className={animate ? "animate" : ""} style={animate ? animateStyle : {}}>
                <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px", color: "#000" }}>Detail Produk</h1>
                <div style={contentContainerStyle}>
                    <div style={cardStyle}>
                        {loading ? (
                            <p>Loading...</p>
                        ) : product ? (
                            <div style={cardContentStyle}>
                                <figure className="image is-4by3">
                                    <img src={product.link_img} alt={product.nama_product} onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300'; }} style={imageStyle} />
                                </figure>
                                <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>{product.nama_product}</h2>
                                <p style={{ fontSize: "16px" }}>{product.detail_product}</p>
                                <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>Harga: Rp {product.price}</p>
                                <p style={{ fontSize: "16px" }}>Stok: {product.stok}</p>
                            </div>
                        ) : (
                            <p>Produk tidak ditemukan.</p>
                        )}
                    </div>
                    <div style={{ marginLeft: "20px", maxWidth: "400px" }}>
                        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px", marginTop:'20px', color: "#000" }}>Deskripsi Produk</h2>
                        <p style={{ fontSize: "16px", textAlign: "justify" }}>{loremIpsum}</p>
                    </div>
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

export default Detail_Produk;