export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero1.jpg')" }}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-8xl font-bold md:font-medium font-playfair tracking-wider mt-24 md:mr-8">
          Explore the World
        </h1>

        <div className="mt-4 flex justify-center">
          <div className="backdrop-blur-sm rounded inline-flex">
            <p className="text-sm md:text-lg font-light md:font-medium font-montserrat">
              we make your travel dreams come true
            </p>
          </div>
        </div>

        <button className="mt-6 px-6 py-3 bg-transparent text-black rounded-full shadow-md hover:bg-gray-100 transition border-2">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}