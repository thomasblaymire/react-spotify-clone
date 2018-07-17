import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import TrackList from './../components/TrackList/TrackList';

class RecentTracksContainer extends Component {
  componentDidMount() {
    this.props.getRecentTracks();
  }

  render() {
    if (this.props.recentTracks === null) return null;
    return <TrackList tracks={this.props.recentTracks} />;
  }
}

const mapStateToProps = state => {
  return {
    recentTracks: state.tracks.recentTracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRecentTracks: () => dispatch(actions.loadRecentTracksData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentTracksContainer);
