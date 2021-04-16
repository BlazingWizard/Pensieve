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
  }

  render() {
    const { cards } = this.state;
    return (
      <>
        <CardContainer
          title="Films"
          cardList={cards.filter((e) => e.type === cardTypes.film)}
        />
        <CardContainer
          title="TV Shows"
          cardList={cards.filter((e) => e.type === cardTypes.tvshow)}
        />
        <CardContainer
          title="Games"
          cardList={cards.filter((e) => e.type === cardTypes.game)}
        />
      </>
    );
  }
}
export default App;
