import React, { Component } from 'react';
import Header from '../Header/Header';
import TrackSearchContainer from './../../containers/TrackSearchContainer';
import TopTracksContainer from './../../containers/TopTracksContainer';
import Sidebar from './../Sidebar/Sidebar';
import AuthContainer from './../../containers/AuthContainer';
import TrackList from './../TrackList/TrackList';
import { connect } from 'react-redux';

class Profile extends Component {
  componentWillReceiveProps(nextProps) {
    this.setState({
      allTracks: nextProps.tracks
    });
  }

  render() {
    return (
      <div>
        <Sidebar>
          <TrackSearchContainer />
        </Sidebar>

        <Header>
          <AuthContainer />
        </Header>

        <main className="main">
          <section className="main__section">
            <h3 className="main__title">Your Top Tracks</h3>
            <div className="track__list">
              {/* <TrackList tracks={this.state.allTracks} /> */}
              <TopTracksContainer />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks
  };
};

export default connect(mapStateToProps)(Profile);
