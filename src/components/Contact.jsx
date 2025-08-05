export default function Contact() {
  return (
    <section 
    id="contact" 
    className="py-20 px-6 bg-white bg-cover bg-center"
    style={{ backgroundImage: "url('/images/hero2.jpg')" }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-display mb-6 text-center">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}