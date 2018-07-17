import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import ArtistList from './../components/ArtistList/ArtistList';

class TopArtistsContainer extends Component {
  componentDidMount() {
    this.props.getTopArtists();
  }

  render() {
    if (this.props.topArtists === null) return null;
    return <ArtistList topArtists={this.props.topArtists} />;
  }
}

const mapStateToProps = state => {
  return {
    topArtists: state.artists.topArtists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopArtists: () => dispatch(actions.loadTopArtistsData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopArtistsContainer);
