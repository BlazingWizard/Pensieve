import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllReviewsAction } from '../../store/reviews/asyncActions';
import { getAllReviewTypesAction } from '../../store/reviewTypes/asyncActions';

import './Reviews.css';
import CardForm from '../CardForm';
import CardContainer from '../CardContainer';
import Popup from '../../elements/Popup';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createPopupVisible: false
    };
  }

  componentDidMount() {
    const { getAllReviews, getAllReviewTypes } = this.props;
    getAllReviews();
    getAllReviewTypes();
  }

  handleCreatePopupClick() {
    this.setState({
      createPopupVisible: true
    });
  }

  handleClosePopupClick() {
    this.setState({
      createPopupVisible: false
    });
  }

  render() {
    const { cards, cardContainerList } = this.props;
    const { createPopupVisible } = this.state;
    const content = cardContainerList.map((cardContainer) => (
      <CardContainer
        key={cardContainer.code}
        title={cardContainer.name}
        cardList={cards.filter((e) => e.type === cardContainer.code)}
      />
    ));

    return (
      <div className="reviews">
        {content}
        <button
          type="button"
          className="reviews__create-button"
          onClick={() => this.handleCreatePopupClick()}
        >
          +
        </button>
        <Popup
          isVisible={createPopupVisible}
          handleCloseClick={() => this.handleClosePopupClick()}
        >
          <CardForm handleCloseClick={() => this.handleClosePopupClick()} />
        </Popup>
      </div>
    );
  }
}

Reviews.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  cardContainerList: PropTypes.arrayOf(PropTypes.object),
  getAllReviews: PropTypes.func.isRequired,
  getAllReviewTypes: PropTypes.func.isRequired
};

Reviews.defaultProps = {
  cards: [],
  cardContainerList: []
};

function mapStateToProps(state) {
  return {
    cards: state.reviews,
    cardContainerList: state.reviewTypes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllReviews: () => dispatch(getAllReviewsAction),
    getAllReviewTypes: () => dispatch(getAllReviewTypesAction)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
