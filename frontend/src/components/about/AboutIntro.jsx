// src/components/about/AboutIntro.jsx
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 mt-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Who We Are
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-blue-700">GlimmerHope Hospital</span>, 
            we believe every life deserves exceptional care. For decades, we’ve served 
            our community with cutting-edge medical technology, world-class doctors, 
            and a culture of compassion. Our facilities combine innovation with empathy, 
            ensuring every patient feels at home.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/assets/images/about/hero.jpg"
            alt="Hospital building"
            className="rounded-3xl shadow-xl object-cover h-96 w-full"
          />
          {/* Decorative overlay */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
