import React from 'react';
import playIcon from '../../../assets/play.svg';
import headerHero from '../../../assets/bg.jpg';
import styled, { css } from 'styled-components';

const Header = styled.div`
  min-height: 40vh;
  background-color: #2a2a72;
  background-image: url(${headerHero});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  font-family: 'Nunito', sans-serif;
  padding-left: 10rem 0rem 1rem 1rem;

  @media (min-width: 480px) {
    padding: 0rem 10rem 2rem 10rem;
  }
`;

const HeaderTitle = styled.h3`
  font-size: 5rem;
  color: #eaf6ff;
  padding-top: 6rem;
`;

const HeaderDescription = styled.p`
  color: #eaf6ff;
  font-size: 2rem;
  padding-top: 2rem;
  width: 100%;
`;

const HeaderButtons = styled.div`
  margin-top: 4rem;
  display: flex;

  & > * {
    margin-right: 1.5rem;
    text-transform: uppercase;
    outline: none;
  }
`;

const HeaderButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background: #1ed760;
  font-weight: bold;
  display: flex;
  align-items: center;

  img {
    width: 15px;
    margin-left: 1rem;
  }

  ${props =>
    props.secondary &&
    css`
      font-size: 1.5rem;
      font-weight: bold;
      padding: 1rem 2.5rem;
      border-radius: 15px;
      border: none;
      cursor: pointer;
      color: #ffffff;
      background: #1ed760;
    `};
`;

const header = props => {
  return (
    <Header>
      <HeaderTitle>{props.title}</HeaderTitle>
      <HeaderDescription>{props.description}</HeaderDescription>
      <HeaderButtons>
        <HeaderButton>
          Play all <img alt="Play All Songs" src={playIcon} />
        </HeaderButton>
        <HeaderButton secondary>Mix</HeaderButton>
      </HeaderButtons>
      {props.children}
    </Header>
  );
};

export default header;
