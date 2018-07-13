import React, { Component } from 'react';
import Header from '../Header/Header';
import TrackContainer from './../../containers/TrackContainer';
import Sidebar from './../Sidebar/Sidebar';
import AuthContainer from './../../containers/AuthContainer';
import TrackList from './../TrackList/TrackList';
import { connect } from 'react-redux';

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
    return (
      <div>
        <Sidebar>
          <TrackContainer />
        </Sidebar>

        <Header artistName={this.state.artistName}>
          <AuthContainer />
        </Header>

        <main className="main">
          <section className="main__section">
            <h3 className="main__title">Top Tracks</h3>
            <div className="track__list">
              <TrackList tracks={this.state.allTracks} />
            </div>
          </section>

          <section className="main__section">
            <h3 className="main__title">Albums</h3>
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

export default connect(mapStateToProps)(Dashboard);
