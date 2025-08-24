import { useState } from "react";
import { MapPin, Phone, Search, Hospital } from "lucide-react";
import HospitalMap from "../components/HospitalMap";

export default function Hospitals() {
  const [search, setSearch] = useState("");

  // Get the API key from environment variables
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Mock hospital data (as you have)
  const hospitals = [
    {
      name: "City Care Hospital",
      distance: "2.1 km",
      specialties: ["Cardiology", "Orthopedics"],
      phone: "+91 98765 43210",
      type: "Private",
    },
    {
      name: "Government General Hospital",
      distance: "3.5 km",
      specialties: ["Emergency", "Neurology", "Surgery"],
      phone: "+91 91234 56789",
      type: "Government",
    },
    {
      name: "Sunshine Multispeciality",
      distance: "5.0 km",
      specialties: ["Pediatrics", "Gynecology", "ENT"],
      phone: "+91 99887 66554",
      type: "Private",
    },
    {
    name: "Green Valley Hospital",
    distance: "1.8 km",
    specialties: ["Dermatology", "Dental", "General Medicine"],
    phone: "+91 98111 22334",
    type: "Private",
  },
  {
    name: "Metro Heart Institute",
    distance: "4.2 km",
    specialties: ["Cardiology", "Cardiac Surgery"],
    phone: "+91 97654 12345",
    type: "Private",
  },
  {
    name: "Shakti Government Hospital",
    distance: "6.1 km",
    specialties: ["Emergency", "Pediatrics", "Orthopedics"],
    phone: "+91 93456 88990",
    type: "Government",
  },
  {
    name: "Apollo Specialty Clinic",
    distance: "2.9 km",
    specialties: ["Neurology", "Oncology", "Nephrology"],
    phone: "+91 94567 11223",
    type: "Private",
  },
  {
    name: "LifeCare Hospital",
    distance: "3.3 km",
    specialties: ["Gynecology", "Urology", "Dermatology"],
    phone: "+91 93221 44556",
    type: "Private",
  },
  {
    name: "Rising Sun Hospital",
    distance: "7.0 km",
    specialties: ["Psychiatry", "ENT", "Rehabilitation"],
    phone: "+91 95432 77889",
    type: "Private",
  },
  {
    name: "Noble Government Medical Center",
    distance: "5.8 km",
    specialties: ["General Surgery", "Emergency", "Medicine"],
    phone: "+91 97865 33445",
    type: "Government",
  },
  {
    name: "Rainbow Children's Hospital",
    distance: "4.9 km",
    specialties: ["Pediatrics", "Neonatology", "Pediatric Surgery"],
    phone: "+91 95678 22331",
    type: "Private",
  },
  {
    name: "HopeCare Hospital",
    distance: "6.7 km",
    specialties: ["Oncology", "Radiology", "Pathology"],
    phone: "+91 99812 77665",
    type: "Private",
  },
  {
    name: "Global Hospital",
    distance: "8.2 km",
    specialties: ["Transplant", "Cardiology", "Gastroenterology"],
    phone: "+91 93456 99887",
    type: "Private",
  },
  {
    name: "Healing Touch Clinic",
    distance: "2.4 km",
    specialties: ["Dermatology", "Cosmetology"],
    phone: "+91 92345 66778",
    type: "Private",
  },
  {
    name: "Swasthya Government Hospital",
    distance: "3.9 km",
    specialties: ["Emergency", "ENT", "General Medicine"],
    phone: "+91 98876 55443",
    type: "Government",
  },
  {
    name: "Fortune Multispeciality Hospital",
    distance: "9.5 km",
    specialties: ["Orthopedics", "Cardiology", "Nephrology"],
    phone: "+91 97765 88991",
    type: "Private",
  },
  {
    name: "Silverline Hospital",
    distance: "4.5 km",
    specialties: ["Gynecology", "IVF", "Neonatology"],
    phone: "+91 93421 88990",
    type: "Private",
  },
  {
    name: "Medicity Super Speciality",
    distance: "10.0 km",
    specialties: ["Neurology", "Oncology", "Cardiac Surgery"],
    phone: "+91 96543 22119",
    type: "Private",
  },
  ];

  // Filter by search
  const filteredHospitals = hospitals.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Hospital className="text-blue-600" /> Hospitals Near Me
      </h1>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search hospital..."
          className="flex-1 border rounded-lg p-2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Search size={18} /> Search
        </button>
      </div>

      {/* Map Section */}
      <div className="bg-gray-200 rounded-xl h-96 mb-6 flex items-center justify-center text-gray-600">
        {/* Pass your API key to the map component */}
        {googleMapsApiKey ? (
          <HospitalMap apiKey={googleMapsApiKey} />
        ) : (
          <p>Maps API key is missing. Check your .env file.</p>
        )}
      </div>

      {/* Hospital List */}
      <div className="grid gap-4">
        {filteredHospitals.map((hospital, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4 flex justify-between items-center hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-lg font-semibold">{hospital.name}</h2>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin size={16} className="text-red-500" />{" "}
                {hospital.distance}
              </p>
              <p className="text-gray-500 text-sm">
                {hospital.specialties.join(", ")}
              </p>
              /* <span
                className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                  hospital.type === "Government"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {hospital.type}
              </span> */
              <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">
                {hospital.type}
              </span>
            </div>
            <a
              href={`tel:${hospital.phone}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Phone size={16} /> Call
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
