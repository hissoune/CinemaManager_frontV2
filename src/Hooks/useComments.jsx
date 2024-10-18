import { useState } from "react"
import axiosInstance from "../client/axiosInstance";

export default function useComments() {
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const getComments = async (movieId) => {
      setCommentsLoading(true);
      try {
        const response = await axiosInstance.get('/comments/movie/'+movieId);
        setComments(response.data.comments);
        setCommentsLoading(false); 
      } catch (error) {
        setError(error.message);
      } finally {
        setCommentsLoading(false);
      }
    };
  
   
    const updateComment = async (commentData, commentId) => {
      setCommentsLoading(true);
      try {
        const response = await axiosInstance.put('/comments/update/' + commentId, commentData);
  
        setComments((prevComments) => {
          const updatedComments = prevComments.map((comment) => 
            comment._id === commentId ? { ...comment, ...response.data } : comment
          );
          return updatedComments;
        });
        
      } catch (error) {
        setError(error.message);
      } finally {
        setCommentsLoading(false);
      }
    };
  
    const createComment = async (formData) => {
        console.log(formData);
        
      setCommentsLoading(true);
      try {
        const response = await axiosInstance.post('/comments', formData);
         
        setComments((prevComments) => [...prevComments, response.data]);
        
      } catch (error) {
        setError(error.message);
        
      } finally {
        setCommentsLoading(false);
      }
    };
  
    const deleteComment = async (commentId) => {
      setCommentsLoading(true);
      try {
        await axiosInstance.delete('/comments/delete/' + commentId);
  
        setComments((prevComments) => {
          const filteredComments = prevComments.filter((comment) => comment._id !== commentId);
          return filteredComments;
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setCommentsLoading(false);
      }
    };





        return{
            comments,
            commentsLoading,
            error,
            getComments,
            updateComment,
            createComment,
            deleteComment,
        }
        }
