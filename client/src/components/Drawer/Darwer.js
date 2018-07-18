import React from 'react';
import styled from 'styled-components';

const Drawer = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background: #363636;
  padding-left: 300px;
  height: 0;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ active }) =>
    active &&
    `
    height: 70px;
    overflow-y: hidden;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  `};
`;

const TrackName = styled.div`
  color: #ffffff;
  font-size: 1.8rem;
`;

const drawer = props => {
  console.log(props.playingTrack.name);

  return (
    <Drawer active={props.active}>
      <TrackName>{props.playingTrack.name}</TrackName>
    </Drawer>
  );
};

export default drawer;
