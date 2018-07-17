import React, { Component } from 'react';
import Header from '../Header/Header';
import ProfilePageBG from '../../assets/';
import TrackSearchContainer from './../../containers/TrackSearchContainer';
import TopTracksContainer from './../../containers/TopTracksContainer';
import RecentTracksContainer from './../../containers/RecentTracksContainer';
import Sidebar from './../Sidebar/Sidebar';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Profile',
      description: 'See your most played artists, albums and songs.'
    };
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div>
        <Sidebar>
          <TrackSearchContainer />
        </Sidebar>

        <Header
          title={this.state.title}
          description={this.state.description}
          image={ProfilePageBG}
        />

        <main className="main">
          <section className="main__section">
            <h3 className="main__title">Your Top Tracks</h3>
            <div className="track__list">
              <RecentTracksContainer />
              <TopTracksContainer />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Profile;
