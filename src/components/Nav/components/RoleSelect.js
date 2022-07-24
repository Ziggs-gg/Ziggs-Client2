import React from 'react';
import styled, { css } from 'styled-components';
import ReactTooltip from 'react-tooltip';
const RoleSelect = ({ handleRoleSelect, role, setRole }) => {
  return (
    <RoleSelectBox>
      <SelectAll
        onClick={() => {
          role.length === 5
            ? setRole([])
            : setRole(['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT']);
        }}
      >
        ALL
      </SelectAll>
      <RoleList>
        {ROLE_DATA.map((data, idx) => {
          const isSelected = role.includes(data.name);
          return (
            <ListItemWrapper key={idx}>
              <ReactTooltip />
              <ListItem
                onClick={() => {
                  handleRoleSelect(data.name, isSelected);
                }}
                isSelected={isSelected}
                data-tip={data.name}
              >
                <RoleLogo src={data.image} />
              </ListItem>
            </ListItemWrapper>
          );
        })}
      </RoleList>
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
  font-size: 12px;
  font-weight: 500;
  text-decoration: underline;

  cursor: pointer;
`;

const RoleList = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  cursor: pointer;
  opacity: 0.4;
  ${props =>
    props.isSelected &&
    css`
      opacity: 1;
    `}
`;

const ListItemWrapper = styled.div``;

const RoleLogo = styled.img`
  width: 24px;
  margin-right: 16px;

  cursor: pointer;
`;

const ROLE_DATA = [
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
    name: 'ADC',
    image:
      'https://user-images.githubusercontent.com/73605822/167045532-69b3db2f-e71a-461c-9744-8ef4780aa925.png',
  },

  {
    name: 'SUPPORT',
    image:
      'https://user-images.githubusercontent.com/73605822/167064659-955a1a43-4bd8-4649-8b52-4800719157b7.png',
  },
];
