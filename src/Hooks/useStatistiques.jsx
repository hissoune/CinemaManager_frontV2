import { useState } from "react"
import axiosInstance from "../client/axiosInstance"; 

export default function useStatistiques() {
    const [statistiques , setStatistiques ]=useState([]);
    const [loadind , seLoading ]=useState(false);
    const [error , setError ]=useState(null);

    const getStatistiques = async () =>{
        seLoading(true);
        try {
            const response = await axiosInstance.get('/statiques');
            setStatistiques(response.data);

        } catch (error) {
            setError(error.msg);
        }finally{
            seLoading(false);
        }
    }

  return {
statistiques,
loadind,
error,
getStatistiques
  }
}
