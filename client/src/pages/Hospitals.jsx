import { useState } from "react";
import { MapPin, Phone, Search, Hospital } from "lucide-react";

export default function Hospitals() {
  const [search, setSearch] = useState("");

  // Mock hospital data
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
      <div className="bg-gray-200 rounded-xl h-64 mb-6 flex items-center justify-center text-gray-600">
        🗺️ Map will be shown here (Google Maps / Leaflet.js integration)
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
                <MapPin size={16} className="text-red-500" /> {hospital.distance}
              </p>
              <p className="text-gray-500 text-sm">
                {hospital.specialties.join(", ")}
              </p>
              <span
                className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                  hospital.type === "Government"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
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
