import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useFormData } from "../Hooks/useFormData";

export default function Profile() {
    const { formData, setFormData, onChange, handleSubmit } = useFormData('updateProfile');
    const { user, loading } = useAuthContext(); 

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                password: '', 
            });
        }
    }, [user, setFormData]);

    if (loading) return <p>Loading...</p>;

    if (!user) return <p>User not found</p>;

    return (
        <div>
            <div className="flex flex-col justify-center items-center p-6 ">
                <div className="grid grid-cols-12 gap-1 bg-slate-700 text-white">
                    <div className="col-span-4 p-10">
                        <div className="p-3 flex justify-center">
                            <img className="rounded-full w-24 h-24" src="/2405f5d1220d45fef53df0bfe804e104.jpg" alt="Profile" />
                        </div>
                        <div className="p-3 text-2xl text-center">
                            {/* Render user info if available */}
                            <h1>{user.name}</h1>
                            <span>{user.email}</span>
                        </div>
                    </div>

                    <div className="col-span-8 p-10">
                        <div className="login-popup p-5">
                            <form onSubmit={handleSubmit} className="flex flex-col space-y-4" encType="multipart/form-data">
                                <h2 className="text-xl text-center text-white font-bold mb-4">Update Profile</h2>

                                <div>
                                    <label className="block text-gray-700">Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name || ''}  // Controlled by formData
                                        placeholder="Name"
                                        onChange={onChange}
                                        className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email || ''}  // Controlled by formData
                                        placeholder="example@gmail.com"
                                        onChange={onChange}
                                        className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password || ''}  // Controlled by formData
                                        onChange={onChange}
                                        className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none"
                                        
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Image:</label>
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={onChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                        required
                                    />
                                </div>

                                <button type="submit" className="bg-[#C23C39] text-white py-2 px-4 rounded-lg">
                                    Update Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
