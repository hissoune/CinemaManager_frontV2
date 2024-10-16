import { useEffect, useState } from "react";
import axiosInstance from "../client/axiosInstance";

export default function useSessionsAdmin() {

    const [sessions, setsessions] = useState([]);
    const [sessionsLoading, setsessionsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getsessions =async ()=>{
        
        setsessionsLoading(true);
         try {
            const response = await axiosInstance.get('/sessions');
            
            setsessions(response.data);

         } catch (error) {
            setError(error)
         }finally{
            setsessionsLoading(false);
         }

    };
    useEffect(()=>{
        getsessions();
    },[])


  return {
    sessions,
    sessionsLoading,
    error,
  }
}

