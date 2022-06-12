import React from 'react';
import styled from 'styled-components';
import ChartCamp from '../../../components/charts/team/ChartCamp';
import ChartLine from '../../../components/charts/team/ChartLine';
import ChartIndicators from '../../../components/charts/team/ChartIndicators';
import ChartObject from '../../../components/charts/team/ChartObject';
import ChartObject2 from '../../../components/charts/team/ChartObject2';
import ChartHeatmap from '../../../components/charts/team/ChartHeatMap';
import Chartimportance from '../../../components/charts/team/Chartimportance';
const ChartContainer = () => {
  return (
    <ChartsLayout>
      <ChartCamp />
      <ChartLine />
      <ChartIndicators />
      <ChartObject />
      <ChartObject2 />
      <ChartHeatmap />
      <Chartimportance />
    </ChartsLayout>
  );
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
`;
