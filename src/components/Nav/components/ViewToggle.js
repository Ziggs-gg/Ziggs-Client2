import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';

const ViewToggle = ({ viewToggle, setViewToggle, initFilter }) => {
  const navigate = useNavigate();

  const handleToggle = () => {
    if (!viewToggle) {
      initFilter();
      navigate('compare/teams');
    } else {
      initFilter();
      navigate('compare/player');
    }
    setViewToggle(prev => !prev);
  };

  return (
    <ToggleWrapper
      onClick={() => {
        handleToggle();
      }}
    >
      <ToggleTrack>
        <TrackImgPlayer src="/images/Players_outline_B70.png" />
        <TrackImgTeam src="https://user-images.githubusercontent.com/73605822/167045591-d0444efe-1482-4b29-b1f9-3d97f38d8ad7.png" />
      </ToggleTrack>
      <ToggleThumb toggle={viewToggle}>
        {viewToggle ? (
          <ThumbImgTeam src="https://user-images.githubusercontent.com/73605822/167045598-80898783-e3c6-4abe-ad26-936759bf2239.png" />
        ) : (
          <ThumbImgPlayer src="https://user-images.githubusercontent.com/73605822/167048612-b03bd97d-5281-4558-a612-228883c38ffc.png" />
        )}
      </ToggleThumb>
    </ToggleWrapper>
  );
};

export default ViewToggle;

const ToggleWrapper = styled.div`
  position: absolute;
  width: 82px;
  height: 40px;
  left: 281px;
  cursor: pointer;
`;

const ToggleTrack = styled.div`
  position: absolute;
  left: 2.44%;
  right: 0%;
  top: 10%;
  bottom: 10%;
  background-color: ${props => props.theme.black.black85};
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
`;

const ToggleThumb = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0%;
  right: 51.22%;
  top: 0%;
  bottom: 0%;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.red.redMain};
  border-radius: 15px;
  transition: all 0.2s ease-in-out;
  ${props =>
    props.toggle &&
    css`
      transform: translate(44px, 0);
      transition: all 0.2s ease-in-out;
    `}
`;

const ThumbImgPlayer = styled.img`
  width: 24px;
`;

const ThumbImgTeam = styled.img`
  width: 24px;
`;

const TrackImgPlayer = styled.img`
  position: absolute;
  width: 24px;
  left: 7.32%;
  right: 63.41%;
  top: 10%;
`;

const TrackImgTeam = styled.img`
  position: absolute;
  width: 24px;
  left: 63.41%;
  right: 7.32%;
  top: 10%;
`;
