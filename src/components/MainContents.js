import React from 'react';
import styled from 'styled-components';

const MainContents = ({ children }) => {
  return <MainContentsWrapper>{children}</MainContentsWrapper>;
};

export default MainContents;

const MainContentsWrapper = styled.div`
  width: 1360px;
  margin: 0 auto;
`;
