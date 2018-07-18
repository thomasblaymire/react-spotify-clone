import React from 'react';
import styled from 'styled-components';
import icons from '../../assets/icons/sprite.svg';

const Track = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 5px;
  color: #676a6f;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  }
`;

const TrackImage = styled.img`
  width: 35px;
  border-radius: 5px;
`;

const TrackNumber = styled.span`
  margin: 0 2rem 0 2rem;
`;

const TrackName = styled.h3`
  width: 350px;
`;

const TrackAlbum = styled.span`
  margin-left: 5rem;
`;

const TrackRuntime = styled.span`
  margin-left: 5rem;
  margin-right: 5rem;
`;

const TrackList = styled.div`
  margin-top: 1rem;
`;

const TrackPopularity = styled.span``;

const TrackFavourite = styled.svg`
  fill: red;
  width: 30px;
  height: 30px;
`;

const TrackFavouritePath = styled.path`
  fill: #ababab;
  transition: all 0.2s ease-in-out;

  &:hover {
    fill: #2c3049;
  }
`;

const trackList = props => {
  let tracklist;

  if (props.tracks) {
    tracklist = props.tracks.splice(15).map((track, index) => {
      return (
        <TrackList key={index}>
          <Track onClick={props.toggleSong}>
            <TrackImage src={track.album.images[0].url} />
            <TrackNumber>{index}</TrackNumber>
            <TrackName>{track.name}</TrackName>

            <TrackFavourite
              width="25"
              height="25"
              viewBox="0 0 90 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <TrackFavouritePath d="M66.874 0A23.13 23.13 0 0 0 45 15.623a23.125 23.125 0 0 0-45 7.503c0 24.987 45 54.55 45 54.55s45-29.563 45-54.55A23.126 23.126 0 0 0 66.874 0z" />
            </TrackFavourite>

            <TrackAlbum>Album Name</TrackAlbum>
            <TrackRuntime>3:29</TrackRuntime>
            <TrackPopularity>9</TrackPopularity>
          </Track>
        </TrackList>
      );
    });
  } else {
    tracklist = <div>There are no tracks available right now.</div>;
  }

  return tracklist;
};

export default trackList;
