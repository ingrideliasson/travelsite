export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-display mb-4">About Us</h2>
        <p className="text-gray-600 text-lg font-montserrat">
          At Wanderlust Travel Co., we believe that travel is more than just seeing new places — it’s about creating stories, memories, and connections. With hand-picked destinations and personalized experiences, we help you discover the world in a way that feels meaningful and effortless.
        </p>
        <img
          src="/team.jpg"
          alt="Our Team"
          className="mt-10 rounded-lg shadow-md mx-auto w-full max-w-xl"
        />
      </div>
    </section>
  );
}
