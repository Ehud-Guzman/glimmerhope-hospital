import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  const contacts = [
    { icon: <Phone className="w-6 h-6 text-blue-600" />, text: "+254 712 345 678", label: "Call Us" },
    { icon: <Mail className="w-6 h-6 text-blue-600" />, text: "support@yourclinic.com", label: "Email Us" },
    { icon: <MapPin className="w-6 h-6 text-blue-600" />, text: "123 Healthcare Avenue, Nairobi, Kenya", label: "Visit Us" },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Our Contact Info</h2>
      <p className="text-gray-600 max-w-lg">
        We're here to help. Reach out to us via phone, email, or visit our office. Our team is ready to assist you.
      </p>

      <ul className="space-y-4">
        {contacts.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 shadow hover:shadow-md transition-all cursor-pointer"
          >
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">{item.icon}</div>
            <div>
              <p className="text-gray-800 font-medium">{item.label}</p>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
