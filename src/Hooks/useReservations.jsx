import { useState } from 'react';
import axiosInstance from '../client/axiosInstance';

export default function useReservations() {
     const [reservations,setReservations]=useState([]) ;
     const [loading,setLoading]=useState(false) ;
     const [error,setError]=useState(null) ;


   const fetchReservations = async () => {
    setLoading(true);
    try {
        const response = await axiosInstance.get('/reservations');
        
        setReservations(response.data);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
        
    };
    
    const fetchReservationsAdmin = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get('/reservations/admin');
             console.log(response.data);
             
            setReservations(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
            
        };

   const createReservation = async (reservationData) => {
    try {
          const response = await axiosInstance.post('/reservations', {
            seats: reservationData.seats,
            session: reservationData.session,
        });
        return response.data;
        
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
       
    };
    
    const confirmReservation = async (reservationId) => {
        setLoading(true); 
        try {
          const response = await axiosInstance.put(`/reservations/confirme/${reservationId}`);
 
          setReservations((prev) => 
            prev.map((reservation) => 
              reservation._id === response.data._id ? response.data : reservation
            )
          );
        } catch (error) {
          setError(error.response?.data.message || 'Error confirming reservation'); 
        } finally {
          setLoading(false); 
        }
      };
    
 const cancelReservation = async (reservationId) => {
    try {
         const response = await axiosInstance.delete(`/reservations/delete/${reservationId}`);
         if (response) {
                     setReservations((prev) => prev.filter((reservation) => reservation._id !== reservationId));

         }

      
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
       
    };
  return {
    reservations,
    loading,
    error,
    createReservation,
    fetchReservations,
    confirmReservation,
    cancelReservation,
    fetchReservationsAdmin
  }
}
