import React from 'react';
import styled from 'styled-components';
import icons from '../../assets/icons/sprite.svg';
import millisecondsToMinutesSeconds from '../../helpers/moment';
import TrackActionsContainer from './../../containers/TrackActionsContainer';
import ReactTooltip from 'react-tooltip';

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
  margin-right: 1.5rem;

  @media (min-width: 480px) {
    margin-right: 0;
  }
`;

const TrackNumber = styled.span`
  margin: 0 2rem 0 2rem;
  display: none;

  @media (min-width: 480px) {
    display: block;
  }
`;

const TrackName = styled.h3`
  width: 350px;
`;

const TrackAlbum = styled.span`
  margin-left: 4rem;
  width: 300px;
  display: none;

  @media (min-width: 480px) {
    display: block;
  }
`;

const TrackRuntime = styled.span`
  margin: 0 5rem 0 5rem;
  display: none;
  @media (min-width: 480px) {
    display: block;
  }
`;

const TrackList = styled.div`
  margin-top: 1rem;
`;

const TrackPopularity = styled.span`
  width: 100px;
  display: none;

  @media (min-width: 480px) {
    display: block;
  }
`;

const TrackFavourite = styled.svg`
  fill: red;
  width: 2rem;
  height: 2rem;
  display: none;
  @media (min-width: 480px) {
    display: block;
  }
`;

const ActionToggle = styled.svg`
  fill: red;
  width: 3rem;
  height: 3rem;
  margin-right: 10px;
`;

const TrackError = styled.span`
  font-size: 1.5rem;
`;

const trackList = props => {
  let tracklist;

  if (props.tracks) {
    tracklist = props.tracks.splice(15).map((track, index) => {
      return (
        <TrackList key={index}>
          <Track onClick={() => props.toggleSong(track)}>
            <TrackImage src={track.album.images[0].url} />
            <TrackNumber>{index}</TrackNumber>
            <TrackName>{track.name}</TrackName>

            <TrackFavourite onClick={() => props.handleTrack(track)}>
              <use xlinkHref={icons + '#icon-heart1'} fill="red" />
            </TrackFavourite>

            <TrackAlbum>{track.album.name}</TrackAlbum>
            <TrackRuntime>
              {millisecondsToMinutesSeconds(track.duration_ms)}
            </TrackRuntime>
            <TrackPopularity>{track.popularity}</TrackPopularity>

            <ActionToggle
              onClick={() => props.toggleMenu(track)}
              data-tip="custom show"
              data-event="click"
            >
              <use xlinkHref={icons + '#icon-dots'} />
            </ActionToggle>

            <ReactTooltip
              place="right"
              type="dark"
              effect="solid"
              globalEventOff="click"
              className="customeTheme"
            >
              <TrackActionsContainer />
            </ReactTooltip>
          </Track>
        </TrackList>
      );
    });
  } else {
    tracklist = (
      <TrackError>
        There are no tracks available right now. Please sign in.
      </TrackError>
    );
  }

  return tracklist;
};

export default trackList;
