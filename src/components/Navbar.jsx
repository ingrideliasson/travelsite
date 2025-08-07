import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", hash: "#hero" },
    { label: "Destinations", hash: "#destinations" },
    { label: "Contact", hash: "#contact" },
  ];

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 text-gray-800 font-poppins">
        {/* Logo */}
        {location.pathname === "/" ? (
          <Link
            to="/#hero"
            className={`text-2xl font-bold ${
              scrolled ? "text-blue-950" : "text-white"
            }`}
          >
            Wanderlust
          </Link>
        ) : (
          <Link
            to="/"
            className={`text-2xl font-bold ${
              scrolled ? "text-blue-950" : "text-white"
            }`}
          >
            Wanderlust
          </Link>
        )}

        {/* Desktop navigation links */}
        <ul className="flex gap-8 text-sm font-semibold items-center ml-auto">
          {navItems.map((item) => (
            <li key={item.hash}>
              <Link
                to={`/${item.hash}`}
                className={`hover:font-bold transition ${
                  scrolled ? "text-blue-950" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/book"
              className={`hover:font-bold transition ${
                scrolled ? "text-blue-950" : "text-white"
              }`}
            >
              Book a Trip
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


