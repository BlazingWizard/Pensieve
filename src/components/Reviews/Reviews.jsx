import React from 'react';

import { cardContainerList } from './cardContainerList';
import staticCards from './staticCards';

import CardContainer from '../CardContainer';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: staticCards
    };

    this.onCardDeleteClick = this.onCardDeleteClick.bind(this);
  }

  onCardDeleteClick(id) {
    this.setState((state) => {
      const { cards } = state;
      return {
        cards: cards.filter((c) => c.id !== id)
      };
    });
  }

  render() {
    const { cards } = this.state;

    const content = cardContainerList.map((cardContainer) => (
      <CardContainer
        key={cardContainer.type}
        title={cardContainer.title}
        cardList={cards.filter((e) => e.type === cardContainer.type)}
        onCardDeleteClick={this.onCardDeleteClick}
      />
    ));

    return (
      <div>
        {content}
        <button type="button" className="">
          +
        </button>
      </div>
    );
  }
}
export default Reviews;
