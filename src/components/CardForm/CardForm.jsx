import React from 'react';

class CardForm extends React.Component {
  constructor(props) {
    super(props);

    const { cardTypes } = this.props;
    this.state = {
      title: '',
      type: cardTypes[0].type,
      reviewText: '',
      mark: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { onCardAddClick, handleCloseClick } = this.props;
    onCardAddClick(this.state);
    handleCloseClick();
  }

  render() {
    const { cardTypes } = this.props;
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
            {cardTypes.map((cardType) => (
              <option key={cardType.type} value={cardType.type}>
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

export default CardForm;
