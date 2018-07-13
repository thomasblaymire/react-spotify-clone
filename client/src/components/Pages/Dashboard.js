import React, { Component } from 'react';
import Header from '../Header/Header';
import TrackContainer from './../../containers/TrackContainer';
import Sidebar from './../Sidebar/Sidebar';
import AuthContainer from './../../containers/AuthContainer';
import TrackList from './../TrackList/TrackList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'Don diablo'
    };
  }
  render() {
    return (
      <div>
        <Sidebar>
          <TrackContainer />
        </Sidebar>

        <Header artistName={this.state.searchTerm}>
          <AuthContainer />
        </Header>

        <main className="main">
          <section className="main__section">
            <h3 className="main__title">Top Tracks</h3>
            <div className="track__list">
              <TrackList allTracks={this.state.allTracks} />
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

export default Dashboard;
