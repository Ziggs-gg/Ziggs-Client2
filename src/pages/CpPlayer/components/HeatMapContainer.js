import React from 'react';
import styled from 'styled-components';

const HeatMapContainer = () => {
  return <HeatMapLayout />;
};

export default HeatMapContainer;

const HeatMapLayout = styled.div`
  width: 1360px;
  height: 624px;
  margin: 16px auto;

  background-color: gray;
`;
