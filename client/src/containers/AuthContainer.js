import React, { Component } from 'react';
import LoginButton from './../components/Auth/LoginButton/LoginButton';
import SpotifyWebApi from 'spotify-web-api-js';
import Modal from './../components/Modal/Modal';
import styled from 'styled-components';

const LoginContainer = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
  justify-content: space-evenly;
`;

const LoginTitle = styled.div`
  font-size: 2.5rem;
`;

const LoginDescription = styled.div`
  font-size: 1.5rem;
`;

const spotifyApi = new SpotifyWebApi();

class AuthContainer extends Component {
  constructor(props) {
    super(props);

    const params = this.getHashParams();
    const token = params.access_token;

    this.state = {
      loggedIn: token ? true : false,
      openModal: true
    };

    if (token) {
      spotifyApi.setAccessToken(token);
      this.setState({ openModal: false });
    }
  }

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }

    return hashParams;
  }

  loginToggleHandler = () => {
    this.setState(prevState => {
      return { openModal: true };
    });
  };

  render() {
    let login;

    if (this.state.loggedIn) {
      return null;
    } else {
      login = (
        <Modal show={this.state.openModal} modalClosed={this.state.openModal}>
          <LoginContainer>
            <LoginTitle>Welcome!</LoginTitle>
            <LoginDescription>
              Please connect your Spotify account to get started.
            </LoginDescription>
            <LoginButton loggedIn={this.state.loggedIn} />{' '}
          </LoginContainer>
        </Modal>
      );
    }

    return login;
  }
}

export default AuthContainer;
