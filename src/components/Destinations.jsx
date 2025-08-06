const destinations = [
  { title: "GREECE", image: "/images/greeceM.jpeg"},
  { title: "ITALY", image: "/images/italyM.jpeg"},
  { title: "TANZANIA", image: "/images/tanzaniaM.jpeg"},
  { title: "MALAYSIA", image: "/images/malaysiaM.jpeg"},
  { title: "PERU", image: "/images/peruM.jpeg"},
  { title: "AUSTRALIA", image: "/images/australiaM.jpeg"},
  { title: "HONG KONG", image: "/images/hongkongM.jpeg"},
  { title: "INDONESIA", image: "/images/indonesiaM.jpeg"},


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
            className="relative bg-white h-96 md:h-[600px] overflow-hidden rounded-lg"
          >
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-full object-cover"
            />

            {/* Text with localized blur */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="backdrop-blur-sm rounded inline-block">
                <p className="text-white text-2xl font-semibold text-center">
                  {dest.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
