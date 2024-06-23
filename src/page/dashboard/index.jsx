import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.css';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const Navigate = useNavigate();

    const handleSubmit = () => {
        Navigate("/kategori");
    }

    const containerStyle = {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    };

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div style={containerStyle}>
            <div className={animate ? "animate" : ""}>
                <p style={{
                    fontSize: "60px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    color: "#000000"
                }}>Rekomendasi Skincare</p>
                <button className="button is-black" style={{
                    borderRadius: "10px",
                    padding: "10px 50px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    transition: "background-color 0.3s ease", // Transisi perubahan warna latar belakang
                    backgroundColor: "#000000", // Warna latar belakang saat normal
                    color: "#ffffff", // Warna teks saat normal
                }} onClick={handleSubmit}
                   onMouseOver={(e) => e.target.style.backgroundColor = '#333'} // Mengubah warna latar belakang saat hover
                   onMouseOut={(e) => e.target.style.backgroundColor = '#000000'} // Mengembalikan warna latar belakang saat keluar dari hover
                >
                    Mulai
                </button>
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

export default Dashboard;