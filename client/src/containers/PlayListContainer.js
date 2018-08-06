import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import PlayList from './../components/PlaylistList/PlaylistList';

class PlayListContainer extends Component {
  render() {
    console.log(this.props);
    return <PlayList playlists={this.props.playlists} />;
  }

  componentDidMount() {
    this.props.loadUserPlaylits();
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    playlists: state.playlists.playlists.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUserPlaylits: () => dispatch(actions.loadUserPlaylistsData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayListContainer);
