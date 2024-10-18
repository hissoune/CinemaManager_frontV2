import { useState } from "react";

export default function RatingStars({ movie }) {
  const totalStars = 5; 
  const initialSelectedStars = Math.round(movie.averageRating / movie.ratingCount); 
  const [selectedRating, setSelectedRating] = useState(initialSelectedStars);

  const handleRatingClick = (newRating) => {
    setSelectedRating(newRating); 
    console.log(selectedRating);
    
  };

  return (
    <div className="flex text-2xl">
      {Array(totalStars)
        .fill()
        .map((_, index) => {
          const starValue = index + 1; 
          return (
            <label key={index} className="cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={selectedRating >= starValue} 
                onChange={() => handleRatingClick(starValue)}
              />
              <span
                className={`${
                  selectedRating >= starValue
                    ? "text-yellow-500" 
                    : "text-gray-400"  
                }`}
              >
                ★
              </span>
            </label>
          );
        })}
    </div>
  );
}
