import { useState } from "react";
import axiosInstance from "../client/axiosInstance"; 

export default function useSessionsClient() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSessionsByMovieId = async (movieId) => {
  
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(`/public/sessionsForMovis/${movieId}`); 
      
      setSessions(response.data);
    } catch (err) {
      setError(err.message || "Error fetching sessions for the movie");
    } finally {
      setLoading(false);
    }
  };
  

  const getAllSessions = async () => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axiosInstance.get(`/sessions`); 
      setSessions(response.data);
    } catch (err) {
      setError(err.message || "Error fetching all sessions");
    } finally {
      setLoading(false);
    }
  };

  return { sessions, loading, error, getSessionsByMovieId, getAllSessions };
}
