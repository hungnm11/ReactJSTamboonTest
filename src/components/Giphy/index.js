import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getGiphyTrends } from '../../actions/giphy';

import GiphyItem from '../GiphyItem';
import Loading from '../Loading';

class Giphy extends Component {

  componentDidMount() {
    this.props.getGiphyTrends(20);
  }

  render() {
    const { isGiphyFetching, giphy } = this.props;
    if (isGiphyFetching) {
      return <Loading />
    }
    return (
      <div className="pure-g">
        {giphy && giphy.length !== 0 &&
          giphy.map((item, i) => (
            <GiphyItem key={i} data={item}/>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  giphy: state.Giphy.data,
  isGiphyFetching: state.Giphy.isFetching
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getGiphyTrends
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Giphy);
