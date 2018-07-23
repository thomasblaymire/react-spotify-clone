import React, { Component } from 'react';
import Header from '../../components/UI/Header/Header';
import Sidebar from './../UI/Sidebar/Sidebar';
import TrackSearchContainer from '../../containers/TrackSearchContainer';

import { connect } from 'react-redux';
import ArtistContainer from '../../containers/ArtistContainer';

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: ''
    };
  }

  componentWillMount() {
    console.log(window.location.search);

    // Get artist from URL item
    //1. Get artist name from query string
    //2. Call action creator to get artist details
    //3. Map the state to props to get the values from inside
  }

  render() {
    return (
      <div>
        <Sidebar>
          <TrackSearchContainer />
        </Sidebar>

        <Header
          image={this.state.artistName}
          title={this.state.title}
          description={this.state.description}
        />

        <main className="main">
          <ArtistContainer term={this.state.artistName} />

          <section className="main__section">
            <h3 className="main__title">Top Songs</h3>
            <div className="track__list" />
          </section>

          <section className="main__section">
            <h3 className="main__title">Albums</h3>
          </section>
        </main>
      </div>
    );
  }
}

export default connect()(Artist);
