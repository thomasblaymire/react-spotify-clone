import React from 'react';
import styled from 'styled-components';

const PlayListList = styled.div`
  display: inline-flex;
`;

const PlayList = styled.div`
  width: 230px;
  background: #ffffff;
  border: solid 20px #ffffff;
  margin-right: 3rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  min-height: 280px;
  text-align: center;
  cursor: pointer;
`;

const PlayListError = styled.div``;
const PlayListName = styled.h3``;

const PlayListImage = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-right: 1.5rem;

  @media (min-width: 480px) {
    margin-right: 0;
  }
`;

const playList = props => {
  let playlistList;

  if (props.playlists) {
    playlistList = props.playlists.splice(5).map((playlist, index) => {
      return (
        <PlayListList key={index}>
          <PlayList>
            <PlayListName>{playlist.name}</PlayListName>
            <PlayListImage src={playlist.images[0].url} />
          </PlayList>
        </PlayListList>
      );
    });
  } else {
    playlistList = (
      <PlayListError>
        There are no tracks available right now. Please sign in.
      </PlayListError>
    );
  }

  return playlistList;
};

export default playList;
