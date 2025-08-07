const destinations = [
  {
    title: "GREECE",
    image: `${process.env.PUBLIC_URL}/images/greeceM.jpeg`,
    description: "Island-hopping, ancient ruins, and seaside sunsets. Explore whitewashed villages, fresh seafood, and the Aegean breeze."
  },
  {
    title: "ITALY",
    image: `${process.env.PUBLIC_URL}/images/italyM.jpeg`,
    description: "Art, pasta, vineyards, and romantic cities. From Rome to Venice, every corner tells a story of beauty and flavor."
  },
  {
    title: "TANZANIA",
    image: `${process.env.PUBLIC_URL}/image/tanzaniaM.jpeg`,
    description: "Safari adventures and Mount Kilimanjaro. Witness the Great Migration and experience Africa’s wild heart up close."
  },
  {
    title: "MALAYSIA",
    image: `${process.env.PUBLIC_URL}/images/malaysiaM.jpeg`,
    description: "Cultural fusion and rainforest escapes. Discover vibrant cities, lush jungles, and hidden island paradises."
  },
  {
    title: "PERU",
    image: `${process.env.PUBLIC_URL}/images/peruM.jpeg`,
    description: "Machu Picchu and Andean explorations. Uncover ancient civilizations and dramatic landscapes in the Sacred Valley."
  },
  {
    title: "AUSTRALIA",
    image: `${process.env.PUBLIC_URL}/images/australiaM.jpeg`,
    description: "Coral reefs, surf towns, and the outback. Dive into diverse ecosystems and laid-back coastal culture."
  },
  {
    title: "HONG KONG",
    image: `${process.env.PUBLIC_URL}/images/hongkongM.jpeg`,
    description: "Skyline views and street food vibes. A dynamic blend of East and West with nonstop energy and flavor."
  },
  {
    title: "INDONESIA",
    image: `${process.env.PUBLIC_URL}/images/indonesiaM.jpeg`,
    description: "Island getaways and tropical serenity. From Bali to Borneo, every island is a world of its own to discover."
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="bg-white font-baskerville scroll-mt-16">
      <h2 className="text-4xl font-poppins font-bold text-blue-950 text-center py-8">
        Top Destinations
      </h2>
      <div className="grid md:grid-cols-4 gap-4 md:gap-8 px-4">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="relative group bg-white h-96 md:h-[600px] overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="backdrop-blur-sm rounded px-4 py-2">
                <p className="text-white text-2xl font-semibold text-center">
                  {dest.title}
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-6">
              <p className="font-poppins text-white text-base md:text-lg mt-48">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
