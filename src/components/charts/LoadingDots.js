import React from 'react';
import styled from 'styled-components';
import { Loading } from 'react-loading-dot';

const LoadingDots = () => {
  return (
    <LoadingComponents>
      <Loading size="1rem" />
    </LoadingComponents>
  );
};

export default LoadingDots;

const LoadingComponents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: 10000;

  div {
    position: relative;
  }
`;
