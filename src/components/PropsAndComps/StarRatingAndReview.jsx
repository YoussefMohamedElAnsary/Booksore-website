import { useState } from "react";
import './StarRatingAndReview.css';
import { FaStar } from "react-icons/fa";


const StarRatingAndReview = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  const colors = {
    orange: "#ffd400",
    grey: "#a9a9a9"  
  };

  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  };


  return (
    <div className="stars_review_input_container">
      <div className="stars">
        <span className="subtitle_rate_book">Rate this book:</span>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 1,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea placeholder="What's your experience?" className="reviewBoxInput"/>

      <button type="submit" className="submitRatingReview">
        Submit
      </button>
      
    </div>
  )
}

export default StarRatingAndReview