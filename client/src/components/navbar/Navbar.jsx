import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 811) {
        setIsMobile(true);
      }else{ setIsMobile(false)}
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

    {/* <div className={active || pathname !== "/" ? "navbar active" : "navbar"}> */}
  return (<> {!isMobile ?(
    <div className={`${active ? "navbar active" : "navbar"} ${pathname !== "/" ? "navbar activeBlue" : "navbar"}`}>

      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img src="/img/logoCare.png" alt="" className="log" />
          </Link>
      
        </div>
        <div className="links">
          <span>Erkunden Postleitzahl</span>
         
         
          {!currentUser?.isSeller && <span>Job finden</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/myjobs">
                        Jobs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Jobs
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Einloggen</Link>
              <Link className="link" to="/register">
                <button>Registrieren</button>
              </Link>
            </>
          )}
        </div>
      </div>
   
    </div>) : ( <p className="l" style={{position:"absolute", color:"#FFF", right:"0"}}>🔥🔥Super Menu mobil🔥🔥</p> )}

    </>
  );
}

export default Navbar;
