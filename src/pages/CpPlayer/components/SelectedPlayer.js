import React from 'react';
import styled from 'styled-components';

const SelectedPlayer = () => {
  return (
    <Card>
      <CardLegends />
    </Card>
  );
};

export default SelectedPlayer;

const Card = styled.div`
  position: relative;
  width: 664px;
  height: 88px;
  background: linear-gradient(
    180deg,
    rgba(19, 19, 16, 0) 0%,
    rgba(49, 115, 193, 0.05) 100%
  );
  border: 1px solid ${props => props.theme.black.black85};
  border-radius: 10px;

  margin-right: 32px;
  margin-bottom: 16px;
  &:nth-child(2n) {
    margin-right: 0;
  }
`;

const CardLegends = styled.div`
  position: absolute;
  width: 8px;
  height: 88px;
  left: 0px;
  top: 0px;

  background: #c13631;
  border-radius: 10px;
`;
