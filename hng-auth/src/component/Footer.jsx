import { FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-[#111827] py-2 text-center">
      <div className="flex items-center justify-center mb-4">
        <a
          href="https://www.instagram.com/mimi_fab_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl mr-4"
        >
          <FaInstagram color="#111827" size={18} />
        </a>

        <a
          href="https://github.com/Mhiracul/Artessence"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <FaGithub color="#111827" size={18} />
        </a>
      </div>

      <p className="text-sm font-semibold">© 2023 Art Essense by Miracle 3️⃣</p>
    </footer>
  );
};

export default Footer;
