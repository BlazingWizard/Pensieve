import React from 'react';

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

export default Popup;
