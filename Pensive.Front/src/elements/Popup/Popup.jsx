import React from 'react';
import PropTypes from 'prop-types';

import './Popup.css';

class Popup extends React.Component {
  componentDidUpdate() {
    this.updateBackgroundScrollState();
  }

  updateBackgroundScrollState() {
    const { isVisible } = this.props;
    const overflow = isVisible ? 'hidden' : 'auto';
    document.body.style.overflow = overflow;
  }

  render() {
    const { children, handleCloseClick, isVisible } = this.props;
    if (!isVisible) {
      return null;
    }

    return (
      <div className="popup__overlay">
        <div className="popup__content">
          <button type="button" onClick={handleCloseClick}>
            x
          </button>
          {children}
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.element.isRequired,
  handleCloseClick: PropTypes.func.isRequired
};

Popup.defaultProps = {
  isVisible: false
};

export default Popup;
