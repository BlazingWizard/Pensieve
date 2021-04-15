import React from 'react';

import './CardContainer.css';
import Card from '../Card/Card';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.state = {
      currentLeftOffset: 0,
      isExpand: false
    };
  }

  componentDidUpdate() {
    const { currentLeftOffset } = this.state;
    this.content.current.scrollLeft = currentLeftOffset;
  }

  handleToggleExpandClick() {
    this.setState((state) => ({ isExpand: !state.isExpand }));
  }

  handleBackwardClick() {
    this.setState({ currentLeftOffset: 0 });
  }

  handleForwardClick() {
    const maxOffset = this.content.current.scrollWidth;
    this.setState({ currentLeftOffset: maxOffset });
  }

  handleScroll(e) {
    this.setState({
      currentLeftOffset: e.target.scrollLeft
    });
  }

  render() {
    const { title, cardList } = this.props;
    const { isExpand } = this.state;

    const cardElements = cardList.map((card) => (
      <Card posterUrl={card.url} title={card.title} />
    ));

    const isExpandClass = isExpand ? 'card-container__cards_isexpand' : '';
    const expandButtonText = isExpand ? '-' : '+';

    return (
      <div className="card-container">
        <h1>{title}</h1>
        <button type="button" onClick={() => this.handleToggleExpandClick()}>
          {expandButtonText}
        </button>
        <button type="button" onClick={() => this.handleBackwardClick()}>
          &lt;
        </button>
        <ul
          className={`card-container__cards ${isExpandClass}`}
          onScroll={(e) => this.handleScroll(e)}
          ref={this.content}
        >
          {cardElements}
        </ul>
        <button type="button" onClick={() => this.handleForwardClick()}>
          &gt;
        </button>
      </div>
    );
  }
}

export default CardContainer;
