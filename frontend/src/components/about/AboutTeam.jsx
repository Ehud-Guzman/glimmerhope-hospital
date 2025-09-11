// src/components/about/AboutTeam.jsx
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    img: "/assets/images/team/Aishamwangi.jpg",
  },
  {
    name: "Dr. James Lee",
    role: "Head of Cardiology",
    img: "/assets/images/team/dr-john.jpg",
  },
  {
    name: "Dr. Lucretia Njeri",
    role: "Lead Pediatrician",
    img: "/assets/images/team/Dr-Grace.jpg",
  },
];

export default function AboutTeam() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Meet Our Experts
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          A team of world-class professionals committed to compassionate care
          and cutting-edge medicine.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {team.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay social icons */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                  <a
                    href="#"
                    className="p-2 bg-white rounded-full shadow hover:bg-blue-50"
                  >
                    <Linkedin className="w-5 h-5 text-blue-700" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white rounded-full shadow hover:bg-blue-50"
                  >
                    <Twitter className="w-5 h-5 text-sky-500" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-blue-700 font-medium mb-2">
                  {person.role}
                </p>
                <p className="text-gray-600 text-sm">
                  Dedicated to delivering excellence in healthcare and patient
                  well-being.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
