import { useParams, Link } from "react-router-dom";
import doctorsData from "./doctorsData";
import { ArrowLeft, Calendar, Clock, Star, MapPin, Phone, Mail, Award } from "lucide-react";
import { slugify } from "../../utils/slugify";
import { useState } from "react";

export default function DoctorProfile() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const doctor = doctorsData.find((doc) => slugify(doc.name) === slug);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-20 flex items-center justify-center px-4">
        <div className="max-w-md text-center bg-white rounded-2xl shadow-lg p-8">
          <p className="text-gray-600 text-lg mb-6">Doctor not found 😔</p>
          <Link
            to="/doctors"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  // Calculate average rating (mock data)
  const averageRating = 4.7;
  const reviewCount = 142;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link
          to="/doctors"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Doctors
        </Link>

        {/* Profile card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="md:flex">
            {/* Doctor image section */}
            <div className="md:w-2/5 p-8 bg-gradient-to-b from-blue-50 to-indigo-50/30 flex flex-col items-center">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-64 h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-semibold">{averageRating}</span>
                  <span className="text-gray-500 ml-1">({reviewCount})</span>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span>{slugify(doctor.name, { lower: true })}@healthcare.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                    <span>Medical Tower, Floor 3, Room 305</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor info section */}
            <div className="md:w-3/5 p-8">
              <div className="border-b border-gray-100 pb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {doctor.specialty}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {doctor.department}
                  </span>
                </div>
                <p className="text-gray-600">15+ years of experience • MD, Board Certified</p>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-100">
                <nav className="-mb-px flex space-x-8">
                  {["overview", "experience", "reviews", "availability"].map((tab) => (
                    <button
                      key={tab}
                      className={`py-4 px-1 text-sm font-medium capitalize transition-colors duration-150 ${
                        activeTab === tab
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-500 hover:text-gray-700 border-transparent"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab content */}
              <div className="py-6">
                {activeTab === "overview" && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">About {doctor.name.split(' ')[0]}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {doctor.name} is a board-certified {doctor.specialty.toLowerCase()} with over 15 years of 
                      experience specializing in {doctor.department.toLowerCase()} care. {doctor.name.split(' ')[0]} 
                      completed medical training at Johns Hopkins University and has published numerous 
                      research papers in prestigious medical journals.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-600">Board Certified</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-600">Minimal Wait Time</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "experience" && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Education & Experience</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <Award className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Johns Hopkins University</h4>
                          <p className="text-sm text-gray-600">Medical Degree, 2005-2009</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <Award className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Massachusetts General Hospital</h4>
                          <p className="text-sm text-gray-600">Residency Program, 2009-2012</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
                
                {activeTab === "reviews" && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Patient Reviews</h3>
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-5 h-5 ${star <= Math.floor(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold">{averageRating} out of 5</span>
                      </div>
                      <p className="text-sm text-gray-600">Based on {reviewCount} patient reviews</p>
                    </div>
                    
                    {/* Sample review */}
                    <div className="border border-gray-100 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                        <div>
                          <h4 className="font-medium">Sarah Johnson</h4>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${star <= 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Dr. {doctor.name.split(' ')[0]} was incredibly thorough and took the time to answer all my questions. 
                        The staff was friendly and the wait time was minimal. Highly recommend!
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === "availability" && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Availability</h3>
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium">Next available: Tomorrow at 10:00 AM</span>
                      </div>
                    </div>
                    
                    <h4 className="font-medium text-gray-800 mb-3">Regular Schedule</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex justify-between">
                        <span>Monday - Thursday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Friday</span>
                        <span>9:00 AM - 3:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 2:00 PM (Alternating)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Additional section for specialties */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Specialties & Treatments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Preventive Care",
              "Chronic Disease Management",
              "Diagnostic Procedures",
              "Patient Education"
            ].map((specialty, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}