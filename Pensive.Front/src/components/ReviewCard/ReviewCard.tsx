import React from 'react';

import Review from '../../models/Review';
import getPlaceHolderText from '../../helpers/getPlaceHolderText';

interface ReviewCardProps {
  review: Review;
  openForm: () => void;
}

const ReviewCard = (props: ReviewCardProps): React.ReactElement => {
  const { review, openForm } = props;
  const { title, posterUrl = '' } = review;

  const poster = posterUrl ? (
    <img className="review-card__poster" alt="" src={posterUrl} />
  ) : (
    <p className="review-card__poster review-card__placeholder review-card__text">
      {getPlaceHolderText(title)}
    </p>
  );

  return (
    <li className="review-card">
      {poster}
      <button
        type="button"
        className="review-card__title review-card__text text"
        onClick={openForm}
      >
        {title}
      </button>
    </li>
  );
};

export default ReviewCard;
