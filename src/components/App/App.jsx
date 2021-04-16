import React from 'react';

import cardTypes from './cardTypes';
import staticCards from './staticCards';

import CardContainer from '../CardContainer';

class App extends React.Component {
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
    return (
      <>
        <CardContainer
          title="Films"
          cardList={cards.filter((e) => e.type === cardTypes.film)}
          onCardDeleteClick={this.onCardDeleteClick}
        />
        <CardContainer
          title="TV Shows"
          cardList={cards.filter((e) => e.type === cardTypes.tvshow)}
          onCardDeleteClick={this.onCardDeleteClick}
        />
        <CardContainer
          title="Games"
          cardList={cards.filter((e) => e.type === cardTypes.game)}
          onCardDeleteClick={this.onCardDeleteClick}
        />
      </>
    );
  }
}
export default App;
