import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

// eslint-disable-next-line react/prop-types
export default function Favorites({movie}) {
    const { user, loading, favorites } = useAuthContext();
    const [updatingFavorites, setUpdatingFavorites] = useState(false);
    const toggleFavorite = async (movieId) => {
        setUpdatingFavorites(true);
        try {
          await favorites(movieId);
        } catch (error) {
          console.error('Failed to update favorites:', error);
        } finally {
          setUpdatingFavorites(false);
        }
      };

      if (updatingFavorites || loading) {
        return <div>loading . . .</div>
      }
  return (
    <div>
       <div className="  m-4">
              <img
                className="w-10 cursor-pointer transition-transform transform hover:scale-150"
                src={user?.favorites?.includes(movie._id) ? "/heart (1).png" : "/heart.png"}
                alt="heart"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(movie._id);
                }}
              />
            </div>
    </div>
  )
}
