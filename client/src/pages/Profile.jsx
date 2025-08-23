import { useState, useContext, useEffect } from "react";
import { User, Mail, Phone, MapPin, Droplet, Heart, Edit } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    abhaId: "",
    email: "",
    phone: "",
    address: "",
    bloodGroup: "",
    allergies: "",
    conditions: "",
  });

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || "",
        abhaId: "****"+user.abhaId.slice(-4) || "",
        email: user.email || "",
        phone: user.contact || "",
        address: user.address || "",
        bloodGroup: user.bloodGroup || "",
        allergies: user.allergies.join(", ") || "",
        conditions: user.chronicConditions.join(", ") || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);
    alert("✅ Profile updated successfully!");
  };

  if (!user) {
    return (
      <div className="p-6 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-700 mb-8">👤 Profile</h2>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-6 mb-10 hover:shadow-xl transition">
        <img
          src={`https://ui-avatars.com/api/?name=${profile.name}&background=4DD0E1&color=fff&rounded=true&size=100`}
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-md"
        />
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">{profile.name}</h3>
          <p className="text-gray-500 flex items-center gap-2">
            <User size={18} className="text-blue-500" /> ABHA ID: {profile.abhaId}
          </p>
          <button
            onClick={() => setEditMode(!editMode)}
            className="mt-2 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-lg shadow hover:opacity-90 transition"
          >
            <Edit size={16} /> {editMode ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white shadow rounded-xl p-6 space-y-4">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Contact Information</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={18} className="text-blue-500" />
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                />
              ) : (
                <p>{profile.email}</p>
              )}
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone size={18} className="text-blue-500" />
              {editMode ? (
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                />
              ) : (
                <p>{profile.phone}</p>
              )}
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin size={18} className="text-blue-500" />
              {editMode ? (
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                />
              ) : (
                <p>{profile.address}</p>
              )}
            </div>
          </div>
        </div>

        {/* Medical Info */}
        <div className="bg-white shadow rounded-xl p-6 space-y-4">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Medical Information</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <Droplet size={18} className="text-red-500" />
              {editMode ? (
                <input
                  type="text"
                  name="bloodGroup"
                  value={profile.bloodGroup}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                />
              ) : (
                <p>Blood Group: {profile.bloodGroup}</p>
              )}
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Heart size={18} className="text-pink-500" />
              {editMode ? (
                <input
                  type="text"
                  name="allergies"
                  value={profile.allergies}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                />
              ) : (
                <p>Allergies: {profile.allergies}</p>
              )}
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Heart size={18} className="text-green-500" />
              {editMode ? (
                <input
                  type="text"
                  name="conditions"
                  value={profile.conditions}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                />
              ) : (
                <p>Conditions: {profile.conditions}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      {editMode && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
