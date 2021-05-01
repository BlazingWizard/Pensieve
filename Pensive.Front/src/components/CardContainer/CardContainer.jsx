import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './CardContainer.css';
import Card from '../Card';

function CardContainer(props) {
  const cardListElement = useRef();

  // Handle scroll position
  const [leftOffset, setLeftOffset] = useState(0);
  const handleScroll = (scrollEvent) => {
    setLeftOffset(scrollEvent.target.scrollLeft);
  };
  const handleBackwardClick = () => {
    setLeftOffset(0);
  };
  const handleForwardClick = () => {
    const maxOffset = cardListElement.current.scrollWidth;
    setLeftOffset(maxOffset);
  };
  useEffect(() => {
    cardListElement.current.scrollLeft = leftOffset;
  }, [leftOffset]);

  // Handle scroll visible
  const [scrollIsVisible, setScrollIsVisible] = useState(false);
  useEffect(() => {
    const { clientWidth, scrollWidth } = cardListElement.current;
    setScrollIsVisible(clientWidth !== scrollWidth);
  });

  // Handle card container expend
  const [isExpand, setIsExpand] = useState(false);
  const handleToggleExpandClick = () => {
    setIsExpand((prevIsExpand) => !prevIsExpand);
  };

  const { title, cardList } = props;
  const cardElements = cardList.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      posterUrl={card.posterUrl}
      title={card.title}
    />
  ));

  const isExpandClass = isExpand ? 'card-container__cards_isexpand' : '';
  const expandButtonText = isExpand ? '-' : '+';

  return (
    <div className="card-container">
      <h1 className="card-container__header header">{title}</h1>
      {(scrollIsVisible || isExpand) && (
        <button
          type="button"
          className="card-container__expand-button text"
          onClick={handleToggleExpandClick}
        >
          {expandButtonText}
        </button>
      )}
      <div className="card-container__root">
        {scrollIsVisible && (
          <button
            type="button"
            className="card-container__nav-button card-container__backward-button"
            onClick={handleBackwardClick}
          >
            &lt;
          </button>
        )}
        <ul
          className={`card-container__cards ${isExpandClass}`}
          onScroll={(e) => handleScroll(e)}
          ref={cardListElement}
        >
          {cardElements}
        </ul>
        {scrollIsVisible && (
          <button
            type="button"
            className="card-container__nav-button card-container__forward-button"
            onClick={handleForwardClick}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  cardList: PropTypes.arrayOf(PropTypes.object)
};

CardContainer.defaultProps = {
  cardList: []
};

export default CardContainer;
