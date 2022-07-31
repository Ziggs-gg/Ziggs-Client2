import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const MainContents = ({ children }) => {
  const isPc = useMediaQuery({
    query: '(min-width:429px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width:428px)',
  });

  return (
    <>
      {isPc && <MainContentsWrapper>{children}</MainContentsWrapper>}
      {isMobile && <MobileContentsWrapper>{children}</MobileContentsWrapper>}
    </>
  );
};

export default MainContents;

const MainContentsWrapper = styled.div`
  width: 1360px;
  margin: 0 auto;
`;

const MobileContentsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
