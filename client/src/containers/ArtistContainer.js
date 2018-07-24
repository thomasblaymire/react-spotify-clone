import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class ArtistContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getArtistData('1l2ekx5skC4gJH8djERwh1');

    // get id out of the url
  }

  render() {
    console.log(this.props.artist);
    return <div>ARTIST</div>;
  }
}

const mapStateToProps = state => {
  return {
    artist: state.artist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getArtistData: term => dispatch(actions.loadArtistData(term))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistContainer);
