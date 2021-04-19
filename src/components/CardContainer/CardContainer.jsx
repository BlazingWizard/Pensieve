import React from 'react';

import './CardContainer.css';
import Card from '../Card/Card';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.cardList = React.createRef();
    this.state = {
      currentLeftOffset: 0,
      scrollIsVisible: false,
      isExpand: false
    };
  }

  componentDidMount() {
    this.updateScrollIsVisibleState();
  }

  componentDidUpdate() {
    const { currentLeftOffset } = this.state;
    this.cardList.current.scrollLeft = currentLeftOffset;

    this.updateScrollIsVisibleState();
  }

  handleToggleExpandClick() {
    this.setState((state) => ({ isExpand: !state.isExpand }));
  }

  handleBackwardClick() {
    this.setState({ currentLeftOffset: 0 });
  }

  handleForwardClick() {
    const maxOffset = this.cardList.current.scrollWidth;
    this.setState({ currentLeftOffset: maxOffset });
  }

  handleScroll(e) {
    this.setState({
      currentLeftOffset: e.target.scrollLeft
    });
  }

  updateScrollIsVisibleState() {
    const { current } = this.cardList;

    this.setState((state) => {
      const scrollIsVisible = current.clientWidth !== current.scrollWidth;
      if (state.scrollIsVisible !== scrollIsVisible) {
        return { scrollIsVisible };
      }
      return null;
    });
  }

  render() {
    const { title, cardList, onCardDeleteClick } = this.props;
    const { scrollIsVisible, isExpand } = this.state;

    const cardElements = cardList.map((card) => (
      <Card
        key={card.id}
        posterUrl={card.url}
        title={card.title}
        onCardDeleteClick={() => onCardDeleteClick(card.id)}
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
            onClick={() => this.handleToggleExpandClick()}
          >
            {expandButtonText}
          </button>
        )}
        <div className="card-container__root">
          {scrollIsVisible && (
            <button
              type="button"
              className="card-container__nav-button card-container__backward-button"
              onClick={() => this.handleBackwardClick()}
            >
              &lt;
            </button>
          )}
          <ul
            className={`card-container__cards ${isExpandClass}`}
            onScroll={(e) => this.handleScroll(e)}
            ref={this.cardList}
          >
            {cardElements}
          </ul>
          {scrollIsVisible && (
            <button
              type="button"
              className="card-container__nav-button card-container__forward-button"
              onClick={() => this.handleForwardClick()}
            >
              &gt;
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default CardContainer;
