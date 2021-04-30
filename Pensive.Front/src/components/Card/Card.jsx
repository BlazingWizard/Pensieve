import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Card.css';
import getPlaceHolderText from '../../helpers/getPlaceHolderText';
import { deleteReviewAction } from '../../store/reviews/asyncActions';

function handleDeleteClick(props, id) {
  const { deleteReview } = props;
  deleteReview(id);
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

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string
};

Card.defaultProps = {
  posterUrl: ''
};

function mapDispatchToProps(dispatch) {
  return {
    deleteReview: (id) => {
      const deleteThunk = deleteReviewAction(id);
      dispatch(deleteThunk);
    }
  };
}
export default connect(null, mapDispatchToProps)(Card);
