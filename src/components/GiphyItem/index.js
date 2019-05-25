import React, { Component } from 'react';
import ImageFooter from '../ImageFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
        <div className="avatar">
          <img className="pure-img" src={data.user.avatar_url} alt="" />
        </div>
        <div className="name">
          <p>{data.user.display_name}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="image-name">
        <div className="avatar">
          <FontAwesomeIcon icon="user-circle" color="#a2a2a1" />
        </div>
        <div className="name">
          <p>.....</p>
        </div>
      </div>
    )
  }
}

class GiphyItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="pure-u-1-2 pure-u-md-1-3 pure-u-lg-1-4 item-wrapper">
        <div className="item-content">
          <div className="image-container">
            {renderImage(data.images.fixed_height_still.url)}
          </div>
          <ImageFooter />
        </div>
        {renderUserName(data)}
      </div>
    )
  }
}

export default GiphyItem;
