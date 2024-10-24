import { useFormData } from "../../Hooks/useFormData"; 

function Login() {
    const { formData, onChange, handleSubmit } = useFormData('login');

    return (
        <div className="login-popup p-5">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4" data-testid="login-popup">
                <h2 className="text-xl text-center text-white font-bold mb-4">Login</h2>
                <div>
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        name="email" 
                        placeholder="example@gmail.com"
                        value={formData.email || ''} 
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        required
                        data-testid="email-input"
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
                         data-testid="password-input"
                    />
                </div>
                <button type="submit" className="bg-[#C23C39] text-white py-2 px-4 rounded-lg" data-testid="login-button">
                    Login
                </button>
                
            </form>
        </div>
    );
}

export default Login;
