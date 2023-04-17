import { gsap } from "gsap";
import React, { useLayoutEffect,useEffect, useRef } from "react";
import image1 from "./img/ninera.png";
import image2 from "./img/perrito.png";
import image3 from "./img/limpieza.png";
import image4 from "./img/abuelo.png";
import "./slide_2.scss";


export default function Slide() {
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
      .timeline({ repeat: -1 })
      .from("#image1", { opacity: 0, duration: 0.5, delay: 0, ease: "none", x: 10 })
      .to("#image1",   { opacity: 0, duration: 0.5, delay: 1.5, ease: "none" })
      .from("#image2", { opacity: 0, duration: 0.5, delay: 0, ease: "none" , x: 10})
      .to("#image2",   { opacity: 0, duration: 0.5, delay: 1.5, ease: "none" })
      .from("#image3", { opacity: 0, duration: 0.5, delay: 0, ease: "none" , x: 10})
      .to("#image3",   { opacity: 0, duration: 0.5, delay: 1.5, ease: "none" })
      .from("#image4", { opacity: 0, duration: 0.5, delay: 0, ease: "none" , x: 10})
      .to("#image4",   { opacity: 0, duration: 0.5, delay: 1.5, ease: "none" });
    
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div className="slider" ref={el}>
      <img id="image1" className="imagen" src={image1} alt="Imagewq2" />
      <img id="image2" className="imagen" src={image2} alt="Imawq2" />
      <img id="image3" className="imagen" src={image3} alt="Imadwq2" />
      <img id="image4" className="imagen" src={image4} alt="Imadwq2" />
    </div>
  );
}
