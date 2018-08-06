import React, { Component } from 'react';
import Header from '../UI/Header/Header';
import ProfilePageBG from '../../assets/profile-bg.jpg';
import TrackSearchContainer from './../../containers/TrackSearchContainer';
import TopTracksContainer from './../../containers/TopTracksContainer';
import RecentTracksContainer from './../../containers/RecentTracksContainer';
import PlayListContainer from '../../containers/PlayListContainer';

import Sidebar from '../UI/Sidebar/Sidebar';

class Discover extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Discover',
      description: 'Find new and exiting music from artists all over the world.'
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
            <h3 className="main__title">Top Charts</h3>
            <div className="track__list">
              <TopChartsContainer />
            </div>
          </section>

          <section className="main__section">
            <h3 className="main__title">Genres & Moods</h3>
            <PlayListContainer />
          </section>
        </main>
      </div>
    );
  }
}

export default Discover;
