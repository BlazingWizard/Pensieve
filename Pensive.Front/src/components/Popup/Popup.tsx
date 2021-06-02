import React from 'react';

interface PopupProps {
  isVisible: boolean;
  children: React.ReactElement;
  handleCloseClick: () => void;
}

class Popup extends React.Component<PopupProps> {
  componentDidUpdate(): void {
    this.updateBackgroundScrollState();
  }

  updateBackgroundScrollState(): void {
    const { isVisible } = this.props;
    const overflow = isVisible ? 'hidden' : 'auto';
    document.body.style.overflow = overflow;
  }

  render(): React.ReactElement | null {
    const { children, handleCloseClick, isVisible } = this.props;
    if (!isVisible) {
      return null;
    }

    return (
      <div className="popup__overlay">
        <div className="popup__content">
          <button
            className="popup__close-button"
            type="button"
            onClick={handleCloseClick}
          >
            x
          </button>
          {children}
        </div>
      </div>
    );
  }
}

export default Popup;
