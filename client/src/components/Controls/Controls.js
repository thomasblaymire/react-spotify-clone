import React from 'react';
import styled from 'styled-components';

import icons from '../../assets/icons/sprite.svg';

const Controls = styled.div`
  position: absolute;
  left: 50%;
`;

const PlayButton = styled.span`
  color: white;
  font-size: 2rem;
`;

const PauseButton = styled.span``;

const FFButton = styled.span``;

const RWButton = styled.span``;

const controls = props => {
  return (
    <Controls>
      <RWButton />
      <PlayButton>
        <use xlinkHref={icons + '#play'} />
        TEST
      </PlayButton>
      <FFButton />
    </Controls>
  );
};

export default controls;
