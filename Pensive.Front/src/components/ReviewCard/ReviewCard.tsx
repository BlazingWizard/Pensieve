import React from 'react';
import { useDispatch } from 'react-redux';

import './ReviewCard.css';

import Review from '../../models/Review';
import getPlaceHolderText from '../../helpers/getPlaceHolderText';
import { deleteReviewAction } from '../../store/reviews/asyncActions';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = (props: ReviewCardProps): React.ReactElement => {
  // eslint-disable-next-line react/destructuring-assignment
  const { id, title, posterUrl = '' } = props.review;

  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    const deleteThunk = deleteReviewAction(id);
    dispatch(deleteThunk);
  };

  const poster = posterUrl ? (
    <img className="review-card__poster" alt="" src={posterUrl} />
  ) : (
    <p className="review-card__poster review-card__placeholder review-card__text text">
      {getPlaceHolderText(title)}
    </p>
  );

  return (
    <li className="review-card">
      {poster}
      <p className="review-card__title review-card__text text">{title}</p>
      <button
        type="button"
        className="review-card__delete-button text"
        onClick={handleDeleteClick}
      >
        x
      </button>
    </li>
  );
};

export default ReviewCard;
