import { useEffect, useState } from "react"
import axiosInstance from "../client/axiosInstance";

export default function useRoomsAdmin() {
    const [loadin,setLoading]= useState(false);
    const [error,setError]= useState(null);
    const [rooms,setRooms]= useState([]);

   const getrooms = async ()=>{
    console.log('fuck');
    
    setLoading(true);
         try {
            const response = await axiosInstance.get('/rooms');
            console.log(response);
            
            setRooms(response.data);
         } catch (error) {
            setError(error)
         }finally{
            setLoading(false);
         }

    };
    useEffect(()=>{
        getrooms();
    },[])

  return{
    rooms,
    loadin,
    error

  }
}
