import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ImageFullSize from '../GiphyFullSize';

import './giphy_modal.scss';

class GiphyModal extends Component {
  handleBack = (e) => {
    e.stopPropagation();
    this.props.history.goBack();
  }
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <FontAwesomeIcon icon="times-circle" onClick={this.handleBack} />
          <ImageFullSize imgIdModal={id}/>
        </div>
      </div>
    )
  }
}

export default GiphyModal;
