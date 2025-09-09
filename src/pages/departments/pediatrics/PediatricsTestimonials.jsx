import Testimonials from "../../../components/Testimonials";

export default function PediatricsTestimonials() {
  return (
    <section className="py-16 bg-blue-50">
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
        Patient Testimonials
      </h2>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <Testimonials
          items={[
            {
              name: "Sophia L.",
              role: "Parent",
              quote:
                "The pediatric staff made our child feel comfortable and safe. Incredible care from start to finish.",
              avatar: "/assets/images/testimonials/sophia.jpg",
            },
            {
              name: "Liam R.",
              role: "Parent",
              quote:
                "Excellent pediatric services! Friendly environment and professional staff.",
              avatar: "/assets/images/testimonials/liam.jpg",
            },
          ]}
        />
      </div>
    </section>
  );
}
