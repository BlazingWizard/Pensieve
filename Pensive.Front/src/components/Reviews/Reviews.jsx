import React from 'react';

import './Reviews.css';
import reviewApi from '../../API/reviewApi';
import reviewTypeApi from '../../API/reviewTypeApi';

import CardForm from '../CardForm';
import CardContainer from '../CardContainer';
import Popup from '../../elements/Popup';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      cardContainerList: [],
      createPopupVisible: false
    };

    this.onCardDeleteClick = this.onCardDeleteClick.bind(this);
  }

  componentDidMount() {
    reviewApi.getAll().then((response) => {
      this.setState({
        cards: response
      });
    });

    reviewTypeApi.getAll().then((response) => {
      this.setState({
        cardContainerList: response
      });
    });
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

  onCardAddClick(card) {
    this.setState((state) => {
      const { cards } = state;
      const id =
        cards.reduce(
          (max, curr) => (max < curr.id ? curr.id : max),
          cards[0].id
        ) + 1;
      return {
        cards: [
          {
            id,
            ...card
          },
          ...cards
        ]
      };
    });
  }

  onCardDeleteClick(id) {
    reviewApi.del(id).then(() => {
      this.setState((state) => {
        const { cards } = state;
        return {
          cards: cards.filter((c) => c.id !== id)
        };
      });
    });
  }

  render() {
    const { cards, createPopupVisible, cardContainerList } = this.state;
    const content = cardContainerList.map((cardContainer) => (
      <CardContainer
        key={cardContainer.code}
        title={cardContainer.name}
        cardList={cards.filter((e) => e.type === cardContainer.code)}
        onCardDeleteClick={this.onCardDeleteClick}
      />
    ));

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
          <CardForm
            cardTypes={cardContainerList}
            onCardAddClick={(card) => this.onCardAddClick(card)}
            handleCloseClick={() => this.handleClosePopupClick()}
          />
        </Popup>
      </div>
    );
  }
}
export default Reviews;
