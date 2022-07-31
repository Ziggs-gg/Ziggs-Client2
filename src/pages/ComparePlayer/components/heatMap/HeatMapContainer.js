import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API } from '../../../../config';
import Chartheatmap from '../../../../components/charts/player/Chartheatmap';
import MobileEmptyChartheatmap from '../../../../components/charts/player/mobile/MobileEmptyChartHeatmap';
import EmptyChartheatmap from '../../../../components/charts/player/EmptyChartheatmap';
import MobileChartHeatmap1 from '../../../../components/charts/player/mobile/MobileChartHeatmap1';
import MobileChartHeatmap2 from '../../../../components/charts/player/mobile/MobileChartHeatmap2';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const HeatMapContainer = ({ selectedPlayers }) => {
  const [heatMapData, setHeatMapData] = useState([]);

  const isPc = useMediaQuery({
    query: '(min-width:429px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width:428px)',
  });

  useEffect(() => {
    let selectedPlayersQuery = [];
    if (selectedPlayers !== 0) {
      selectedPlayers.forEach(el => selectedPlayersQuery.push(`phRole=${el}`));
    }

    axios
      .get(`${API.HEATMAP_PLAYER}${selectedPlayersQuery.join('&')}`)
      .then(Response => {
        setHeatMapData(Response.data);
      })
      .catch(Error => {
        console.error(Error);
      });
  }, [selectedPlayers]);

  return (
    <>
      {isPc && (
        <HeatMapLayout>
          {selectedPlayers.length === 0 && <EmptyChartheatmap />}
          {selectedPlayers.length > 0 && (
            <Chartheatmap heatMapData={heatMapData?.Heatmap} />
          )}
        </HeatMapLayout>
      )}
      {isMobile && (
        <SwiperLayout>
          {selectedPlayers.length === 0 && <MobileEmptyChartheatmap />}
          {selectedPlayers.length > 0 && (
            <Swiper
              modules={[Navigation, Scrollbar, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <MobileChartHeatmap1 heatMapData={heatMapData?.Heatmap} />
              </SwiperSlide>
              <SwiperSlide>
                <MobileChartHeatmap2 heatMapData={heatMapData?.Heatmap} />
              </SwiperSlide>
            </Swiper>
          )}
        </SwiperLayout>
      )}
    </>
  );
};

export default HeatMapContainer;

const HeatMapLayout = styled.div`
  width: 1360px;
  height: 670px;
  margin: 16px 0;
  padding: 16px 0;
  border-top: 3px solid ${props => props.theme.black.black85};
  border-bottom: 3px solid ${props => props.theme.black.black85};
`;

const SwiperLayout = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 100%;
  margin: 16px auto;
  padding: 16px 0;
  border-top: 3px solid ${props => props.theme.black.black85};
  border-bottom: 3px solid ${props => props.theme.black.black85};

  &:nth-child(2n) {
    margin-right: 0;
  }
  .swiper {
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-wrapper {
      height: 100%;
    }

    .swiper-pagination {
      position: static;

      .swiper-pagination-bullet {
        width: 28px;
        height: 4px;
        background: #f3f3f3;
        border-radius: 0;

        .swiper-pagination-bullet-active {
          width: 28px;
          height: 4px;
        }
      }
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
`;
