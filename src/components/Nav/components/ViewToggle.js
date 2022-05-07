import React from 'react';
import styled from 'styled-components';
const ViewToggle = () => {
  return (
    <ToggleWrapper>
      <ToggleTrack />
      <ToggleThumb>
        <ThumbImgPlayer src="https://user-images.githubusercontent.com/73605822/167048612-b03bd97d-5281-4558-a612-228883c38ffc.png" />
      </ToggleThumb>
      <TrackImgTeam src="https://user-images.githubusercontent.com/73605822/167045591-d0444efe-1482-4b29-b1f9-3d97f38d8ad7.png" />
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
`;

const ThumbImgPlayer = styled.img`
  width: 24px;
`;

const ThumbImgTeam = styled.img`
  width: 24px;
`;

const TrackImgPlayer = styled.img`
  width: 24px;
`;

const TrackImgTeam = styled.img`
  position: absolute;
  width: 24px;
  left: 63.41%;
  right: 7.32%;
  top: 20%;
  bottom: 20%;
`;
