import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

function App() {
  const [mousePosition, setMousePoisiton] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  console.log(mousePosition);
  useEffect(() => {
    const Mousemove = (e) => {
      setMousePoisiton({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", Mousemove);
    return () => {
      window.removeEventListener("mousemove", Mousemove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 150,
      width: 150,
      backgroundColor: "purple",
      mixBlendMode: "difference",
    },
  };

  const MouseEnter = () => {
    setCursorVariant("text");
  };
  const MouseLeave = () => {
    setCursorVariant("default");
  };
  return (
    <div className="App">
      <motion.h1
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}
        className="title"
        animate={{
          x: 50,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
      >
        Love You Baby
      </motion.h1>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
}

export default App;
