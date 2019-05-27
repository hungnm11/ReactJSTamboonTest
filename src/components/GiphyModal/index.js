import React, { Component } from 'react';
import ImageFullSize from '../GiphyFullSize';

import './giphy_modal.scss';

class GiphyModal extends Component {
  handleBack = (e) => {
    e.stopPropagation();
    this.props.history.goBack();
  }
  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <button type="button" onClick={this.handleBack}>
            Close
          </button>
          <ImageFullSize />
        </div>
      </div>
    )
  }
}

export default GiphyModal;
