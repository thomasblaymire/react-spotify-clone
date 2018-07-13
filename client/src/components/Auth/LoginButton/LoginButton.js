import React from 'react';
import profileIcon from '../../../assets/login.svg';
import styled from 'styled-components';
import axios from 'axios';

const LoginButton = styled.a`
  background-image: url('./assets/login.svg');
  background-size: cover;
  background: green;
  padding: 0.75rem 1.5rem;
  border: none;
  font-size: 2rem;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.4s ease-in-out;
  position: absolute;
  left: 80%;

  &:hover {
    opacity: 0.4;
    transition: all 0.4s ease-in-out;
  }
`;

const LoginButtonIcon = styled.img`
  width: 35px;
  margin-left: 1rem;
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
    console.log('user logged in');
    loginButton = <p>.....</p>;
  } else {
    console.log('login button');
    loginButton = (
      <LoginButton href="http://localhost:8888/login">
        Login to Spotify
        <LoginButtonIcon src={profileIcon} />
      </LoginButton>
    );
  }

  return loginButton;
};

export default loginButton;
