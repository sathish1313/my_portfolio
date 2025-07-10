// src/components/VantaBackground/VantaBackground.jsx
import React, { useEffect, useRef } from "react";
import "./VantaBackground.css";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;

    if (window.VANTA && window.THREE && vantaRef.current) {
      vantaEffect = window.VANTA.RINGS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="vanta-mobile-bg" />;
};

export default VantaBackground;
