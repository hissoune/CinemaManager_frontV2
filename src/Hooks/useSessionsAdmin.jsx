import { useState } from "react";
import axiosInstance from "../client/axiosInstance";

export default function useSessionsAdmin() {
    const [sessions, setSessions] = useState([]);
    const [sessionsLoading, setSessionsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getSessions = async () => {
        setSessionsLoading(true);
        try {
            const response = await axiosInstance.get('/sessions');
            setSessions(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setSessionsLoading(false);
        }
    };
    const createSession = async (sessionData) => {
       
        
        setSessionsLoading(true);
        try {
          
            const response = await axiosInstance.post(`/sessions/create`, sessionData);
            
        
    
        
            setSessions((prevSessions) => [...prevSessions, response.data]);
        } catch (error) {
            setError(error);
        } finally {
            setSessionsLoading(false);
        }
    };
    

    const updateSession = async (sessionId, updatedData) => {
        setSessionsLoading(true);
        console.log(updatedData);
        
        try {
            const response = await axiosInstance.put(`/sessions/update/${sessionId}`, updatedData);
            console.log(response);
            
            setSessions((prevSessions) =>
                prevSessions.map((session) =>
                    session.id === sessionId ? response.data : session
                )
            );
        } catch (error) {
            setError(error);
        } finally {
            setSessionsLoading(false);
        }
    };

    const deleteSession = async (sessionId) => {

        
        setSessionsLoading(true);
        try {
            await axiosInstance.delete(`/sessions/delete/${sessionId}`);
            setSessions((prevSessions) =>
                prevSessions.filter((session) => session._id !== sessionId)
            );
            await getSessions();
        } catch (error) {
            setError(error);
        } finally {
            setSessionsLoading(false);
        }
    };

 

    return {
        sessions,
        sessionsLoading,
        error,
        createSession,
        updateSession,
        deleteSession,
        getSessions,
    };
}
