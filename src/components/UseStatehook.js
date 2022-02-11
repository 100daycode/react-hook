import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function UseStatehook() {
  const Star = ({ selected = false, onSelect }) => {
    return (
      <FaStar size={20} color={selected ? "red" : "gray"} onClick={onSelect} />
    );
  };

  const createArray = (length) => {
    return [...Array(length)];
  };

  const StarRating = ({ rate }) => {
    const [selectedStar, setSelectedStar] = useState(0);
    return (
      <div className="flex items-center">
        {createArray(rate).map((items, index) => {
          return (
            <Star
              key={index}
              selected={selectedStar > index}
              onSelect={() => setSelectedStar(index + 1)}
            />
          );
        })}
        <p className="pl-3">
          Rate {selectedStar} from {rate}
        </p>
      </div>
    );
  };
  return (
    <>
      <h1 className="text-4xl font-bold">Rating</h1>
      <p>implement useState Hooks</p>
      <StarRating rate={5} />
    </>
  );
}
