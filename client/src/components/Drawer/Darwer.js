import React from 'react';
import styled from 'styled-components';

const Drawer = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background: #363636;
  height: 0;

  ${({ active }) =>
    active &&
    `
    height: 70px;
    overflow-y: hidden;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  `};
`;

const drawer = props => {
  console.log(props);

  return <Drawer active={props.active} />;
};

export default drawer;
