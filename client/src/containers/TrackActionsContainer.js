import React, { Component } from 'react';
import TrackActions from './../components/TrackActions/TrackActions';
import { connect } from 'react-redux';

class TrackActionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <TrackActions currentTrack={this.props.currentTrack} />;
  }
}

const mapStateToProps = state => {
  return {
    currentTrack: state.tracks.currentlyPlaying
  };
};

export default connect(mapStateToProps)(TrackActionsContainer);
