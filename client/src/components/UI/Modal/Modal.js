import React from 'react';
import styled from 'styled-components';
import Backdrop from './../Backdrop/Backdrop';

const Modal = styled.div`
  position: fixed;
  width: 70%;
  padding: 16px;
  left: 15%;
  top: 40%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  z-index: 9999;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

const modal = props => {
  return (
    <div>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <Modal
        primary
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        {props.children}
      </Modal>
    </div>
  );
};

export default modal;
