import { useEffect, useState } from 'react';
import { FaPlus, FaEdit, FaBan, FaUserCheck } from 'react-icons/fa'; 
import useAdmins from '../../Hooks/useAdmins'; 

export default function Admins() {
  const { admins, loading, error, fetchAdmins, createAdmin, updateAdmin, banAdmin, unbanAdmin } = useAdmins();
  const [newAdmin, setNewAdmin] = useState({ name: '', email: '', password: '', image: null });
  const [editAdmin, setEditAdmin] = useState(null); // Track which admin is being edited

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    await createAdmin(newAdmin);
    setNewAdmin({ name: '', email: '', password: '', image: null }); 
  };

  const handleUpdateAdmin = async (e) => {
    e.preventDefault();
    if (editAdmin) {
      await updateAdmin(editAdmin._id, newAdmin);
      setEditAdmin(null); // Reset editing state
      setNewAdmin({ name: '', email: '', password: '', image: null }); 
    }
  };

  const handleEditClick = (admin) => {
    setEditAdmin(admin);
    setNewAdmin({ name: admin.name, email: admin.email, password: '', image: null }); // Set current values for editing
  };

  const handleImageChange = (e) => {
    setNewAdmin({ ...newAdmin, image: e.target.files[0] }); // Update the image file
  };

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-3xl font-bold text-white text-center mb-6">Admins Management</h1>
      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-300">{error}</p>}

      <form 
        onSubmit={editAdmin ? handleUpdateAdmin : handleCreateAdmin} 
        className="bg-gray-800 shadow-lg rounded-lg p-6 mb-6 max-w-md mx-auto"
      >
        <h2 className="text-xl font-semibold text-white mb-4">{editAdmin ? 'Edit Admin' : 'Add New Admin'}</h2>
        <div className="mb-4">
          <label className="block text-gray-300">Name:</label>
          <input
            type="text"
            name="name"
            value={newAdmin.name}
            placeholder="Enter Admin Name"
            onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Email:</label>
          <input
            type="email"
            name="email"
            value={newAdmin.email}
            placeholder="example@gmail.com"
            onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Password:</label>
          <input
            type="password"
            name="password"
            value={newAdmin.password}
            placeholder="Enter Password"
            onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
            required
          />
        </div>
        <button type="submit" className="flex items-center justify-center w-full p-2 text-white bg-red-600 rounded-lg hover:bg-red-500 transition duration-200">
          <FaPlus className="mr-2" /> {editAdmin ? 'Update Admin' : 'Add Admin'}
        </button>
      </form>

      <div className="grid grid-cols-1 gap-4">
        {admins?.map((admin) => (
          <div key={admin._id} className={`p-4 bg-gray-800 rounded-lg shadow-md ${admin.banned ? 'opacity-50' : ''}`}>
            <h3 className="text-lg font-semibold text-white">{admin.name}</h3>
            <p className="text-gray-400">{admin.email}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEditClick(admin)}
                className="flex items-center text-red-400 hover:text-red-300 transition duration-200"
              >
                <FaEdit className="mr-2" /> Edit
              </button>
              {admin.banned ? (
                <button
                  onClick={() => unbanAdmin(admin._id)}
                  className="flex items-center text-green-600 hover:text-green-500 transition duration-200"
                >
                  <FaUserCheck className="mr-2" /> Unban
                </button>
              ) : (
                <button
                  onClick={() => banAdmin(admin._id)}
                  className="flex items-center text-red-600 hover:text-red-500 transition duration-200"
                >
                  <FaBan className="mr-2" /> Ban
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
