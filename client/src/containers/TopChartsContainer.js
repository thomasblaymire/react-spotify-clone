import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import ArtistList from './../components/ArtistList/ArtistList';

class TopChartsContainer extends Component {
  componentDidMount() {
    this.props.getTopArtists();
  }

  render() {
    if (this.props.topCharts === null) return null;
    return <ChartList topCharts={this.props.topCharts} />;

    // spotifyApi.getRecommendations;
    // spotifyApi.getPlaylist;
  }
}

const mapStateToProps = state => {
  return {
    topCharts: state.charts.topCharts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopCharts: () => dispatch(actions.loadTopChartsData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopArtistsContainer);
