import React from 'react';

import './Card.css';
import getPlaceHolderText from '../../helpers/getPlaceHolderText';

const Card = (props) => {
  const { posterUrl, title, currentPosition } = props;

  const poster = posterUrl ? (
    <img className="card__poster" alt="" src={posterUrl} />
  ) : (
    <div className="card__poster card_placeholder">
      <p>{getPlaceHolderText(title)}</p>
    </div>
  );

  const offsetPersent = -currentPosition * 100;
  const offsetPx = -currentPosition * 20;
  const style = {
    transform: `translateX(calc(${offsetPersent}% + ${offsetPx}px))`
  };
  return (
    <li className="card" style={style}>
      {poster}
      <p className="card__title">{title}</p>
    </li>
  );
};

export default Card;
