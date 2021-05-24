import React from 'react';
import { connect } from 'react-redux';

import { RootState, DispatchAsyncAction } from '../../store/types';
import { getAllReviewsAction } from '../../store/reviews/asyncActions';
import { getAllReviewTypesAction } from '../../store/reviewTypes/asyncActions';

import './Reviews.css';
import Popup from '../Popup';
import ReviewCard from '../ReviewCard';
import ReviewForm from '../ReviewForm';
import CardContainer from '../CardContainer';

import Review from '../../models/Review';
import ReviewType from '../../models/ReviewType';

interface ReviewsProps {
  reviews: Array<Review>;
  reviewTypes: Array<ReviewType>;
  getAllReviews: () => void;
  getAllReviewTypes: () => void;
}

interface ReviewState {
  createPopupVisible: boolean;
  selectedReview: Review | undefined;
}

class Reviews extends React.Component<ReviewsProps, ReviewState> {
  static defaultProps = {
    reviews: [] as Array<Review>,
    reviewTypes: [] as Array<ReviewType>
  };

  constructor(props: ReviewsProps) {
    super(props);
    this.state = {
      createPopupVisible: false,
      selectedReview: undefined
    };
  }

  componentDidMount() {
    const { getAllReviews, getAllReviewTypes } = this.props;
    getAllReviews();
    getAllReviewTypes();
  }

  handleCreatePopupClick(review?: Review) {
    this.setState({
      createPopupVisible: true,
      selectedReview: review
    });
  }

  handleClosePopupClick() {
    this.setState({
      createPopupVisible: false
    });
  }

  render() {
    const { reviews, reviewTypes } = this.props;
    const { selectedReview, createPopupVisible } = this.state;

    const renderReviewCard = (review: Review): React.ReactElement => (
      <ReviewCard
        key={review.id}
        review={review}
        openForm={() => this.handleCreatePopupClick(review)}
      />
    );

    const content = reviewTypes.map((reviewType) => (
      <CardContainer
        key={reviewType.code}
        title={reviewType.name}
        data={reviews.filter((review) => review.type === reviewType.code)}
        renderFunction={renderReviewCard}
      />
    ));

    console.log(reviews, reviewTypes);

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
          <ReviewForm
            handleCloseClick={() => this.handleClosePopupClick()}
            selectedReview={selectedReview}
          />
        </Popup>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    reviews: state.reviews,
    reviewTypes: state.reviewTypes
  };
}

function mapDispatchToProps(dispatch: DispatchAsyncAction) {
  return {
    getAllReviews: () => dispatch(getAllReviewsAction),
    getAllReviewTypes: () => dispatch(getAllReviewTypesAction)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
