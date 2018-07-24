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

  triggerMenu = track => {
    this.props.toggleActionMenu(track);
  };

  render() {
    return (
      <TrackList
        tracks={this.props.topTracks}
        toggleSong={this.props.toggleSong}
        handleTrack={this.setFavouriteTrack}
        heartColor={this.state.heartColor}
        toggleMenu={this.triggerMenu}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    topTracks: state.tracks.topTracks,
    toggleActionMenu: state.trackActions.toggleActionMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopTracks: () => dispatch(actions.loadTopTracksData()),
    toggleSong: track => dispatch(actions.toggleDrawer(track)),
    setFavouriteTrack: track => dispatch(actions.setFavouriteTrack(track)),
    toggleActionMenu: track => dispatch(actions.toggleActionMenu(track))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTracksContainer);
