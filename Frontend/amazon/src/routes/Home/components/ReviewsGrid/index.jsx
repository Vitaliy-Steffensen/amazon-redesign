import React from "react";
import { reviews } from "./staticReviewsData";
import "./ReviewsGrid.css";
import StarIcon from "@mui/icons-material/Star";

export default function ReviewsGrid() {
  const daysSinceDate = (date) =>
    (date = Math.floor((new Date().getTime() - date.getTime()) / 86400000));

  return (
    <div className="reviews-grid">
      <h3 className="reviews-grid__title">Global Solution</h3>

      <div className="reviews-grid__continer">
        {reviews.map((review, i) => (
          <div
            className={`reviews-grid__review ${
              i % 2 == 1 && "reviews-grid__review--fallen"
            }`}
            key={i}
          >
            <img
              className="reviews-grid__review-image"
              src={review.image}
              alt=""
            />
            <p className="reviews-grid__review-description">
              {review.description}
            </p>
            {Array(review.rating)
              .fill()
              .map((_, i) => (
                <StarIcon
                  className="reviews-grid__review-rating"
                  style={{ fontSize: 18 }}
                  key={i}
                />
              ))}
            <p className="reviews-grid__review-name">{review.name}</p>
            <p className="reviews-grid__review-date">
              {daysSinceDate(review.date)} dayes ago
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
