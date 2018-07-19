import React from 'react';
import styled from 'styled-components';

const Drawer = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background: #363636;
  z-index: 1;
  /* padding-left: 300px; */
  height: 0;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

  display: flex;
  align-items: center;

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

const TrackInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  left: 4rem;
`;

const TrackInfoImage = styled.img`
  width: 15px;
  height: 15px;
`;

const TrackInfoName = styled.span``;

const TrackInfoArtist = styled.span``;

const TrackName = styled.div`
  color: #ffffff;
  font-size: 1.8rem;

  display: flex;
  justify-content: center;

  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const drawer = props => {
  console.log(props);

  // if (props.playingTrack.album.images[0].url !== undefined) {
  //   console.log(props.playingTrack.album.images[0].url);
  // }

  return (
    <Drawer active={props.active}>
      <TrackInfoContainer>TEST</TrackInfoContainer>
      <TrackName>{props.playingTrack.name}</TrackName>
    </Drawer>
  );
};

export default drawer;
