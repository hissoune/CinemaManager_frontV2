import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoutes({ children, role }) {
    const { user, loading } = useAuthContext();
    const [redirect, setRedirect] = useState(false);
  
    useEffect(() => {
      if (!loading && !user) {
        const timer = setTimeout(() => setRedirect(true), 500); 
        return () => clearTimeout(timer);
      }
    }, [loading, user]);
  
    if (loading) return <div>Loading...</div>;
  
    if (user) {
      if (role) {
        return role === user.role ? children : <Navigate to="/forbidden" />;
      }
      return children;
    }
}