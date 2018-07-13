import React from 'react';
import styled from 'styled-components';

const TrackSaarch = styled.div`
  input {
    font-family: 'Nunito', sans-serif;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    border: solid 2px #676a6f;
    padding: 1rem;
    outline: none;
    margin-top: 4rem;
    background-image: url('../../assets/search.svg');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 2rem;
    background-position-x: 95%;
  }
`;

const trackSearch = props => {
  let placeholder = 'Search for a song';

  return (
    <TrackSaarch>
      <input
        type="text"
        value={props.searchTerm}
        onChange={props.searchTrack}
        placeholder={placeholder}
      />
    </TrackSaarch>
  );
};

export default trackSearch;
