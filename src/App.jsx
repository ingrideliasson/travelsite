import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="text-gray-800 scroll-smooth">
      <Navbar />
      <Hero />
      <Destinations/>
      <Features />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
