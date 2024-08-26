import { useEffect, useState } from "react";

export const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

console.log(dimensions);
const handleResize = () => {
    setDimensions({
    width: window.innerWidth,
    height: window.innerHeight,
    });
  }
  
useEffect(() => {
  window.addEventListener("resize", handleResize, false);
}, []);
