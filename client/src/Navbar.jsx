export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4">
      <h2 className="text-xl font-semibold text-gray-700">Welcome Back 👋</h2>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </div>
  );
}
