import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';

import { getGiphyTrends } from '../../actions/giphy';

import GiphyItem from '../GiphyItem';
import Loading from '../Loading';

const ListGiphy = ({ giphy }) => (
  <div className="pure-g">
    {giphy && giphy.length !== 0 &&
      giphy.map((item, i) => (
        <GiphyItem key={i} data={item}/>
      ))
    }
  </div>
);

const withLoadMoreScroll = (condiTionFn) => (ListGiphyContainer) =>
  class WithLoadMoreScroll extends Component {
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
      return (<ListGiphyContainer {...this.props} />);
    }
  }

const loadMoreCondition = props => {
  return (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100)
  && props.giphy.length
  && !props.isLoadingMore;
}

const AdvanceGiphy = compose(
  withLoadMoreScroll(loadMoreCondition),
)(ListGiphy);


const limitItems = 20;

class Giphy extends Component {
  componentDidMount() {
    this.props.getGiphyTrends(limitItems);
  }
  
  onLoadMoreGiphy = (e) => {
    const { getGiphyTrends, pagination } = this.props;
    const offset = (pagination === undefined) ? 0 : (pagination.offset + limitItems);
    getGiphyTrends(limitItems, offset);
  }

  render() {
    const { isGiphyFetching, isLoadingMore, giphy } = this.props;
    if (isGiphyFetching) {
      return <Loading />
    }
    return (
      <AdvanceGiphy 
        giphy={giphy}
        isLoadingMore={isLoadingMore}
        onLoadMoreGiphy={this.onLoadMoreGiphy}
      />
    )
  }
}
const mapStateToProps = state => ({
  giphy: state.Giphy.data,
  isGiphyFetching: state.Giphy.isFetching,
  isLoadingMore: state.Giphy.isLoadingMore,
  pagination: state.Giphy.pagination
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getGiphyTrends
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Giphy);
