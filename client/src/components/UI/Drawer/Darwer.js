import React from 'react';
import styled from 'styled-components';
import Controls from './../../Controls/Controls';

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
    padding: 1rem 0 1rem 0;
    height: 80px;
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
  width: 5rem;
  height: 5rem;
`;

const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const TrackInfoName = styled.span`
  color: white;
  font-size: 1.6rem;
`;

const TrackInfoArtist = styled.span`
  color: white;
  font-size: 1.1rem;
  padding-top: 0.5rem;
`;

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
  // if (props.playingTrack.album.images[0].url !== undefined) {
  //   console.log(props.playingTrack.album.images[0].url);
  // }

  let artistName;
  let albumImage;

  if (props.playingTrack.artists && props.playingTrack.album.images) {
    artistName = props.playingTrack.artists[0].name;
    albumImage = props.playingTrack.album.images[0].url;
  }

  console.log(props.playingTrack.artists);

  return (
    <Drawer active={props.active}>
      <TrackInfoContainer>
        <TrackInfoImage src={albumImage} />
        <TrackInfo>
          <TrackInfoName>{props.playingTrack.name}</TrackInfoName>
          <TrackInfoArtist>{artistName}</TrackInfoArtist>
        </TrackInfo>
      </TrackInfoContainer>

      <Controls />

      {/* <TrackName>{props.playingTrack.name}</TrackName> */}
    </Drawer>
  );
};

export default drawer;
