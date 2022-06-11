import React from 'react';
import styled from 'styled-components';

const ChartContainer = () => {
  return <ChartsLayout />;
};

export default ChartContainer;

const ChartsLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1360px;
  height: 944px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: gray;
`;
