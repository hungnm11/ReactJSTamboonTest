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

const ListGiphy = ({ giphy }) => (
  <div className="pure-g">
    {giphy && giphy.length !== 0 &&
      giphy.map((item, i) => (
        <GiphyItem key={i} data={item}/>
      ))
    }
  </div>
);

const withLoadMoreScroll = (condiTionFn) => (Component) => {
  class LoadMoreScroll extends Component {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }
    
    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }
    
    onScroll = () => {
      return condiTionFn(this.props) && this.props.onLoadMoreGiphy();
    }

    render() {
      return (<Component {...this.props} />);
    }
  }
}

const loadMoreCondition = props => 
  (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
  && props.gihpy.length
  && !props.isLoadingMore;

const mapStateToProps = state => ({
  giphy: state.Giphy.data.data,
  isGiphyFetching: state.Giphy.isFetching,
  pagination: state.Giphy.data.pagination
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getGiphyTrends
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Giphy);
