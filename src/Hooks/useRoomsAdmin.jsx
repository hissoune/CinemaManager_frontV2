import { useEffect, useState } from "react";
import axiosInstance from "../client/axiosInstance";

export default function useRoomsAdmin() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    try {
      const response = await axiosInstance.get("/rooms");
      setRooms(response.data);
    } catch (error) {
      setError(error);
    } 
  };

  const createRoom = async (roomData) => {
         try {
      const response = await axiosInstance.post("/rooms/create", roomData);
      
      setRooms([...rooms, response.data]); 
      console.log(response.data);
      setLoading(true);
      console.log("loading value : " + loading);
      
    } catch (error) {
      setError(error);
    }
  };


  const updateRoom = async (roomId, updatedRoomData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.put(`/rooms/update/${roomId}`, updatedRoomData);
      setRooms(rooms.map((room) => (room._id === roomId ? response.data : room))); 
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

 
  const deleteRoom = async (roomId) => {
    setLoading(true);
    try {
      await axiosInstance.delete(`/rooms/delete/${roomId}`);
      setRooms(rooms.filter((room) => room._id !== roomId));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("yep");
    getRooms();
    setLoading(false);
  }, [loading]);

  return {
    rooms,
    loading,
    error,
    createRoom,
    updateRoom,
    deleteRoom,
  };
}
