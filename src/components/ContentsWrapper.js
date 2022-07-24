import React from 'react';
import styled from 'styled-components';

const ContentsWrapper = ({ children }) => {
  return <ContentsWrapperLayout>{children}</ContentsWrapperLayout>;
};

export default ContentsWrapper;

const ContentsWrapperLayout = styled.div`
  max-width: 100%;
`;
