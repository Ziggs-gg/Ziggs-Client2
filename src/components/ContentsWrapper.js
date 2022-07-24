import React from 'react';
import styled from 'styled-components';

const ContentsWrapper = ({ children }) => {
  return <ContentsWrapperLayout>{children}</ContentsWrapperLayout>;
};

export default ContentsWrapper;

const ContentsWrapperLayout = styled.div`
  width: 100%;
`;
