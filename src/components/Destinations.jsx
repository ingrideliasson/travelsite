const destinations = [
  { title: "GREECE", image: "/images/greece.jpg"},
  { title: "ITALY", image: "/images/italy.jpg"},
  { title: "TANZANIA", image: "/images/tanzania.jpg"},
  { title: "MALAYSIA", image: "/images/malaysia.jpg"},
  { title: "PERU", image: "/images/peru.jpg"},
  { title: "AUSTRALIA", image: "/images/australia.jpg"},
  { title: "HONG KONG", image: "/images/hongkong.jpg"},
  { title: "INDONESIA", image: "/images/indonesia2.jpg"},


];

export default function Destinations() {
  return (
    <section id="destinations" className="py-8 px-6 bg-teal-600 font-baskerville">
      <h2 className="text-3xl font-baskerville font-light text-white text-center mb-8">
        Top Destinations
      </h2>
      <div className="grid md:grid-cols-4 gap-4 md:gap-0">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="relative bg-white h-96 md:h-[600px] overflow-hidden"
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
