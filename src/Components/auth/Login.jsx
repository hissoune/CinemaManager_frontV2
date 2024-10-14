import { useFormData } from "../../Hooks/useFormData"; // Import your custom hook

function Login() {
    const { formData, onChange, handleSubmit } = useFormData();

    return (
        <div className="login-popup">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <div>
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        name="email" 
                        value={formData.email || ''} 
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
                        value={formData.password || ''} 
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Login
                </button>
                <button
                    type="button"
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                >
                    Register as a New Client
                </button>
            </form>
        </div>
    );
}

export default Login;
