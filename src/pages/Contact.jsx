import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  return (
    <main className="py-24 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="text-center mb-16 px-6 sm:px-12 lg:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
          Have questions, feedback, or need assistance? Reach out to us and we'll respond promptly. 
          We value your time and will make sure your concerns are addressed with care.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 grid md:grid-cols-2 gap-16 md:gap-20">
        {/* Left: Contact Info */}
        <div className="order-2 md:order-1">
          <ContactInfo />
        </div>

        {/* Right: Contact Form */}
        <div className="order-1 md:order-2">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
