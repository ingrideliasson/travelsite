import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Destinations", href: "#destinations" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? " backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 text-gray-800 font-poppins">
        <div className="text-2xl font-bold text-white">Wanderlust</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`hover:font-bold transition ${
                  scrolled ? "text-blue-950" : "text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <button
          className={`md:hidden focus:outline-none ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800 px-6 py-4 space-y-4 shadow">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}