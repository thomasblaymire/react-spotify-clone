import React from 'react';
import profileIcon from '../../../assets/login.svg';
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
  display: flex;
  align-items: center;
  transition: all 0.4s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 0.4;
    transition: all 0.4s ease-in-out;
  }
`;

const loginButton = props => {
  // requestAccess = () => {
  //   axios
  //     .get('http://localhost:8888/login')
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error + 'Error');
  //     });
  // };

  let loginButton;

  if (props.loggedIn) {
    loginButton = <p>.....</p>;
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
