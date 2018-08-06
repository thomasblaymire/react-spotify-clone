import React from 'react';
import styled from 'styled-components';

const ArtistList = styled.div`
  display: inline-flex;
`;

const Artist = styled.div`
  width: 230px;
  background: #ffffff;
  border: solid 20px #ffffff;
  margin-right: 3rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  min-height: 280px;
  text-align: center;
  cursor: pointer;

  div:not(:last-child) {
    margin-right: 3rem;
  }

  + .item {
    margin-left: 5px;
  }
`;

const ArtistName = styled.h3`
  padding: 1rem 0 1rem 0;
  font-size: 1.5rem;
`;

const ArtistImage = styled.img`
  border-radius: 5px;
  width: 100%;
`;

const ArtistFollowers = styled.span`
  width: 180px;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const ArtistError = styled.span`
  font-size: 1.5rem;
`;

const artistList = props => {
  let artistList;

  if (props.topArtists.items) {
    artistList = props.topArtists.items.splice(5).map((artist, index) => {
      return (
        <ArtistList key={index}>
          <Artist>
            <ArtistImage src={artist.images[0].url} />
            <ArtistName>{artist.name}</ArtistName>
            <ArtistFollowers>
              Followers: {artist.followers.total}
            </ArtistFollowers>
          </Artist>
        </ArtistList>
      );
    });
  } else {
    artistList = (
      <ArtistError>
        There are no artists available right now. Please sign in.
      </ArtistError>
    );
  }

  return artistList;
};

export default artistList;
