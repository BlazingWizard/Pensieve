import React from 'react';
import { connect } from 'react-redux';

import reviewApi from '../../API/reviewApi';
import reviewTypeApi from '../../API/reviewTypeApi';
import { getAllReviews } from '../../store/reviews/actionCreators';

import './Reviews.css';
import CardForm from '../CardForm';
import CardContainer from '../CardContainer';
import Popup from '../../elements/Popup';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContainerList: [],
      createPopupVisible: false
    };
  }

  componentDidMount() {
    reviewApi.getAll().then((response) => {
      this.props.getAllReviews(response);
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

  render() {
    const { cards } = this.props;
    const { createPopupVisible, cardContainerList } = this.state;
    const content = cardContainerList.map((cardContainer) => (
      <CardContainer
        key={cardContainer.code}
        title={cardContainer.name}
        cardList={cards.filter((e) => e.type === cardContainer.code)}
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
            handleCloseClick={() => this.handleClosePopupClick()}
          />
        </Popup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cards: state
  };
}
export default connect(mapStateToProps, { getAllReviews })(Reviews);
