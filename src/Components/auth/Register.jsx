import { useFormData } from "../../Hooks/useFormData";

function Register() {
    const { formData, onChange, handleSubmit } = useFormData('register');

    return (
        <div className="login-popup p-5">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <h2 className="text-xl text-center text-white font-bold mb-4">Register</h2>
                <div>
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name" 
                        value={formData.name || ''} 
                        placeholder="Name"
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        name="email" 
                        value={formData.email || ''} 
                         placeholder="example@gmail.com"
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        name="password" 
                        placeholder="password"
                        value={formData.password || ''} 
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        required
                    />
                </div>
                <button type="submit" className="bg-[#C23C39] text-white py-2 px-4 rounded-lg">
                    Register
                </button>
               
            </form>
        </div>
    );
}

export default Register
