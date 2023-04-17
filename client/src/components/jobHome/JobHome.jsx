import React from "react";
import Social from "../redes/Social";
import Phone from "../phone/Phone";

function JobHome() {
  return (
    <div className="features dark">
    <Social />
      <div className="container">
        <div className="item">
          <div className="titulo">
            <h1>
              In <i>3 Schritten</i> zum perfekten Alltagshelfer:
            </h1>
            <p>
              Putzhilfe, Babysitter, Gassigeher? Sie brauchen nur <i>ein </i>
              Mitgliedskonto für alles
            </p>
          </div>
          <div className="title">
            <img src="./img/check.png" alt="" />
            <p>
              <span style={{ fontWeight: "bold" }}>Anmelden:</span> Um
              loszulegen, beschreiben Sie Ihren Bedarf und erstellen ein Konto.
            </p>
          </div>

          <div className="title">
            <img src="./img/check.png" alt="" />
            <p>
              <span style={{ fontWeight: "bold" }}>Job posten:</span>
              Erhalten Sie Bewerbungen oder sichten Sie lokale Profile, um
              Kandidaten zu identifizieren.
            </p>
          </div>

          <div className="title">
            <img src="./img/check.png" alt="" />
            <p>
              <span style={{ fontWeight: "bold" }}>Kontaktieren:</span> Senden
              Sie Nachrichten und vereinbaren Sie Interviews, prüfen Sie
              Referenze n und wählen Sie diejenigen aus, die Ihren Anforderungen
              entsprechen (kostenpflichtige Dienste).
            </p>
          </div>
          <button>Jetzt registrieren</button>
        </div>
      </div>
      <div className="phone">
        <div className="contenedor">
          <div className="cuadro">
          <Phone /> 
            {/* <img src="./img/hand.png" alt="" /> */}
          </div>

          <div className="cuadro">
            <h1>
              <i>*</i>Auf Jobsuche<i>?</i>
            </h1>
         
            <div className="title">
              <img src="./img/check_2.png" alt="" />
              <p>Einfach! Eröffnen Sie ein Konto für &quot;Betreuer&quot;</p>
            </div>

            <div className="title">
              <img src="./img/check_2.png" alt="" />
              <p>Senden Sie alle angeforderten Anforderungen</p>
            </div>

            <div className="title">
              <img src="./img/check_2.png" alt="" />
              <p>
              Beginnen Sie nach der Genehmigung damit, Ihre Dienste anzubieten
              </p>
            </div>
            <div className="title">
              <img src="./img/check_2.png" alt="" />
              <p>
              Je mehr positive Bewertungen Sie haben, desto mehr Möglichkeiten haben Sie!
              </p>
            </div>
            <button>Als Helfer registrieren</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobHome;


