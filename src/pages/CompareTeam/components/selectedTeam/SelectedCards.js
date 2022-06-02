import React from 'react';
import styled from 'styled-components';

const SelectedCards = () => {
  return <SelectedCardsLayout></SelectedCardsLayout>;
};

export default SelectedCards;

const SelectedCardsLayout = styled.div`
  width: 1360px;
  height: 304px;
  margin: 0 auto;
  margin-top: 16px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
`;
