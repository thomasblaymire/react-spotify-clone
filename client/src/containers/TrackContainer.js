import React, { Component } from 'react';
import TrackSearch from '../components/TrackSearch/TrackSearch';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class TrackContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTracks: [],
      searchTerm: 'Please search for an artist...'
    };

    this.searchTrack = this.searchTrack.bind(this);
  }

  searchTrack(e) {
    this.setState({ searchTerm: e.target.value });
    let term = this.state.searchTerm;

    spotifyApi.searchTracks(term, (err, data) => {
      if (data) {
        this.setState({ allTracks: data.tracks.items });
      }
    });
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

export default TrackContainer;
