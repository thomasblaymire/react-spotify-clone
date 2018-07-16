import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import TrackList from './../components/TrackList/TrackList';

class TopTracksContainer extends Component {
  componentDidMount() {
    this.props.getTopTracks();
  }

  render() {
    if (this.props.topTracks === null) return null;
    return (
      <TrackList
        key={this.props.topTracks.items}
        tracks={this.props.topTracks.items}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    topTracks: state.tracks.topTracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopTracks: () => dispatch(actions.loadTopTracksData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTracksContainer);
