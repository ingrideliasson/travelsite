import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -right-8 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-white text-blue-950 rounded-full p-2 shadow hover:bg-gray-200 transition">
      ❯
    </div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-white text-blue-950 rounded-full p-2 shadow hover:bg-gray-200 transition">
      ❮
    </div>
  </div>
);

const testimonials = [
  {
    name: "Emily R.",
    quote: "The trip was perfectly planned. I’ll never forget the sunrise hike in Peru!",
    image: `${process.env.PUBLIC_URL}/images/woman2.png`,
  },
  {
    name: "James L.",
    quote: "Everything from the flights to the food was handled with care.",
    image: `${process.env.PUBLIC_URL}/images/man1.png`,
  },
  {
    name: "Sofia K.",
    quote: "From start to finish, it felt like a luxury experience. Amazing attention to detail!",
    image: `${process.env.PUBLIC_URL}/images/woman1.png`,
  },
  {
    name: "Hans S.",
    quote: "I made lifelong friends and saw breathtaking places.",
    image: `${process.env.PUBLIC_URL}/images/man2.png`,
  },
  {
    name: "Alice B.",
    quote: "Truly a stress-free and memorable journey. Already planning my next one!",
    image: `${process.env.PUBLIC_URL}/images/woman3.png`,
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="pb-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-4xl text-blue-950 font-poppins font-bold py-8 mb-10">
          What Our Travelers Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4 pb-8 font-arial">
              <div className="bg-cyan-600 p-6 rounded-lg shadow text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-white italic">“{t.quote}”</p>
                <p className="mt-4 font-semibold text-gray-200">{t.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

