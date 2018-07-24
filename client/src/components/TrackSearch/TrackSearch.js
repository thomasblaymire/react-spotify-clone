import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/search.svg';

const TrackSearch = styled.div`
  input {
    font-family: 'Nunito', sans-serif;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    border: solid 2px #676a6f;
    padding: 1rem;
    outline: none;
    margin-top: 4rem;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 2rem;
    background-position-x: 95%;
    font-size: 1.4rem;
  }
`;

const trackSearch = props => {
  let placeholder = 'Search for a song';

  return (
    <TrackSearch>
      <input
        type="text"
        value={props.searchTerm}
        onChange={props.searchTrack}
        placeholder={placeholder}
      />
    </TrackSearch>
  );
};

export default trackSearch;
