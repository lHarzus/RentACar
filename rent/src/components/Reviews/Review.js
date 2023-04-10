import React from "react";

const Review = ({ reviews }) => {
  const { name, date, rating, title, review } = reviews;
  return (
    <div>
      {Array.from(Array(rating).keys()).map(e => (
        <i key={e} className="bi bi-star-fill star"></i>
      ))}
      {Array.from(Array(5 - rating).keys()).map(e => (
        <i key={e} className="bi bi-star star"></i>
      ))}
      <p className="inline">
        {" "}
        - {name} - {Math.floor((new Date() - date) * Math.pow(10, -8))} dias
        atras
      </p>
      <h3>{title}</h3>
      <p>{review}</p>
    </div>
  );
};

export default Review;
