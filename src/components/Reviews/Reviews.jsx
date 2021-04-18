import React from 'react';

import { cardContainerList } from './cardContainerList';
import staticCards from './staticCards';

import CardContainer from '../CardContainer';
import Popup from '../../elements/Popup';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: staticCards,
      createPopupVisible: false
    };

    this.onCardDeleteClick = this.onCardDeleteClick.bind(this);
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

  onCardDeleteClick(id) {
    this.setState((state) => {
      const { cards } = state;
      return {
        cards: cards.filter((c) => c.id !== id)
      };
    });
  }

  render() {
    const { cards, createPopupVisible } = this.state;

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
        <button
          type="button"
          className=""
          onClick={() => this.handleCreatePopupClick()}
        >
          +
        </button>
        <Popup
          isVisible={createPopupVisible}
          handleCloseClick={() => this.handleClosePopupClick()}
        >
          <h1>message</h1>
        </Popup>
      </div>
    );
  }
}
export default Reviews;
