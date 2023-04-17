import React from "react";
import "./showcat.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import aupair from "./aupair.jpg";
import babysitter from "./babysitter.jpg";
import pet from "./pet.jpg";
import senior from "./senior.jpg";
import raumen from "./raumen.jpg";

function ShowCategorie() {
  return (
    <div className="grid">
      <div className="caja">
        <Link to="/jobs?cat=web">
          <motion.img
            src={babysitter}
            alt="Descripción de la imagen"
            initial={{  y: "10%" }}
            animate={{  y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </div>
      <div className="caja">
        <Link to="/">
          <motion.img
            src={aupair}
            alt="Descripción de la imagen"
            initial={{  y: "10%" }}
            animate={{  y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
        </Link>
      </div>
      <div className="caja">
        <Link to="/">
          <motion.img
            src={senior}
            alt="Descripción de la imagen"
            initial={{  y: "10%" }}
            animate={{  y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
        </Link>
      </div>
      <div className="caja">
        <Link to="/">
          <motion.img
            src={pet}
            alt="Descripción de la imagen"
            initial={{  y: "10%" }}
            animate={{  y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
        </Link>
      </div>
      <div className="caja">
        <Link to="/">
          <motion.img
            src={raumen}
            alt="Descripción de la imagen"
            initial={{  y: "10%" }}
            animate={{  y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
        </Link>
      </div>
    </div>
  );
}

export default ShowCategorie;
