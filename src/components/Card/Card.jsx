import React from 'react';

import './Card.css';
import getPlaceHolderText from '../../helpers/getPlaceHolderText';

const Card = (props) => {
  const { posterUrl, title, active } = props;

  const poster = posterUrl ? (
    <img className="card__poster" alt="" src={posterUrl} />
  ) : (
    <div className="card__poster card_placeholder">
      <p>{getPlaceHolderText(title)}</p>
    </div>
  );

  const classNames = ['card'];
  if (active) {
    classNames.push('card_isactive');
  }

  return (
    <li className={classNames.join(' ')}>
      {poster}
      <p className="card__title">{title}</p>
    </li>
  );
};

export default Card;
