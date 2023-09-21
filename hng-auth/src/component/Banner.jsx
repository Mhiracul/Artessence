import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardSlider from "./CardSlider";
//import Sekani from "../assets/images/2.jpg";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update windowWidth whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-full relative">
      {/* Rest of the content */}
      <div>
        <div
          className="h-[70vh] bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60")`,
          }}
        >
          <div
            className="h-full bg-gradient bg-gradient-to-br from-gray-800 to-transparent  
            bg-opacity-20 rounded-md shadow-md card  justify-center px-6 "
            data-aos="fade-up"
          >
            <div className=" py-40 ">
              <h1 className="lg:text-4xl md:text-2xl text-xl font-bold text-white  ">
                CREATING QUALITY PHOTOS
              </h1>
              <p className="max-w-md text-gray-300 mt-4 lg:text-[12px] ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                harum totam a deserunt porro quas magnam ipsam voluptatibus in
                reprehenderit.
              </p>
              <button className="text-white bg-[#FB320D] px-12 py-2 mt-2 rounded-md text-[13px]">
                VIEW MORE
              </button>
            </div>
            <div
              className={`absolute ${
                windowWidth <= 900 ? "top-0" : "-bottom-32"
              } right-0 p-8 px-28`}
            >
              <CardSlider />
            </div>{" "}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 py-4 flex gap-5 text-white container px-28 ">
          <a
            href="https://github.com/Mhiracul/Artessence"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl"
          >
            <FaGithub size={20} className="hover:text-[#03032B]" />
          </a>
          <a
            href="https://www.instagram.com/mimi_fab_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mr-4"
          >
            <FaInstagramSquare
              size={20}
              className="hover:text-[bg-gradient-to-r from-yellow-300 via-orange-500 to-blue-600]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
