import React from 'react';

import './CardContainer.css';
import moveDirection from './Constants';
import Card from '../Card/Card';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };
  }

  handleArrowClick(direct) {
    this.setState((state, props) => {
      const { cardList } = props;

      let newIndex = state.current + direct;
      if (newIndex >= cardList.length) {
        newIndex = 0;
      }
      if (newIndex < 0) {
        newIndex = cardList.length - 1;
      }

      return {
        current: newIndex
      };
    });
  }

  render() {
    const { title, cardList } = this.props;
    const { current } = this.state;

    const cardElements = cardList.map((card) => (
      <Card posterUrl={card.url} title={card.title} currentPosition={current} />
    ));

    return (
      <div className="card-container">
        <h1>{title}</h1>
        <h1>{current}</h1>
        <button
          type="button"
          onClick={() => this.handleArrowClick(moveDirection.backward)}
        >
          &lt;
        </button>
        <ul className="card-container__cards">{cardElements}</ul>
        <button
          type="button"
          onClick={() => this.handleArrowClick(moveDirection.forward)}
        >
          &gt;
        </button>
      </div>
    );
  }
}

export default CardContainer;
