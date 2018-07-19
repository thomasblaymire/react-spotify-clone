import React from 'react';
import styled from 'styled-components';

import icons from '../../assets/icons/sprite.svg';

const Controls = styled.div`
  position: absolute;
  left: 50%;

  > svg {
    width: 3rem;
    color: white;
    font-size: 2rem;
    margin-right: 3rem;
    cursor: pointer;
  }
`;

const PlayButton = styled.svg``;

const PauseButton = styled.svg``;

const FFButton = styled.svg``;

const RWButton = styled.svg``;

const controls = props => {
  return (
    <Controls>
      <RWButton>
        <use xlinkHref={icons + '#icon-rewind'} />
      </RWButton>
      <PlayButton>
        <use xlinkHref={icons + '#icon-play'} />
      </PlayButton>
      <FFButton>
        <use xlinkHref={icons + '#icon-fastforward'} />
      </FFButton>
    </Controls>
  );
};

export default controls;
