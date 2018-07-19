import React from 'react';
import styled from 'styled-components';
import icons from '../../assets/icons/sprite.svg';
import TrackActionsContainer from '../../containers/TrackActionsContainer';

import moment from 'moment';

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
  margin-left: 4rem;
  width: 300px;
`;

const TrackRuntime = styled.span`
  margin-left: 5rem;
  margin-right: 5rem;
`;

const TrackList = styled.div`
  margin-top: 1rem;
`;

const TrackPopularity = styled.span`
  width: 150px;
`;

const TrackFavourite = styled.svg`
  fill: red;
  width: 2rem;
`;

const TrackFavouritePath = styled.path`
  fill: #ababab;
  transition: all 0.2s ease-in-out;

  &:hover {
    fill: #2c3049;
  }
`;

const ActionToggle = styled.svg`
  fill: red;
  width: 3rem;
  height: 3rem;
`;

const trackList = props => {
  let tracklist;

  if (props.tracks) {
    tracklist = props.tracks.splice(15).map((track, index) => {
      // Take this outa here!
      const millisecondsToMinutesSeconds = trackDuration => {
        let duration = moment.duration(trackDuration, 'milliseconds');
        let fromMinutes = Math.floor(duration.asMinutes());
        let fromSeconds = Math.floor(duration.asSeconds() - fromMinutes * 60);

        return Math.floor(duration.asSeconds()) >= 60
          ? (fromMinutes <= 9 ? '0' + fromMinutes : fromMinutes) +
              ':' +
              (fromSeconds <= 9 ? '0' + fromSeconds : fromSeconds)
          : '00:' + (fromSeconds <= 9 ? '0' + fromSeconds : fromSeconds);
      };

      return (
        <TrackList key={index}>
          <Track onClick={() => props.toggleSong(track)}>
            <TrackImage src={track.album.images[0].url} />
            <TrackNumber>{index}</TrackNumber>
            <TrackName>{track.name}</TrackName>

            <TrackFavourite
              onClick={() => props.handleTrack(track)}
              width="25"
              height="25"
              viewBox="0 0 90 78"
              xmlns="http://www.w3.org/2000/svg"
            >
              <TrackFavouritePath
                style={{ backgroundColor: props.heartColor }}
                d="M66.874 0A23.13 23.13 0 0 0 45 15.623a23.125 23.125 0 0 0-45 7.503c0 24.987 45 54.55 45 54.55s45-29.563 45-54.55A23.126 23.126 0 0 0 66.874 0z"
              />
            </TrackFavourite>

            <TrackAlbum>{track.album.name}</TrackAlbum>
            <TrackRuntime>
              {millisecondsToMinutesSeconds(track.duration_ms)}
            </TrackRuntime>
            <TrackPopularity>{track.popularity}</TrackPopularity>

            <ActionToggle onClick={() => props.triggerMenu(track)}>
              <use xlinkHref={icons + '#icon-dots'} />
            </ActionToggle>

            <TrackActionsContainer />
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
