import React, { Component } from 'react';
import TrackSearch from '../components/TrackSearch/TrackSearch';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class TrackContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTracks: [],
      searchTerm: ''
    };

    this.searchTrack = this.searchTrack.bind(this);
  }

  searchTrack(e) {
    let term = this.state.searchTerm;
    this.setState({ searchTerm: e.target.value });

    this.props.getTrackData(term);
  }

  render() {
    return (
      <TrackSearch
        searchTerm={this.state.searchTerm}
        searchTrack={this.searchTrack}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTrackData: term => dispatch(actions.loadTracksData(term))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackContainer);
