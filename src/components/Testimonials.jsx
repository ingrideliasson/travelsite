const testimonials = [
  {
    name: "Emily R.",
    quote: "The trip was perfectly planned. I’ll never forget the sunrise hike in Peru!",
    image: "/person1.jpg",
  },
  {
    name: "James L.",
    quote: "Everything from the flights to the food was handled with care. Highly recommend.",
    image: "/person2.jpg",
  },
  {
    name: "Sofia K.",
    quote: "I felt safe and cared for the entire trip. This is my new go-to agency!",
    image: "/person3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-display mb-10">What Our Travelers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <p className="mt-4 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
