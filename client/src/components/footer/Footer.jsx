import React from "react";
import { Link} from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Kategorien</h2>
            <span>Kinderbetreuung</span>
            <span>Au-pair</span>
            <span>Haus & Garten</span>
            <span>Tierbetreuung</span>
            <span>Seniorenbetreuung</span>
           
           
          </div>
          <div className="item">
            <h2> Über uns</h2>
            <span>Impressum</span>
            <span>Partnerships</span>
            <span>Kontakt</span>
            <span>Sicherheit</span>
            <span>Karriere</span>
           
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Hilfe Unterstützung</span>
            <span>Kontakt</span>
            <span>Job Kandidat</span>
            <span>Kunden Hilfe</span>
          </div>
          <div className="item">
            <h2>Gemeinschaft</h2>
            
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            
            <span>Affiliates</span>
            
            <span>Einladen</span>
          
          </div>
          
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
          <Link className="link" to="/">
            <img src="/img/logoGRIS.png" alt="" className="log" />
          </Link>
       
      
          </div>
          <div className="right">
            <span>©2023</span>
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              {/* <img src="/img/linkedin.png" alt="" /> */}
           
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
