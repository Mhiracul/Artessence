import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardSlider from "./CardSlider";
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
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-full relative">
      <div>
        <div
          className="h-[80vh] bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60")`,
          }}
        >
          <div
            className="h-full bg-gradient bg-gradient-to-br from-gray-800 to-transparent  
            bg-opacity-20 rounded-md shadow-md card  justify-center px-6 "
            data-aos="fade-up"
          >
            <div className=" py-40  px-12 ">
              <div className="background-content text-left ">
                <div className="background-info reveal">
                  <div className="span rays reveal">
                    <span className="text-red-600 font-bold">A</span>
                    <span className="text-red-600 font-bold">R</span>
                    <span className="text-red-600 font-bold">T</span>
                    <span>E</span>
                    <span>S</span>
                    <span>S</span>
                    <span>E</span>
                    <span>N</span>
                    <span>C</span>
                    <span>E</span>
                  </div>
                  <p className="text-xs max-w-md md:mb-0 mb-2 text-gray-300 font-normal ">
                    At ArtEssence Gallery, we believe that art is not just a
                    creation; its an experience, an emotion, and a way of life.
                  </p>
                  <button className="text-white bg-[#FB320D] px-12 py-2  rounded-md text-[13px]">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`absolute ${
                windowWidth <= 900 ? "top-0" : "-bottom-24"
              } right-0 p-8 px-28 -bottom-24`}
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
