// src/components/about/AboutMission.jsx
import { motion } from "framer-motion";
import { HeartPulse, Globe2, Sparkles } from "lucide-react";

const values = [
  {
    title: "Our Mission",
    desc: "To deliver world-class healthcare that heals with compassion, innovation, and excellence.",
    icon: <HeartPulse className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Our Vision",
    desc: "A healthier, brighter future for every patient, powered by trust and innovation.",
    icon: <Globe2 className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Our Values",
    desc: "Compassion, Integrity, Innovation, and Collaboration form the pillars of our care.",
    icon: <Sparkles className="w-8 h-8 text-blue-700" />,
  },
];

export default function AboutMission() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Our Mission, Vision & Values
        </h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-16"></div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-10 text-center border border-transparent hover:border-blue-200 hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Icon wrapper */}
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 rounded-full bg-blue-100">
                {val.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {val.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
