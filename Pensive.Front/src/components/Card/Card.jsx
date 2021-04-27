import React from 'react';
import { connect } from 'react-redux';

import reviewApi from '../../API/reviewApi';
import { deleteReview } from '../../store/reviews/actionCreators';

import './Card.css';
import getPlaceHolderText from '../../helpers/getPlaceHolderText';

function handleDeleteClick(props, id) {
  reviewApi.del(id).then(() => {
    props.deleteReview(id);
  });
}

const Card = (props) => {
  const { id, posterUrl, title } = props;

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
        onClick={() => handleDeleteClick(props, id)}
      >
        x
      </button>
    </li>
  );
};

export default connect(null, { deleteReview })(Card);
