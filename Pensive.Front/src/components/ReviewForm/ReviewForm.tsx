import React from 'react';
import { connect } from 'react-redux';

import { DispatchAsyncAction, RootState } from '../../store/types';
import {
  addReviewAction,
  updateReviewAction
} from '../../store/reviews/asyncActions';

import './ReviewForm.css';
import Review from '../../models/Review';
import ReviewType from '../../models/ReviewType';

type FormInputs = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

type ReviewFormProps = typeof ReviewForm.defaultProps & {
  reviewTypes: Array<ReviewType>;
  selectedReview?: Review;
  addReview: (review: Review) => void;
  updateReview: (review: Review) => void;
  handleCloseClick: () => void;
};

interface ReviewFromState {
  type: string;
  mark: string;
  title: string;
  reviewText: string;
}

class ReviewForm extends React.Component<ReviewFormProps, ReviewFromState> {
  static defaultProps = {
    reviewTypes: [] as Array<ReviewType>
  };

  constructor(props: ReviewFormProps) {
    super(props);

    const { reviewTypes } = this.props;
    this.state = {
      title: '',
      // FIX ME if reviewTypes is empty array, then an error will occur
      type: reviewTypes[0].code,
      reviewText: '',
      mark: '0'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { selectedReview } = this.props;
    this.setState((state) => ({ ...state, ...selectedReview }));
  }

  handleInputChange(event: React.ChangeEvent<FormInputs>) {
    const { id, value } = event.target;

    this.setState({
      [id]: value
    } as Pick<ReviewFromState, keyof ReviewFromState>);
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const { addReview, updateReview, handleCloseClick } = this.props;

    const review = {
      id: 0,
      ...this.state
    };

    if (review.id !== 0) {
      updateReview(review);
    } else {
      addReview(review);
    }

    handleCloseClick();
  }

  render() {
    const { reviewTypes } = this.props;
    const { title, type, reviewText, mark } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="review-form">
        <label className="review-form__label" htmlFor="title">
          Title:
        </label>
        <input
          className="review-form__input"
          type="text"
          id="title"
          value={title}
          onChange={this.handleInputChange}
        />
        <label className="review-form__label" htmlFor="type">
          Type:
        </label>
        <select
          className="review-form__input"
          id="type"
          value={type}
          onChange={this.handleInputChange}
        >
          {reviewTypes.map((cardType) => (
            <option key={cardType.code} value={cardType.code}>
              {cardType.name}
            </option>
          ))}
        </select>
        <label className="review-form__label" htmlFor="reviewText">
          Review text:
        </label>
        <textarea
          className="review-form__input review-form__text"
          id="reviewText"
          value={reviewText}
          onChange={this.handleInputChange}
        />
        <label className="review-form__label" htmlFor="mark">
          Mark:
        </label>
        <input
          className="review-form__input"
          type="number"
          id="mark"
          min="0"
          max="10"
          value={mark}
          onChange={this.handleInputChange}
        />
        <button className="review-form__submit-button" type="submit">
          Save
        </button>
      </form>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    reviewTypes: state.reviewTypes
  };
}

function mapDispatchToProps(dispatch: DispatchAsyncAction) {
  return {
    addReview: (review: Review) => {
      const addReviewThunk = addReviewAction(review);
      dispatch(addReviewThunk);
    },
    updateReview: (review: Review) => {
      const updateReviewThunk = updateReviewAction(review);
      dispatch(updateReviewThunk);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
