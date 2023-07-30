import React, {useEffect, useState} from 'react';
import {getMovieReviews} from "../../services/api";
import {useParams} from "react-router-dom";

const Reviews = () => {
  const {movieId} = useParams()
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Movie Reviews</h2>
      {!reviews || !reviews.length ? (
        <p>No reviews available for this movie.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
