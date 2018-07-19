import React, { Component } from 'react';
import Header from '../../components/UI/Header/Header';
import { connect } from 'react-redux';

import TrackSearchContainer from './../../containers/TrackSearchContainer';
import TopTracksContainer from './../../containers/TopTracksContainer';
import TopArtistsContainer from './../../containers/TopArtistsContainer';
import Sidebar from '../UI/Sidebar/Sidebar';
import TrackList from './../TrackList/TrackList';
import Drawer from '../UI/Drawer/Darwer';
import Auth from './../Auth/Auth';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      trackResults: [],
      title: 'Dashboard',
      description:
        'Browse, search and stream over 1 million songs all from one place.'
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentDidMount() {
    console.log(this.props.tracks.favouriteTracks);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      trackResults: nextProps.tracks.tracksResults
    });
  }

  toggleDrawer() {
    this.setState({ openDrawer: !this.state.openDrawer });
  }

  render() {
    let trackSearchResults;

    if (this.state.trackResults.length === 0) {
      trackSearchResults = '';
    } else {
      trackSearchResults = (
        <section className="main__section">
          <h3 className="main__title">Search Results</h3>
          <div className="track__list">
            <TrackList
              key={this.props.topTracks}
              tracks={this.state.trackResults}
              favouriteTracks={this.props.tracks.favouriteTracks}
            />
          </div>
        </section>
      );
    }

    return (
      <div>
        <Sidebar>
          <TrackSearchContainer />
        </Sidebar>

        <Header title={this.state.title} description={this.state.description}>
          <Auth />
        </Header>

        <main className="main">
          {trackSearchResults}

          <section className="main__section">
            <h3 className="main__title">Your Top Tracks</h3>
            <div className="track__list">
              <TopTracksContainer />
            </div>
          </section>

          <section className="main__section">
            <h3 className="main__title">Albums</h3>
            <TopArtistsContainer />
          </section>

          <Drawer
            active={this.props.toggleDrawer}
            playingTrack={this.props.playingTrack}
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    trackResults: state.tracks.trackResults,
    toggleDrawer: state.tracks.toggleDrawer,
    playingTrack: state.tracks.currentlyPlaying,
    favouriteTracks: state.tracks.favouriteTracks
  };
};

export default connect(mapStateToProps)(Dashboard);
