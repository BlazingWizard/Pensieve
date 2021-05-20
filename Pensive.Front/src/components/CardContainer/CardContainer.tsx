import React, { useState, useEffect, useRef } from 'react';

import './CardContainer.css';

interface CardContainerProps<T> {
  title: string;
  data: Array<T>;
  renderFunction: (data: T) => React.ReactElement;
}

function CardContainer<T>(props: CardContainerProps<T>): React.ReactElement {
  const cardListRef = useRef<HTMLUListElement>(null);

  // Handle scroll position
  const [leftOffset, setLeftOffset] = useState(0);
  const handleScroll = (scrollEvent: React.UIEvent<HTMLUListElement>) => {
    setLeftOffset(scrollEvent.currentTarget.scrollLeft);
  };
  const handleBackwardClick = () => {
    setLeftOffset(0);
  };
  const handleForwardClick = () => {
    if (cardListRef.current === null) {
      throw Error('Card list ref not assign');
    }
    const maxOffset = cardListRef.current.scrollWidth;
    setLeftOffset(maxOffset);
  };
  useEffect(() => {
    if (cardListRef.current === null) {
      throw Error('Card list ref not assign');
    }
    cardListRef.current.scrollLeft = leftOffset;
  }, [leftOffset]);

  // Handle scroll visible
  const [scrollIsVisible, setScrollIsVisible] = useState(false);
  useEffect(() => {
    if (cardListRef.current === null) {
      throw Error('Card list ref not assign');
    }

    const { clientWidth, scrollWidth } = cardListRef.current;
    setScrollIsVisible(clientWidth !== scrollWidth);
  });

  // Handle card container expend
  const [isExpand, setIsExpand] = useState(false);
  const handleToggleExpandClick = () => {
    setIsExpand((prevIsExpand) => !prevIsExpand);
  };

  const isExpandClass = isExpand ? 'card-container__cards_isexpand' : '';
  const expandButtonText = isExpand ? '-' : '+';

  const { title, data, renderFunction: renderData } = props;
  const content = data.map(renderData);

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
          ref={cardListRef}
        >
          {content}
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

export default CardContainer;
