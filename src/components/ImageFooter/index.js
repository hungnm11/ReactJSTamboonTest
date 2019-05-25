import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './image_footer.scss';

class ImageFooter extends Component {
  render() {
    return (
      <div className="pure-g image-footer">
        <div className="pure-u-1-5 link">
          <FontAwesomeIcon icon="link" />
        </div>
        <div className="pure-u-4-5 social">
          <div className="social-item">
            <FontAwesomeIcon icon="eye" />
            <span>7,200</span>
          </div>
          <div className="social-item">
            <FontAwesomeIcon icon="comment" />
            <span>19</span>
          </div>
          <div className="social-item">
            <FontAwesomeIcon icon="heart" />
            <span>654</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageFooter;
