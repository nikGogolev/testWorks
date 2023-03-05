import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./RateStars.css";
interface RateStarsProps {
  amount: number;
}

function RateStars(props: RateStarsProps) {
  const [starsArray, setStarsArray] = useState<number[]>([]);
  useEffect(() => {
    const stars = [];
    if (props.amount && props.amount <= 5) {
      for (let i = 1; i <= props.amount; i++) {
        stars.push(i);
      }
    }
    setStarsArray(stars);
  }, []);

  return (
    <div className="stars-container">
      {starsArray.map((item) => (
        <FontAwesomeIcon key={item} icon="star" className="star-item fa-2xs" />
      ))}
    </div>
  );
}

export default RateStars;
