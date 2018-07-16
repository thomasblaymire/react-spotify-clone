import React from 'react';
import styled from 'styled-components';

const Artist = styled.div`
  width: 200px;
  height: 200px;
  display: inline-flex;
  align-items: center;
  background: #ffffff;
  border: solid 20px #ffffff;
  margin-right: 3rem;
`;

const ArtistName = styled.h3``;

const ArtistList = styled.div`
  margin-top: 1rem;
`;

const ArtistImage = styled.img`
  width: 150px;
`;

const artistList = props => {
  console.log('HI');
  console.log(props);

  let artistList;

  if (props.topArtists.items) {
    artistList = props.topArtists.items.splice(15).map((artist, index) => {
      return (
        <ArtistList>
          <Artist>
            <ArtistImage src={artist.images[0].url} />
            <ArtistName>{artist.name}</ArtistName>
          </Artist>
        </ArtistList>
      );
    });
  } else {
    artistList = <div>There are no artists available right now.</div>;
  }

  return artistList;
};

export default artistList;
