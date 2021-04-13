import React from 'react';

import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = (props) => {
  const { title, cardList } = props;

  const cardElements = cardList.map((card) => (
    <Card posterUrl={card.url} title={card.title} />
  ));

  return (
    <div className="card-container">
      <h1>{title}</h1>
      <ul className="card-container__cards">{cardElements}</ul>
    </div>
  );
};

export default CardContainer;
