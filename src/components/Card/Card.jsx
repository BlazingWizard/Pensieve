import React from 'react';

import './Card.css';
import getPlaceHolderText from '../../helpers/getPlaceHolderText';

const Card = (props) => {
  const { posterUrl, title, onCardDeleteClick } = props;

  const poster = posterUrl ? (
    <img className="card__poster" alt="" src={posterUrl} />
  ) : (
    <p className="card__poster card__placeholder card__text">
      {getPlaceHolderText(title)}
    </p>
  );

  return (
    <li className="card">
      {poster}
      <p className="card__title card__text">{title}</p>
      <button
        type="button"
        className="card__delete-button"
        onClick={onCardDeleteClick}
      >
        x
      </button>
    </li>
  );
};

export default Card;
