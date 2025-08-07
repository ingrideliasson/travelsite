export default function Contact() {
  return (
    <section 
    id="contact" 
    className="py-20 px-6 bg-white bg-cover bg-center min-h-screen"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero2.jpg)` }}
    >
      <div className="max-w-2xl mx-auto flex flex-col justify-center mt-24">
        <h2 className="text-4xl font-poppins text-blue-950 font-bold text-center">Questions? Get in Touch!</h2>
        <p className="mb-14 text-center font-montserrat text-blue-950">We answer all inquires within 24 hours.</p>
        <form className="space-y-12 ">
          <div>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Your name"
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <textarea
              rows="5"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-cyan-700 text-white px-6 py-3 rounded hover:bg-cyan-800 transition"
          >
            Send Message
          </button>
        </form>
        </div>
    </section>
  );
}