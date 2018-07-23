import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import PlayList from './../components/PlaylistList/PlaylistList';

class PlayListContainer extends Component {
  render() {
    console.log(this.props.artist);
    return <PlayList />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    playlists: state.playlists.playlists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUserPlaylits: () => dispatch(actions.loadUserPlaylistData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayListContainer);
