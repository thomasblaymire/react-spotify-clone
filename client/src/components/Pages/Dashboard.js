import React, { Component } from 'react';
import Header from '../Header/Header';
import TrackSearchContainer from './../../containers/TrackSearchContainer';
import TopTracksContainer from './../../containers/TopTracksContainer';
import TopArtistsContainer from './../../containers/TopArtistsContainer';
import Sidebar from './../Sidebar/Sidebar';
import AuthContainer from './../../containers/AuthContainer';
import { connect } from 'react-redux';
import TrackList from './../TrackList/TrackList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTracks: [],
      artistName: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      allTracks: nextProps.tracks
    });
  }

  render() {
    let trackSearchResults;

    if (this.props.trackResults === null) return null;
    return (
      <TrackList key={this.props.topTracks} tracks={this.props.topTracks} />
    );

    return (
      <div>
        <Sidebar>
          <TrackSearchContainer />
        </Sidebar>

        <Header artistName={this.state.artistName}>
          <AuthContainer />
        </Header>

        <main className="main">
          <section className="main__section">
            <h3 className="main__title">Search Results</h3>
            <div className="track__list">
              <TrackList tracks={this.props.trackResults} />
            </div>
          </section>

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
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('Dash');
  console.log(state.tracks.trackResults);
  return {
    tracks: state.tracks,
    trackResults: state.tracks.trackResults
  };
};

export default connect(mapStateToProps)(Dashboard);
