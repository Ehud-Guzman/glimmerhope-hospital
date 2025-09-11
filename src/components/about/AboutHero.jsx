// src/components/about/AboutHero.jsx
export default function AboutHero() {
  return (
    <section
      className="relative h-[28rem] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/about/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-blue-700">
            About GlimmerHope
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            A legacy of compassionate healthcare and innovative treatments for every patient.
          </p>
        </div>
      </div>
    </section>
  );
}
