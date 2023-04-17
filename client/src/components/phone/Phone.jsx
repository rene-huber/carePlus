import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

const Phone = () => {
const bagRef = useRef(null)
useLayoutEffect(()=>{
const bolsa = bagRef.current;

gsap.fromTo(bolsa,{x:-90},{duration: 1, x:0, 
  scrollTrigger:{
  trigger: bolsa,
  scrub: 1,
  // markers: true,
  start: "top 70%",
 
  
 
 

 
}})

}, [])

  return (
    


<img src="./img/hand.png"  ref={bagRef} className="bolsa" alt="" />




  );
};

export default Phone;
