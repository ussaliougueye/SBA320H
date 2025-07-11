import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cadre from "./Component";
import "./Component.css";

function CityDetail() {
  const { cityName } = useParams();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="city-detail-page">
      <div className="header">
        <button onClick={handleBackToHome} className="back-button">
          ← Retour à l'accueil
        </button>
        <h1>Météo pour {decodeURIComponent(cityName)}</h1>
      </div>

      <div className="weather-detail-container">
        <Cadre city={decodeURIComponent(cityName)} clickable={false} />
      </div>
    </div>
  );
}

export default CityDetail;
