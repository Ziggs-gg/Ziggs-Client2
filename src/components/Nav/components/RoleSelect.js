import React from 'react';
import styled from 'styled-components';

const RoleSelect = () => {
  return (
    <RoleSelectBox>
      <SelectAll>ALL</SelectAll>
      {LOGO_DATA.map((data, idx) => {
        return <RoleLogo src={data.image} key={idx} />;
      })}
    </RoleSelectBox>
  );
};

export default RoleSelect;

const RoleSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 271px;
  height: 40px;
  background-color: ${props => props.theme.black.black85};
  border-radius: 10px;
`;

const SelectAll = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 32px;
  margin-right: 16px;
  color: white;
  text-decoration: underline;

  cursor: pointer;
`;

const RoleLogo = styled.img`
  width: 24px;
  margin-right: 16px;

  cursor: pointer;
`;

const LOGO_DATA = [
  {
    name: 'TOP',
    image:
      'https://user-images.githubusercontent.com/73605822/167045540-debec81d-6cc3-4114-82f2-a4d2f377571e.png',
  },
  {
    name: 'JUNGLE',
    image:
      'https://user-images.githubusercontent.com/73605822/167045524-88ff4a2f-123f-457c-bad8-eb5d2dd706d2.png',
  },
  {
    name: 'MID',
    image:
      'https://user-images.githubusercontent.com/73605822/167045538-faee72e2-d6a8-4a96-95bb-5ef6fe1c6eff.png',
  },
  {
    name: 'AD',
    image:
      'https://user-images.githubusercontent.com/73605822/167045532-69b3db2f-e71a-461c-9744-8ef4780aa925.png',
  },

  {
    name: 'SPT',
    image:
      'https://user-images.githubusercontent.com/73605822/167064659-955a1a43-4bd8-4649-8b52-4800719157b7.png',
  },
];
