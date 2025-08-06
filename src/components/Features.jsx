import { FaGlobeAmericas } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa6";


const features = [
  {
    title: "Curated Experiences",
    icon: <FaGlobeAmericas />,
    description: "Hand-picked itineraries designed for unforgettable moments."
  },
  {
    title: "Local Experts",
    icon: <AiOutlineSafety />,
    description: "Experienced guides with local insights and knowledge."
  },
  {
    title: "24/7 Support",
    icon: <BiSupport />,
    description: "Travel with peace of mind knowing we’re here to help anytime."
  },
  {
    title: "Eco-Friendly Travel",
    icon: <FaHandHoldingHeart />,
    description: "Sustainable practices and responsible tourism always."
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-white" id="features">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl text-blue-950 font-bold font-poppins mb-20">Why Travel With Us?</h2>
        <div className="grid md:grid-cols-4 gap-8 pb-12">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white/60 p-6 rounded-lg font-poppins shadow hover:shadow-lg transition flex flex-col items-center">
              <div className="text-5xl mb-4 ">{f.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}