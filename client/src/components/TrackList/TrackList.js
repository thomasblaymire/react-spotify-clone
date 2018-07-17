import React from 'react';
import styled from 'styled-components';

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
  width: 400px;
`;

const TrackAlbum = styled.span`
  margin-left: 2rem;
`;

const TrackRuntime = styled.span`
  margin-left: 5rem;
  margin-right: 5rem;
`;

const TrackList = styled.div`
  margin-top: 1rem;
`;

const TrackPopularity = styled.span``;

const trackList = props => {
  let tracklist;

  if (props.tracks) {
    tracklist = props.tracks.splice(15).map((track, index) => {
      return (
        <TrackList key={index}>
          <Track>
            <TrackImage src={track.album.images[0].url} />
            <TrackNumber>{index}</TrackNumber>
            <TrackName>{track.name}</TrackName>
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
