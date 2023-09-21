import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [bubbles, setBubbles] = useState([]);

  const handleMouseMove = (e) => {
    const newBubbles = [];
    for (let i = 0; i < 1; i++) {
      newBubbles.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 3 + 2,
        key: Date.now() + i,
        angle: Math.random() * 360,
        speed: Math.random() * 3 + 1,
      });
    }
    setBubbles([...bubbles, ...newBubbles]);
  };

  const handleMouseLeave = () => {
    setBubbles([]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBubbles((prevBubbles) =>
        prevBubbles
          .map((bubble) => {
            const angleInRads = (bubble.angle * Math.PI) / 180;
            const x = bubble.x + Math.cos(angleInRads) * bubble.speed;
            const y = bubble.y - Math.sin(angleInRads) * bubble.speed;
            if (y < -100) {
              return null;
            }
            return {
              ...bubble,
              x,
              y,
            };
          })
          .filter(Boolean)
      );
    }, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="w-full fixed  bg-gradient bg-gradient-to-br from-gray-300 to-transparent  
    bg-opacity-20 rounded-md  card shadow-lg flex justify-between py-2 z-[99999]  items-center  font-bold cursor-pointer  text-[#03032B] md:px-12 px-6"
    >
      <div className="hidden md:block container">
        <h1 className="text-xl text-black">ArtEssence</h1>
      </div>

      {/* menu */}
      <nav onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <ul className="hidden md:flex gap-14  font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>

          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        {bubbles.map((bubble) => (
          <div
            key={bubble.key}
            style={{
              position: "absolute",
              top: bubble.y - bubble.size / 2,
              left: bubble.x - bubble.size / 2,
              width: bubble.size,
              height: bubble.size,
              borderRadius: "50%",
              backgroundColor: "#FB320D",
              zIndex: 1,
            }}
          />
        ))}
      </nav>
      <div
        onClick={handleClick}
        className="z-10 flex justify-between w-full md:hidden"
      >
        <h1 className="text-black">ARTESSSENCE</h1>
      </div>

      <div onClick={handleClick} className="md:hidden z-10 ">
        {!nav ? <FaBars color="#fff" /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-60 px-2 bg-[#fff] flex flex-col justify-center items-start"
        }
      >
        <Link
          to=""
          className="px-4 py-2 lg:py-0 text-[#03032B] border-b-2 w-full font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block "
        >
          Home
        </Link>
        <Link
          to=""
          className="px-4 py-2 lg:py-0 text-[#03032B] border-b-2 w-full  font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          About
        </Link>
        <Link
          to=""
          className="px-4 py-2 lg:py-0 text-[#03032B] border-b-2 w-full font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
