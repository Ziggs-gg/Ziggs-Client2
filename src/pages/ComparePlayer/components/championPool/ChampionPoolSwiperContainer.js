import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import { API } from '../../../../config';
import { css } from 'styled-components';
import ChampionPoolCard from './ChampionPoolCard';
import { useMediaQuery } from 'react-responsive';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const ChampionPoolSwiperContainer = ({ phRole, selectedPlayers }) => {
  const [playerData, setPlayerData] = useState([]);
  const playerInfo = phRole.split('-');
  const orderNumber = selectedPlayers.findIndex(
    playerData => playerData === phRole
  );

  const isPc = useMediaQuery({
    query: '(min-width:429px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width:428px)',
  });

  useEffect(() => {
    axios
      .get(`${API.CHAMPION_POOL}phRole=${phRole}`)
      .then(Response => {
        setPlayerData(Response.data.ChampionPool);
      })
      .catch(Error => {
        console.error('err:', Error);
      });
  }, [phRole]);

  return (
    <SwiperLayout>
      <PlayerTitle>
        <CardLegend orderNumber={orderNumber} />
        <PlayerName>{`${playerInfo[4]} 시즌 챔피언풀`}</PlayerName>
      </PlayerTitle>
      {isPc && (
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={24}
          slidesPerView={5.3}
          navigation
          scrollbar={{ draggable: true }}
        >
          {playerData.map((championData, idx) => {
            return (
              <SwiperSlide key={idx}>
                <ChampionPoolCard championData={championData} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {isMobile && (
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={24}
          slidesPerView={2.5}
          navigation
          scrollbar={{ draggable: true }}
        >
          {playerData.map((championData, idx) => {
            return (
              <SwiperSlide key={idx}>
                <ChampionPoolCard championData={championData} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </SwiperLayout>
  );
};

export default ChampionPoolSwiperContainer;

const SwiperLayout = styled.div`
  width: 664px;
  height: 240px;
  margin-right: 32px;

  &:nth-child(2n) {
    margin-right: 0;
  }
  .swiper {
    .swiper-wrapper {
      height: 180px;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      display: none;
    }

    .swiper-scrollbar {
      height: 3px;
      left: 4px;

      bottom: 0;
      .swiper-scrollbar-drag {
        background: ${props => props.theme.white.white80};
        border-radius: 0;
      }
    }
    &:hover {
      .swiper-button-prev,
      .swiper-button-next {
        width: 28px;
        height: 28px;
        background: rgba(53, 53, 50, 0.6);
        border: 1px;
        border: 1px solid #f3f3f3;
        box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
      }

      .swiper-button-prev {
        position: absolute;
        left: 0;
        background-image: url('/images/arrows/Left_W.png');
        background-repeat: no-repeat;
        background-size: 50% auto;
        background-position: center;
      }

      .swiper-button-next {
        position: absolute;
        right: 0;
        background-image: url('/images/arrows/Right_W.png');
        background-repeat: no-repeat;
        background-size: 50% auto;
        background-position: center;
      }
    }
  }

  @media screen and (max-width: 428px) {
    width: 304px;
    height: 240px;
    margin-right: 32px;

    &:nth-child(2n) {
      margin-right: 0;
    }
    .swiper {
      .swiper-wrapper {
        height: 180px;
      }

      .swiper-button-prev::after,
      .swiper-button-next::after {
        display: none;
      }

      .swiper-scrollbar {
        height: 3px;
        left: 4px;

        bottom: 0;
        .swiper-scrollbar-drag {
          background: ${props => props.theme.white.white80};
          border-radius: 0;
        }
      }
      &:hover {
        .swiper-button-prev,
        .swiper-button-next {
          width: 28px;
          height: 28px;
          background: rgba(53, 53, 50, 0.6);
          border: 1px;
          border: 1px solid #f3f3f3;
          box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
        }

        .swiper-button-prev {
          position: absolute;
          left: 0;
          background-image: url('/images/arrows/Left_W.png');
          background-repeat: no-repeat;
          background-size: 50% auto;
          background-position: center;
        }

        .swiper-button-next {
          position: absolute;
          right: 0;
          background-image: url('/images/arrows/Right_W.png');
          background-repeat: no-repeat;
          background-size: 50% auto;
          background-position: center;
        }
      }
    }
  }
`;

const PlayerTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

const CardLegend = styled.div`
  width: 4px;
  height: 26px;
  margin-right: 8px;
  border-radius: 10px;

  ${props =>
    props.orderNumber === 0 &&
    css`
      background: ${props => props.theme.red.redMain};
    `}

  ${props =>
    props.orderNumber === 1 &&
    css`
      background: ${props => props.theme.blue.blueMain};
    `}

  ${props =>
    props.orderNumber === 2 &&
    css`
      background: ${props => props.theme.green.greenMain};
    `}

  ${props =>
    props.orderNumber === 3 &&
    css`
      background: ${props => props.theme.orange.orangeMain};
    `}
`;

const PlayerName = styled.p`
  color: white;
  font-size: 15px;
  font-weight: 700;
`;
