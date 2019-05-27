import React from 'react';
import './giphy_fullsize.scss';

const GiphyFullSize = () => {
  return (
    <div className="fullsize-wrapper">
      <div className="pure-g">
        <div className="pure-u-1">
          <img className="pure-img" src="https://media.giphy.com/media/l0HlMG1EX2H38cZeE/giphy.gif" alt="" />
        </div>
      </div>
    </div>
  )
}

export default GiphyFullSize;
