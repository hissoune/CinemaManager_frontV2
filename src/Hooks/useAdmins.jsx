import { useState } from "react";
import axiosInstance from "../client/axiosInstance"; 

export default function useAdmins() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAdmins = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get("/admins"); 
      setAdmins(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createAdmin = async (adminData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/admins", adminData); // Adjusted the route
      setAdmins((prev) => [...prev, response.data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateAdmin = async (adminId, updatedData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.put(`/admins/${adminId}`, updatedData); // Adjusted the route
      setAdmins((prev) => prev.map(admin => admin._id === adminId ? response.data : admin));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const banAdmin = async (adminId) => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.patch(`/admins/${adminId}/ban`); // Adjusted the route
      setAdmins((prev) => prev.map(admin => admin._id === adminId ? { ...admin, banned: true } : admin));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const unbanAdmin = async (adminId) => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.patch(`/admins/${adminId}/unban`); // Adjusted the route
      setAdmins((prev) => prev.map(admin => admin._id === adminId ? { ...admin, banned: false } : admin));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    admins,
    loading,
    error,
    fetchAdmins,
    createAdmin,
    updateAdmin,
    banAdmin,
    unbanAdmin,
  };
}
