import React, { Component } from 'react';
import TrackSearch from '../components/TrackSearch/TrackSearch';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class ArtistContainer extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <div>ARTIST</div>;
  }
}

const mapStateToProps = state => {
  return {
    artist: state.artist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getArtistData: term => dispatch(actions.loadArtistData(term))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistContainer);
