export default function ContactForm() {
  return (
    <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6 max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          rows="5"
          placeholder="Your message"
          className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
        ></textarea>
      </div>

      <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-2xl font-medium hover:bg-blue-700 transition-all shadow hover:shadow-lg">
        Send Message
      </button>
    </form>
  );
}

