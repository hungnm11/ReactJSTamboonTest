import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './giphy_item.scss';
import waiting from '../../assets/images/waiting.gif';

const renderImage = url => {
  if (url !== undefined) {
    return <img className="pure-img" role="presentation" src={url} alt="" />;
  } else {
    return <img className="pure-img" src={waiting} alt="" />;
  }
}

const renderUserName = data => {
  if (data.user) {
    return (
      <div className="image-name">
        <div className="name">
          <p>{data.user.display_name}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="image-name">
        <div className="name">
          <p>Omise Tamboon</p>
        </div>
      </div>
    )
  }
}

class GiphyItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="pure-u-1-2 pure-u-md-1-2 pure-u-lg-1-2 item-wrapper">
        <div className="item-content">
          <div className="image-container">
            <Link
              to={{
                pathname: `/giphy/${data.id}`,
                state: { modal: true }
              }}
            >
              {renderImage(data.images.fixed_height_still.url)}
            </Link>

          </div>
          <div className="pure-g image-footer">
            <div className="pure-u-3-5 link">
              {renderUserName(data)}
            </div>
            <div className="pure-u-2-5 social">
              <div className="social-item">
                <a className="pure-button pure-button-primary" href="/">Donate</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GiphyItem;
