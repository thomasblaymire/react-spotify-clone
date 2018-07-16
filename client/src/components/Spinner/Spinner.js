import React from 'react';
import styled from 'styled-components';

const SpinnerBlock = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`;

function rotationBuilder() {
  const Rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
  return Rotation;
}

const SpinnerElement = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #113e65;
  border-radius: 50%;
  animation: spinner__ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #113e65 transparent transparent transparent;
  animation: ${rotationBuilder()};
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const spinner = () => {
  return (
    <SpinnerBlock>
      <SpinnerElement />
      <SpinnerElement />
      <SpinnerElement />
      <SpinnerElement />
    </SpinnerBlock>
  );
};

export default spinner;
