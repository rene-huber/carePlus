import React, { useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Chat = () => {
    const [offset, setOffset] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, offset], [0, -offset * 0.3]);

  useEffect(() => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    setOffset(height);
  }, []);

  return (
    <div>
      <motion.img
        style={{ y }}
        src="https://w1.rene-huber.eu/wp-content/uploads/2020/12/logo-huber-1.png"
        alt="Parallax Image"
      />
    </div>
  );
};

export default Chat;
