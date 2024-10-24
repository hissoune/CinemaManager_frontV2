import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useFormData } from "../Hooks/useFormData";
import { FaUser, FaEnvelope, FaLock, FaUpload } from "react-icons/fa"; // Importing icons
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const { formData, setFormData, onChange, handleSubmit } = useFormData('updateProfile');
    const { user, loading } = useAuthContext(); 


    const navigate = useNavigate();
  
    const handleMovieClick = (movie) => {
      navigate(`/movies/${movie._id}`, { state: { movie } });
    };
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                password: '', 
            });
        }
    }, [user, setFormData]);

    if (loading) return <p className="text-white">Loading...</p>;

    if (!user) return <p className="text-white">User not found</p>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
            <div className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-4 p-8 bg-gray-700 flex flex-col items-center">
                        <div className="flex justify-center mb-6">
                            <img
                                className="rounded-full w-32 h-32 border-4 border-gray-500 shadow-md transition-transform transform hover:scale-110"
                                src={user.image || "/2405f5d1220d45fef53df0bfe804e104.jpg"}
                                alt="Profile"
                            />
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl text-white font-bold">{user.name}</h1>
                            <span className="text-gray-400">{user.email}</span>
                        </div>
                    </div>

                    <div className="md:col-span-8 p-10">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            encType="multipart/form-data"
                        >
                            <h2 className="text-3xl text-center text-white font-bold mb-4">
                                Update Profile
                            </h2>

                            <div className="relative space-y-2">
                                <label className="block text-white font-semibold">
                                    Name:
                                </label>
                                <div className="flex items-center">
                                    <FaUser className="absolute ml-3 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name || ""}
                                        placeholder="Name"
                                        onChange={onChange}
                                        className="w-full pl-10 px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C23C39] transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="relative space-y-2">
                                <label className="block text-white font-semibold">
                                    Email:
                                </label>
                                <div className="flex items-center">
                                    <FaEnvelope className="absolute ml-3 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email || ""}
                                        placeholder="example@gmail.com"
                                        onChange={onChange}
                                        className="w-full pl-10 px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C23C39] transition-all"
                                        required
                                    />
                                </div>
                            </div>

                          

                            <div className="relative space-y-2">
                                <label className="block text-white font-semibold">
                                    Image:
                                </label>
                                <div className="flex items-center">
                                    <FaUpload className="absolute ml-3 text-gray-400" />
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={onChange}
                                        className="w-full pl-10 px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C23C39] transition-all"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 text-white bg-[#C23C39] rounded-lg font-bold hover:bg-[#a9302e] focus:outline-none focus:ring-4 focus:ring-[#a9302e] transition-all"
                            >
                                Update Profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-4xl mt-10 bg-gray-800 shadow-lg rounded-lg p-8">
                <h2 className="text-2xl text-white font-bold mb-6">Favorite Movies</h2>
                {user.favorites && user.favorites.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {user.favorites.map((movie, index) => (
                            <div
                                key={index}
                                onClick={() => handleMovieClick(movie)}

                                className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                            >
                                <img
                                    src={movie.posterImage}
                                    alt={movie.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-xl text-white font-semibold">{movie.title}</h3>
                                <p className="text-gray-400 line-clamp-4">
                                    {movie.description}
                                    </p>            
                                 </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400">No favorite movies found.</p>
                )}
            </div>
        </div>
    );
}
