import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from "react-router-dom";

import { getGiphyTrends } from '../../actions/giphy';

import GiphyItem from '../GiphyItem';
import Loading from '../Loading';
import ImageFullSize from '../GiphyFullSize';
import Modal from '../GiphyModal';

class GiphyModal extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Giphy1} />
          <Route path="/giphy/:id" component={ImageFullSize} />
        </Switch>
        {isModal ? <Route path="/giphy/:id" component={Modal} /> : null}
      </div>
    );
  }
}

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

const Giphy1 = connect(mapStateToProps, mapDispatchToProps)(Giphy);
export default GiphyModal;
