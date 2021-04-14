import React from 'react';

import './CardContainer.css';
import Card from '../Card/Card';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedIndex: 0
    };
  }

  handleRightClick() {
    const { displayedIndex } = this.state;
    const newIndex = displayedIndex + 1;
    this.setState({
      displayedIndex: newIndex
    });
  }

  handleLeftClick() {
    const { displayedIndex } = this.state;
    const newIndex = displayedIndex - 1;
    this.setState({
      displayedIndex: newIndex
    });
  }

  render() {
    const { title, cardList, maxCount } = this.props;
    const { displayedIndex } = this.state;

    let activeCount = 0;
    const cardElements = cardList.map((card, index) => {
      const active = index >= displayedIndex && activeCount < maxCount;
      if (active) {
        activeCount += 1;
      }

      return <Card posterUrl={card.url} title={card.title} active={active} />;
    });

    return (
      <div className="card-container">
        <h1>{title}</h1>
        <h1>{displayedIndex}</h1>
        <button type="button" onClick={() => this.handleLeftClick()}>
          &lt;
        </button>
        <ul className="card-container__cards">{cardElements}</ul>
        <button type="button" onClick={() => this.handleRightClick()}>
          &gt;
        </button>
      </div>
    );
  }
}

export default CardContainer;
