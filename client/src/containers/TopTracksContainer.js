import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import TrackList from './../components/TrackList/TrackList';

class TopTracksContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heartColor: 'tomato'
    };
  }

  componentDidMount() {
    this.props.getTopTracks();
  }

  setFavouriteTrack = track => {
    this.props.setFavouriteTrack(track);
    this.setState({ heartColor: 'red' });
  };

  toggleSong = track => {
    this.props.toggleSong(track);
  };

  render() {
    if (this.props.topTracks === null) return null;
    return (
      <TrackList
        tracks={this.props.topTracks}
        toggleSong={this.props.toggleSong}
        handleTrack={this.setFavouriteTrack}
        heartColor={this.state.heartColor}
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
    getTopTracks: () => dispatch(actions.loadTopTracksData()),
    toggleSong: track => dispatch(actions.toggleDrawer(track)),
    setFavouriteTrack: track => dispatch(actions.setFavouriteTrack(track))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTracksContainer);
