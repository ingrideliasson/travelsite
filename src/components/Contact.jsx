export default function Contact() {
  return (
    <section 
    id="contact" 
    className="py-20 px-6 bg-white bg-cover bg-center min-h-screen"
    style={{ backgroundImage: "url('/images/hero2.jpg')" }}
    >
      <div className="max-w-2xl mx-auto flex flex-col justify-center mt-24">
        <h2 className="text-4xl font-poppins text-blue-950 font-bold mb-14 text-center">Questions? Get in Touch!</h2>
        <form className="space-y-12 ">
          <div>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Your name"
            />
          </div>
          <div>
            {/* <label className="block mb-2 font-medium">Email</label> */}
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="you@example.com"
            />
          </div>
          <div>
            {/* <label className="block mb-2 font-medium">Message</label>  */}
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