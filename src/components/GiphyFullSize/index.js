import React, { Component } from 'react';
import './giphy_fullsize.scss';

class GiphyFullSize extends Component {
  render() {
    const { match, imgIdModal } = this.props;
    const giphyId = (match === undefined) ? imgIdModal : match.params.id;
    return (
      <div className="fullsize-wrapper">
        <div className="pure-g">
          <div className="pure-u-1">
            <img className="pure-img" src={`https://media.giphy.com/media/${giphyId}/giphy.gif`} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default GiphyFullSize;
