import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Modal from '../UI/Modal/Modal';
import LoginButton from './LoginButton/LoginButton';
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

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: this.token ? true : false,
      openModal: true
    };
  }

  componentDidMount() {
    const params = this.getHashParams();
    const token = params.access_token;

    if (token) {
      spotifyApi.setAccessToken(token);
      localStorage.setItem('access_token', token);
      this.setState({ openModal: false });
      // This hacky...fix access token in node
      // window.history.pushState({}, document.title, '/' + emptyURL);
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

export default Auth;
