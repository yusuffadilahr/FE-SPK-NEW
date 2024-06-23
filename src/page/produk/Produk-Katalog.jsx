import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Produk_Katalog = () => {
    const { id_kategori } = useParams();
    const [kategoriProduk, setKategoriProduk] = useState([]);
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api-v1/product/kategori/${id_kategori}`);
                if (response.data.data.length === 0) {
                    throw new Error('Kategori tidak ditemukan');
                }
                console.log('Response data:', response.data);
                setKategoriProduk(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Mengarahkan ke kategori berikutnya jika terjadi kesalahan
                const nextId = parseInt(id_kategori, 10) + 1;
                navigate(`/kategori/${nextId}`);
            }
        };

        fetchData();
        setAnimate(true);
    }, [id_kategori, navigate]);

    const containerStyle = {
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative"
    };

    const cardStyle = {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    };

    const cardContentStyle = {
        flex: 1,
        display: "flex",
        flexDirection: "column"
    };

    return (
        <div style={containerStyle}>
            <Link to="/kategori" style={{ position: "absolute", top: "20px", left: "20px", textDecoration: "none", color: "#000000" }}>
                <i className="fas fa-arrow-left" style={{ marginRight: "5px" }}></i> Back
            </Link>
            <button onClick={() => navigate('/rekomendasi')} className="button is-black" style={{ 
                position: "absolute",
                top: "60px",
                right: "40px" }}>
                Rekomendasi Produk
            </button>
            <div className={animate ? "animate" : ""}>
                <p style={{
                    fontSize: "60px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    color: "#000000"
                }}>Ini Produk Katalog</p>
                <div className="columns is-multiline is-centered">
                    {kategoriProduk.length > 0 ? (
                        kategoriProduk.map((produk) => (
                            <div key={produk.id_product} className="column is-3">
                                <div className="box" style={cardStyle}>
                                    <div className="card" style={{ height: "100%" }}>
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <img src={produk.link_img} alt={produk.nama_product} onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300'; }} />
                                                {console.log('Image URL:', produk.link_img)}
                                            </figure>
                                        </div>
                                        <div className="card-content" style={cardContentStyle}>
                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-4 is-size-5-mobile">{produk.nama_product}</p>
                                                    <p className="subtitle is-6">{produk.brand}</p>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p>{produk.detail_product}</p>
                                                <p className="title is-5">Harga: {produk.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate {
                    animation: fadeIn 1s ease-out;
                }
            `}</style>
        </div>
    );
}

export default Produk_Katalog;