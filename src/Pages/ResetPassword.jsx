import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function ResetPassword() {
  const { resetPassword, error } = useAuthContext();
  const { token } = useParams(); 
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await resetPassword(token, newPassword);
      setMessage('Password reset successfully! You can now log in.'); 
      setNewPassword('');
    } catch (err) {
      setMessage('An error occurred. Please try again. ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white mb-6">Set New Password</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-white font-semibold">New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C23C39]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-[#C23C39] rounded-lg font-bold hover:bg-[#a9302e] focus:outline-none focus:ring-4 focus:ring-[#a9302e]"
            disabled={loading}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>

          {message && <p className="text-green-500 mt-4 text-center">{message}</p>}
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
