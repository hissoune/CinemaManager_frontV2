import { createContext } from 'react';
import useAuth from '../Hooks/useAuth'; 

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const { user, loading } = useAuth(); 

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
