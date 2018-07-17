import React, { Component } from 'react';
import Header from '../Header/Header';
import TrackSearchContainer from './../../containers/TrackSearchContainer';
import TopTracksContainer from './../../containers/TopTracksContainer';
import TopArtistsContainer from './../../containers/TopArtistsContainer';
import Sidebar from './../Sidebar/Sidebar';
import AuthContainer from './../../containers/AuthContainer';
import { connect } from 'react-redux';
import TrackList from './../TrackList/TrackList';
import Drawer from './../Drawer/Darwer';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      trackResults: [],
      openDrawer: true
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      trackResults: nextProps.tracks.tracksResults
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  toggleDrawer() {
    console.log('Toggle Drawer');
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

        <Header artistName={this.state.artistName}>
          <AuthContainer />
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
            <button onClick={this.toggleDrawer}>Toogle </button>
          </section>

          <Drawer active={this.state.openDrawer} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    trackResults: state.tracks.trackResults
  };
};

export default connect(mapStateToProps)(Dashboard);
