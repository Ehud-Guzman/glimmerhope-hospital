// CardiologyTestimonials.jsx
import Testimonials from "../../../components/Testimonials";

export default function CardiologyTestimonials() {
  const cardiologyItems = [
    {
      name: "Jane Doe",
      role: "Heart Surgery Patient",
      quote:
        "The cardiology team was amazing! I felt safe and informed throughout my treatment.",
      avatar: "/assets/images/testimonials/jane.jpg",
    },
    {
      name: "John Smith",
      role: "Heart Check-up Patient",
      quote: "Professional care and excellent facilities. I highly recommend this hospital!",
      avatar: "/assets/images/testimonials/john.jpg",
    },
  ];

  return <Testimonials items={cardiologyItems} />;
}
