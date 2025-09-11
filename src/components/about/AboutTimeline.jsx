// src/components/about/AboutTimeline.jsx
import { motion } from "framer-motion";

export default function AboutTimeline() {
  const milestones = [
    {
      year: "1998",
      event: "Founded with a vision for compassionate healthcare.",
      img: "/assets/images/timeline/founded.jpg",
    },
    {
      year: "2005",
      event: "Expanded with state-of-the-art surgical facilities.",
      img: "/assets/images/timeline/surgery.jpg",
    },
    {
      year: "2015",
      event: "Introduced advanced cancer and neurology centers.",
      img: "/assets/images/timeline/neuroscience.jpg",
    },
    {
      year: "2022",
      event: "Recognized among the top hospitals in the region.",
      img: "/assets/images/timeline/award.jpg",
    },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
        Our Journey
      </h2>

      <div className="relative border-l-4 border-blue-600">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`mb-16 ml-8 relative flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="absolute -left-11 top-6 w-6 h-6 bg-blue-600 rounded-full shadow-lg border-4 border-white"></div>

            {/* Text */}
            <div className="bg-white p-6 rounded-2xl shadow-md w-full md:w-1/2">
              <h3 className="text-xl font-bold text-blue-700 mb-3">{m.year}</h3>
              <p className="text-gray-700">{m.event}</p>
            </div>

            {/* Image */}
            <img
              src={m.img}
              alt={m.year}
              className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-md"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
