/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';

import './ReviewCard.css';

import Review from '../../models/Review';
import getPlaceHolderText from '../../helpers/getPlaceHolderText';
import { deleteReviewAction } from '../../store/reviews/asyncActions';

interface ReviewCardProps {
  review: Review;
  openForm: () => void;
}

const ReviewCard = (props: ReviewCardProps): React.ReactElement => {
  const { review, openForm } = props;
  const { id, title, posterUrl = '' } = review;

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
    <li className="review-card" onClick={openForm}>
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
