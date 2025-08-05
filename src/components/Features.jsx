const features = [
  {
    title: "Curated Experiences",
    icon: "🌍",
    description: "Hand-picked itineraries designed for unforgettable moments."
  },
  {
    title: "Local Experts",
    icon: "🧭",
    description: "Experienced guides with local insights and knowledge."
  },
  {
    title: "24/7 Support",
    icon: "📞",
    description: "Travel with peace of mind knowing we’re here to help anytime."
  },
  {
    title: "Eco-Friendly Travel",
    icon: "🌱",
    description: "Sustainable practices and responsible tourism always."
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-gray-50" id="features">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-display mb-10">Why Travel With Us?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}