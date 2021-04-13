import React from 'react';

import './Card.css';
import getPlaceHolderText from '../../helpers/getPlaceHolderText';

const Card = (props) => {
  const { posterUrl, title } = props;

  const poster = posterUrl ? (
    <img className="card__poster" alt="" src={posterUrl} />
  ) : (
    <div className="card__poster card_placeholder">
      <p>{getPlaceHolderText(title)}</p>
    </div>
  );

  return (
    <li className="card">
      {poster}
      <p className="card__title">{title}</p>
    </li>
  );
};

export default Card;
