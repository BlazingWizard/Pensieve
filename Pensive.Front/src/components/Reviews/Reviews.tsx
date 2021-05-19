import React from 'react';
import { connect } from 'react-redux';

import { RootState, DispatchAsyncAction } from '../../store/types';
import { getAllReviewsAction } from '../../store/reviews/asyncActions';
import { getAllReviewTypesAction } from '../../store/reviewTypes/asyncActions';

import './Reviews.css';
import Popup from '../Popup';
import ReviewForm from '../ReviewForm';
import CardContainer from '../CardContainer';

import Review from '../../models/Review';
import ReviewType from '../../models/ReviewType';

interface ReviewsProps {
  cards: Array<Review>;
  cardContainerList: Array<ReviewType>;
  getAllReviews: () => void;
  getAllReviewTypes: () => void;
}

interface ReviewState {
  createPopupVisible: boolean;
}

class Reviews extends React.Component<ReviewsProps, ReviewState> {
  static defaultProps = {
    cards: [] as Array<Review>,
    cardContainerList: [] as Array<ReviewType>
  };

  constructor(props: ReviewsProps) {
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
          <ReviewForm handleCloseClick={() => this.handleClosePopupClick()} />
        </Popup>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    cards: state.reviews,
    cardContainerList: state.reviewTypes
  };
}

function mapDispatchToProps(dispatch: DispatchAsyncAction) {
  return {
    getAllReviews: () => dispatch(getAllReviewsAction),
    getAllReviewTypes: () => dispatch(getAllReviewTypesAction)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
