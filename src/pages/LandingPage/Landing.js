import React from 'react';
import styled, { css } from 'styled-components';
import List from '../../components/List';

const Landing = () => {
  return (
    <>
      <List />
      <ContentsLayout>
        <MainContents>
          <PageImages src="/images/landing/landing.png" />
          <MainContentsDesc>
            <MainLargeDesc textColor="white">
              리그오브레전드 이스포츠
            </MainLargeDesc>
            <MainLargeDesc textColor="white">
              데이터를 한눈에{' '}
              <MainLargeDesc textColor="red">비교하세요!</MainLargeDesc>
            </MainLargeDesc>
            <MainSmallDesc>
              VERSUS.PS는 리그오브레전드 데이터가 시각화된 차트를 제공하고
              있습니다.{'\n'}응원하는 선수 혹은 구단의 데이터를 한 눈에
              살펴보세요.{'\n'}라이벌 선수 혹은 구단의 지표를 함께 비교해보실 수
              있습니다.
            </MainSmallDesc>
          </MainContentsDesc>
        </MainContents>
        <HowToUse>
          <GifDesc>
            <GifImg />
            <GifDescText>
              왼쪽 상단 토글을 통해 선수와 구단을{'\n'}넘나드며 확인해보세요!
            </GifDescText>
          </GifDesc>
          <GifDesc>
            <GifImg />
            <GifDescText>
              오른쪽 상단 필터를 이용해보세요.{'\n'}지난 기록도 확인하실 수
              있습니다!
            </GifDescText>
          </GifDesc>
          <GifDesc>
            <GifImg />
            <GifDescText>
              여러 선수 혹은 구단을 선택하여{'\n'}쉽게 정보를 확인하세요!
            </GifDescText>
          </GifDesc>
        </HowToUse>
      </ContentsLayout>
    </>
  );
};

export default Landing;

const ContentsLayout = styled.div`
  width: 1360px;
  margin: 0 auto;
  margin-top: 16px;
`;

const MainContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 512px;
`;

const PageImages = styled.img`
  width: 548px;
  height: 432px;
`;

const MainContentsDesc = styled.div`
  width: 780px;
  height: 432px;
`;

const MainLargeDesc = styled.p`
  display: inline-block;
  font-weight: 900;
  font-size: 50px;
  line-height: 72px;

  ${props =>
    props.textColor === 'red'
      ? css`
          color: ${props => props.theme.red.redMain};
        `
      : css`
          color: ${props => props.theme.white.white100};
        `}
`;

const MainSmallDesc = styled.p`
  margin-top: 16px;
  font-weight: 900;
  font-size: 18px;
  line-height: 26px;
  white-space: pre-wrap;
  color: ${props => props.theme.white.white100};
`;

const HowToUse = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 44px;
`;

const GifDesc = styled.div`
  width: 432px;
  height: 244px;
  text-align: center;
`;

const GifImg = styled.img`
  width: 176px;
  height: 176px;
  margin-bottom: 16px;
  background: #d9d9d9;
`;

const GifDescText = styled.p`
  text-align: center;
  white-space: pre-wrap;
  font-weight: 900;
  font-size: 18px;
  line-height: 26px;
  color: ${props => props.theme.white.white100};
`;
