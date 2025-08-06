import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="bg-sky-950 text-white py-10 px-6 font-poppins flex items-center justify-center gap-8">

      <div className="text-gray-300 flex flex-col items-center justify-center gap-2 mt-4">
        <h3 className="text-gray-300 font-medium">Wanderlust Travel Co.</h3>
        <ul className="text-gray-400 text-sm flex flex-col items-center">
          <li>Solgatan 25, 102 92 Göteborg</li>
          <li>+46 31 321 03</li>
        </ul>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="text-gray-300 font-medium mb-3">Follow Us</div>
          <nav className="flex space-x-4 text-2xl text-gray-400">
            <a
              href="https://www.instagram.com"  
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaTiktok />
            </a>
          </nav>
      </div>
    </footer>
  );
}
