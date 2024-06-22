import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Kategori = () => {
    const [categories, setCategories] = useState([]);
    const [animate, setAnimate] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api-v1/kategori/product");
                if (response.data && response.data.data) {
                    setCategories(response.data.data);
                }
                setAnimate(true);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching categories:", error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const containerStyle = {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    };

    const animateStyle = {
        animation: "fadeIn 1s ease-out"
    };

    const cardStyle = {
        width: "300px",
        border: "2px solid #000000",
        padding: "20px",
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Shadow style with slight elevation
        borderRadius: "8px",
        background: "#fff",
        cursor: "pointer",
        transition: "transform 0.2s ease-out",
        transform: "translateY(0)",
        color: "#000000"
    };

    const goToCategory = (categoryId) => {
        // Navigate to category detail page or perform other actions
        navigate(`/kategori/${categoryId}`);
    };

    return (
        <div style={containerStyle}>
              <Link to="/" style={{ position: "absolute", top: "20px", left: "20px", textDecoration: "none", color: "#000000" }}>
                <i className="fas fa-arrow-left" style={{ marginRight: "5px" }}></i> Back
            </Link>
            <div className={animate ? "animate" : ""} style={animate ? animateStyle : {}}>
                <p style={{
                    fontSize: "90px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    color: "#000000"
                }}>Kategori Produk</p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        categories.length > 0 ? (
                            categories.map(category => (
                                <div key={category.id_kategori_product} style={cardStyle} onClick={() => goToCategory(category.id_kategori_product)}>
                                    <p style={{ fontSize: "18px", fontWeight: "bold" }}>{category.kategori_product}</p>
                                </div>
                            ))
                        ) : (
                            <p>Kategori Tidak Ditemukan.</p>
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

export default Kategori;