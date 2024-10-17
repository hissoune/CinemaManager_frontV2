import { createContext, useContext } from 'react';
import useAuth from '../Hooks/useAuth'; 

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const { user, loading ,login,register,updateUser,favorites,logout} = useAuth(); 

  return (
    <AuthContext.Provider value={{ user, loading ,login,register,updateUser,favorites,logout}}>
      {children}
    </AuthContext.Provider>
  );
}


// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = ()=>{
    return useContext(AuthContext)
}