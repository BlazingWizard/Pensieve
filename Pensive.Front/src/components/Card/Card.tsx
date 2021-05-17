import React from 'react';
import { useDispatch } from 'react-redux';

import './Card.css';
import getPlaceHolderText from '../../helpers/getPlaceHolderText';
import { deleteReviewAction } from '../../store/reviews/asyncActions';

interface CardProps {
  id: number;
  title: string;
  posterUrl?: string;
}

const Card = (props: CardProps): React.ReactElement => {
  const { id, title, posterUrl } = props;

  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    const deleteThunk = deleteReviewAction(id);
    dispatch(deleteThunk);
  };

  const poster = posterUrl ? (
    <img className="card__poster" alt="" src={posterUrl} />
  ) : (
    <p className="card__poster card__placeholder card__text text">
      {getPlaceHolderText(title)}
    </p>
  );

  return (
    <li className="card">
      {poster}
      <p className="card__title card__text text">{title}</p>
      <button
        type="button"
        className="card__delete-button text"
        onClick={handleDeleteClick}
      >
        x
      </button>
    </li>
  );
};

Card.defaultProps = {
  posterUrl: ''
};

export default Card;
