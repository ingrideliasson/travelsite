export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg mb-2">Wanderlust Travel Co.</h3>
          <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#destinations" className="hover:text-white">Destinations</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-white">🌍</a>
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">🐦</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
