import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import ImageFullSize from '../GiphyFullSize';
import Modal from '../GiphyModal';
import Giphy from '../Giphies';

class GiphiesWithModal extends Component {
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
          <Route exact path="/" component={Giphy} />
          <Route path="/giphy/:id" component={ImageFullSize} />
        </Switch>
        {isModal ? <Route path="/giphy/:id" component={Modal} /> : null}
      </div>
    );
  }
}

export default GiphiesWithModal;
