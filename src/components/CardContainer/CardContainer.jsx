import React from 'react';

import './CardContainer.css';
import Card from '../Card/Card';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.state = {
      currentLeftOffset: 0
    };
  }

  componentDidUpdate() {
    const { currentLeftOffset } = this.state;
    this.content.current.scrollLeft = currentLeftOffset;
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
    const { currentLeftOffset } = this.state;

    const cardElements = cardList.map((card) => (
      <Card posterUrl={card.url} title={card.title} />
    ));

    return (
      <div className="card-container">
        <h1>{title}</h1>
        <h1>{currentLeftOffset}</h1>
        <button type="button" onClick={() => this.handleBackwardClick()}>
          &lt;
        </button>
        <ul
          className="card-container__cards"
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
