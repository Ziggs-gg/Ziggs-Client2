import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API } from '../../../../config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import PlayerRoasterCard from './PlayerRoasterCard';

const TeamPlayers = ({ team }) => {
  const [roasterData, setRoasterData] = useState();

  let roaster = {
    TOP: [],
    JUNGLE: [],
    MID: [],
    ADC: [],
    SUPPORT: [],
  };

  const roasterKeys = Object.keys(roaster);

  roasterData?.forEach(data => {
    roaster[data?.role].push(data);
  });

  useEffect(() => {
    axios
      .get(`${API.SELECTED_TEAMROASTER}ptID=${team}`)
      .then(Response => {
        setRoasterData(Response.data);
      })
      .catch(Error => {
        console.error('err:', Error);
      });
  }, [team]);

  return (
    <TeamPlayersLayout>
      {roasterKeys.map((role, idx) => {
        return (
          <Swiper key={idx} modules={[Navigation]} navigation slidesPerView={1}>
            {roaster[role].map((player, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <PlayerRoasterCard player={player} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        );
      })}
    </TeamPlayersLayout>
  );
};

export default TeamPlayers;

const TeamPlayersLayout = styled.div`
  display: flex;
  width: 664px;
  height: 176px;

  .swiper {
    width: 112px;
    height: 176px;

    .swiper-button-prev::after,
    .swiper-button-next::after {
      display: none;
    }

    .swiper-button-prev,
    .swiper-button-next {
      top: 50%;
      transform: translate(0, 35%);
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
      left: 2px;
      background-image: url('/images/arrows/Left_W.png');
      background-repeat: no-repeat;
      background-size: 50% auto;
      background-position: center;
    }

    .swiper-button-next {
      position: absolute;
      right: 2px;
      background-image: url('/images/arrows/Right_W.png');
      background-repeat: no-repeat;
      background-size: 50% auto;
      background-position: center;
    }
  }
`;
