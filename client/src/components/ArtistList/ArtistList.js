import React from 'react';
import styled from 'styled-components';

const ArtistList = styled.div`
  display: inline-flex;
`;

const Artist = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: solid 20px #ffffff;
  margin-right: 3rem;
  border-radius: 5px;
`;

const ArtistName = styled.h3``;

const ArtistImage = styled.img`
  width: 180px;
  border-radius: 5px;
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
