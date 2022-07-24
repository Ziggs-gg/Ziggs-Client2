import React from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import List from '../../components/List';

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>VERSUS Pro Stats</title>
      </Helmet>
      <List />

      <MainContents>
        <PageImages src="/images/landing/landing.png" />
        <MainContentsDesc>
          <MainLargeDesc textColor="white">
            리그오브레전드 이스포츠
          </MainLargeDesc>
          <MainLargeDesc textColor="white">데이터를 한눈에</MainLargeDesc>
          <MainLargeDesc textColor="red">&nbsp;비교하세요!</MainLargeDesc>
          <MainSmallDesc>
            VERSUS.PS는 리그오브레전드 데이터를 시각화한 차트를 제공하고
            있습니다.{'\n'}응원하는 선수 혹은 구단의 데이터를 한 눈에
            살펴보세요.{'\n'}라이벌 선수 혹은 구단의 지표를 함께 비교해보실 수
            있습니다.
          </MainSmallDesc>
        </MainContentsDesc>
      </MainContents>
      <HowToUse>
        <DescContainer>
          <GifContents>
            <BrowserMockUp width="712" height="343">
              <GifImg src="/images/landingGif/toggle.gif" />
            </BrowserMockUp>

            <GifDescText align="left">
              <SwitchToggle src="/images/landing/SwitchToggle.png" />
              좌측 상단 토글로{'\n'}선수 비교와 구단 비교를{'\n'}
              넘나들어보세요.
            </GifDescText>
          </GifContents>
          <GifContents>
            <GifDescText align="right">
              <FilterImage src="/images/landing/filterImg.png" />
              우측 상단 필터를 확인해보세요.{'\n'}지난 시즌의 기록도 확인하실 수
              있습니다!
            </GifDescText>
            <BrowserMockUp width="712" height="343">
              <GifImg src="/images/landingGif/Filter.gif" />
            </BrowserMockUp>
          </GifContents>
        </DescContainer>
      </HowToUse>
      <ListGifContents>
        <GifDescText>
          여러 선수 혹은 구단을 선택하실 수 있습니다.{'\n'}쉽게 프로들의 스탯을
          비교해보세요.
        </GifDescText>
        <BrowserMockUp width="1016" height="488">
          <ListGif src="/images/landingGif/Select.gif" />
        </BrowserMockUp>
      </ListGifContents>
    </>
  );
};

export default Landing;

const MainContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 800px;
`;

const PageImages = styled.img`
  width: 700px;
  filter: drop-shadow(0px 16px 40px rgba(41, 41, 39, 0.6));
`;

const MainContentsDesc = styled.header`
  margin-bottom: 100px;
  width: 617px;
  height: 240px;
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
  /* background-color: #171715; */
  padding: 148px 0;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 144px;
`;

const SwitchToggle = styled.img`
  width: 100px;
  height: 48px;
  margin-bottom: 16px;
`;

const FilterImage = styled.img`
  margin-left: 300px;
  height: 44px;
  margin-bottom: 16px;
`;

const GifContents = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 304px;
  display: flex;
`;

const GifImg = styled.img`
  width: 712px;
  height: 304px;
  margin-top: 39px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const GifDescText = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  white-space: pre-wrap;
  font-weight: 900;
  font-size: 32px;
  text-align: ${props => props.align};
  color: ${props => props.theme.white.white100};
  line-height: 50px;
`;

const ListGifContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 80px 0;
  width: 100%;
`;

const ListGif = styled.img`
  width: 100%;
  height: 432px;
  margin-top: 56px;
`;

const BrowserMockUp = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  margin-top: 32px;
  background-image: url('/images/landing/Browser.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  filter: drop-shadow(0px 16px 40px rgba(41, 41, 39, 0.6));
  /* filter: drop-shadow(0px 16px 15px rgba(41, 41, 39, 0.45)); */
`;
