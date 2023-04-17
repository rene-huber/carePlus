import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slide from "../slider/Slide";
import "./Featured.scss";



function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/jobs?search=${input}`);
  };
  return (
    <div className="featured_f">
      <div className="container_f">
        <div className="left">
          <h1>
          Finde vertrauenswürdige Personen, die dir bei Bedarf helfen können<span>.</span>
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input className="buscar"
                type="text"
                placeholder='Gute Betreuung beginnt hier'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Populär:</span>
            <button>Kinderbetreuung</button>
            <button>Tierbetreuung</button>
            <button>Haushaltshilfe</button>
            <button>Postleitzahl</button>
          </div>
        </div>
        <div className="right">
        {/* <img src="./img/limpieza.png" alt="" /> */}
    
   <Slide />
      
        </div>
      </div>
    </div>
  );
}

export default Featured;
