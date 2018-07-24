import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const LoginButton = styled.a`
  margin: 0 auto;
  text-align: center;
  background-size: cover;
  background: #1ed760;
  padding: 0.75rem 1.5rem;
  margin-top: 3rem;
  border: none;
  font-size: 2rem;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  text-decoration: none;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.4;
    transition: all 0.4s ease-in-out;
  }
`;

const loginButton = props => {
  let loginButton;

  if (props.loggedIn) {
    loginButton = null;
  } else {
    loginButton = (
      <LoginButton href="http://localhost:8888/login">
        Login to Spotify
      </LoginButton>
    );
  }

  return loginButton;
};

export default loginButton;
