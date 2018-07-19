import React, { Component } from 'react';
import TrackActions from './../components/TrackActions/TrackActions';

class TrackActionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <TrackActions />;
  }
}

export default TrackActionsContainer;
