import React, { useState } from "react";
import { getReviews } from "../../localData/reviews";
import Review from "./Review";

const Reviews = () => {
  const [filter, setFilter] = useState("all");
  const [reviewId, setReviewId] = useState(0);
  const [reviews, setReviews] = useState(getReviews(filter));

  const changeFilter = f => {
    setFilter(f);
    setReviews(getReviews(f));
    setReviewId(0);
  };
  const onClick = (e, direction) => {
    e.preventDefault();
    if (direction === "r") {
      if (reviewId + 1 === reviews.length) setReviewId(0);
      else setReviewId(reviewId + 1);
    } else {
      if (reviewId === 0) setReviewId(reviews.length - 1);
      else setReviewId(reviewId - 1);
    }
  };
  const averageRating = () => {
    const reviews = getReviews("all");
    let sum = 0;
    reviews.map(r => (sum += r.rating));
    return sum / reviews.length;
  };
  return (
    <div className="block block--arrow-downside" id="reviews">
      <div className="border">
        <i
          onClick={e => onClick(e, "r")}
          className={
            reviews.length > 1 ? "bi bi-caret-right arrow arrow-right" : ""
          }
        />
        <i
          onClick={e => onClick(e, "l")}
          className={
            reviews.length > 1 ? "bi bi-caret-left arrow arrow-left" : ""
          }
        />
        <div className="reviews">
          <div className="average">
            <h2>Our rating - {averageRating()}</h2>
            {Array.from(Array(Math.floor(averageRating())).keys()).map(e => (
              <i key={e} className="bi bi-star-fill star"></i>
            ))}
            {averageRating() - Math.floor(averageRating()) >= 0.5 ? (
              <i className="bi bi-star-half star"></i>
            ) : (
              <i className=""></i>
            )}
            {Array.from(Array(5 - Math.round(averageRating())).keys()).map(
              e => (
                <i key={e} className="bi bi-star star"></i>
              )
            )}
          </div>
          <div className="review--buttons">
            <button
              onClick={() => changeFilter("all")}
              className={filter === "all" ? "btn" : "btn btn-filler"}>
              All
            </button>
            <button
              onClick={() => changeFilter("1")}
              className={filter === "1" ? "btn" : "btn btn-filler"}>
              <i className="bi bi-star-fill star" />
            </button>
            <button
              onClick={() => changeFilter("2")}
              className={filter === "2" ? "btn" : "btn btn-filler"}>
              <i className="bi bi-star-fill star" />
              <i className="bi bi-star-fill star" />
            </button>
            <button
              onClick={() => changeFilter("3")}
              className={filter === "3" ? "btn" : "btn btn-filler"}>
              <i className="bi bi-star-fill star" />
              <i className="bi bi-star-fill star" />
              <i className="bi bi-star-fill star" />
            </button>
            <button
              onClick={() => changeFilter("4")}
              className={filter === "4" ? "btn" : "btn btn-filler"}>
              <i className="bi bi-star-fill star" />
              <i className="bi bi-star-fill star" />
              <i className="bi bi-star-fill star" />
              <i className="bi bi-star-fill star" />
            </button>
            <button
              onClick={() => changeFilter("5")}
              className={filter === "5" ? "btn" : "btn btn-filler"}>
              <i className="bi bi-star-fill star" />
              <i className="bi bi-star-fill star" />
              <i className="bi bi-star-fill star" />
              <i className="bi bi-star-fill star" />
              <i className="bi bi-star-fill star" />
            </button>
          </div>
          {reviews.length > 0 ? (
            <Review reviews={reviews[reviewId]} />
          ) : (
            <p>No {filter} starts reviews</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
