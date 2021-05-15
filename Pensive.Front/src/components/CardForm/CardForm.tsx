import React from 'react';
import { connect } from 'react-redux';

import ReviewType from '../../models/ReviewType';
import { addReviewAction } from '../../store/reviews/asyncActions';

type FormInputs = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

type CardFormProps = typeof CardForm.defaultProps & {
  reviewTypes: Array<ReviewType>;
  addReview: (state: CardFromState) => void;
  handleCloseClick: () => void;
};

interface CardFromState {
  type: string;
  mark: string;
  title: string;
  reviewText: string;
}

class CardForm extends React.Component<CardFormProps, CardFromState> {
  static defaultProps = {
    reviewTypes: [] as Array<ReviewType>
  };

  constructor(props) {
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

  handleInputChange(event: React.ChangeEvent<FormInputs>) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    } as Pick<CardFromState, keyof CardFromState>);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { handleCloseClick, addReview } = this.props;
    addReview(this.state);
    handleCloseClick();
  }

  render() {
    const { reviewTypes } = this.props;
    const { title, type, reviewText, mark } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="type">
          Type:
          <select name="type" value={type} onChange={this.handleInputChange}>
            {reviewTypes.map((cardType) => (
              <option key={cardType.code} value={cardType.code}>
                {cardType.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="reviewText">
          Review text:
          <textarea
            name="reviewText"
            value={reviewText}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="mark">
          <input
            type="number"
            name="mark"
            min="0"
            max="10"
            value={mark}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    reviewTypes: state.reviewTypes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addReview: (review) => {
      const addReviewThunk = addReviewAction(review);
      dispatch(addReviewThunk);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
