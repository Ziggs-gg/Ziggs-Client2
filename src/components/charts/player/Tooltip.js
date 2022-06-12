import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const Tooltip = ({ children, message }) => {
  return (
    <Container>
      {children}
      <Content className="tooltip">{message}</Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }
`;

const Content = styled.div`
  display: none;
  position: absolute;
  z-index: 200;
`;

export default Tooltip;
