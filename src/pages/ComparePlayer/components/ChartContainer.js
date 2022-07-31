import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RadarChart from '../../../components/charts/player/RadarChart';
import ChartBoxplot from '../../../components/charts/player/ChartBoxplot';
import WardDataChart from '../../../components/charts/player/WardDataChart';
import ChartDoughnut from '../../../components/charts/player/ChartDoughnut';
import TeamPercentageDataChart from '../../../components/charts/player/TeamPercentageDataChart';
import ChartBubble from '../../../components/charts/player/ChartBubble';
import ChartPolar from '../../../components/charts/player/ChartPolar';
import RoleDifferPercentageDataChart from '../../../components/charts/player/RoleDifferPercentageDataChart';
import EGPMChart from '../../../components/charts/player/EGPMChart';
import CSPMChart from '../../../components/charts/player/CSPMChart';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { API } from '../../../config';
import { Loading } from 'react-loading-dot';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import LoadingDots from '../../../components/charts/LoadingDots';

const ChartContainer = ({ selectedPlayers }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  const isPc = useMediaQuery({
    query: '(min-width:429px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width:428px)',
  });

  useEffect(() => {
    const querys = [];
    selectedPlayers.forEach(phRole => {
      querys.push(`phRole=${phRole}`);
    });
    const queryString =
      selectedPlayers.length === 0 ? 'phRole=' : querys.join('&');

    setLoading(true);

    axios
      .get(`${API.PLAYER_CHART}${queryString}`)
      .then(Response => {
        setChartData(Response.data);
        setLoading(false);
      })
      .catch(Error => {
        console.error(Error);
      });
  }, [selectedPlayers]);

  return (
    <>
      {isPc && (
        <ChartsLayout>
          {loading && <LoadingDots />}
          {chartData.IndexRadarChart && (
            <RadarChart chartData={chartData?.IndexRadarChart} />
          )}
          {chartData.PerMinChart && (
            <ChartBoxplot chartData={chartData?.PerMinChart} />
          )}
          {chartData.WardDataChart && (
            <WardDataChart chartData={chartData?.WardDataChart} />
          )}
          {chartData.KDABox && <ChartDoughnut chartData={chartData?.KDABox} />}
          {chartData.TeamPercentageDataChart && (
            <TeamPercentageDataChart
              chartData={chartData?.TeamPercentageDataChart}
            />
          )}
          {chartData.DPGChart && (
            <ChartBubble chartData={chartData?.DPGChart} />
          )}
          {chartData.KPPercentageChart && (
            <ChartPolar chartData={chartData?.KPPercentageChart} />
          )}
          {chartData.RoleDifferPercentageDataChart && (
            <RoleDifferPercentageDataChart
              chartData={chartData?.RoleDifferPercentageDataChart}
            />
          )}
          {chartData.EGPMChart && (
            <EGPMChart chartData={chartData?.EGPMChart} />
          )}
          {chartData.CSPMChart && (
            <CSPMChart chartData={chartData?.CSPMChart} />
          )}
        </ChartsLayout>
      )}
      {isMobile && (
        <SwiperLayout>
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {loading && <LoadingDots />}
            <SwiperSlide>
              {chartData.IndexRadarChart && (
                <RadarChart chartData={chartData?.IndexRadarChart} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {chartData.PerMinChart && (
                <ChartBoxplot chartData={chartData?.PerMinChart} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {chartData.WardDataChart && (
                <WardDataChart chartData={chartData?.WardDataChart} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {chartData.KDABox && (
                <ChartDoughnut chartData={chartData?.KDABox} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {chartData.TeamPercentageDataChart && (
                <TeamPercentageDataChart
                  chartData={chartData?.TeamPercentageDataChart}
                />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {chartData.DPGChart && (
                <ChartBubble chartData={chartData?.DPGChart} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {chartData.KPPercentageChart && (
                <ChartPolar chartData={chartData?.KPPercentageChart} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {chartData.RoleDifferPercentageDataChart && (
                <RoleDifferPercentageDataChart
                  chartData={chartData?.RoleDifferPercentageDataChart}
                />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {chartData.EGPMChart && (
                <EGPMChart chartData={chartData?.EGPMChart} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {chartData.CSPMChart && (
                <CSPMChart chartData={chartData?.CSPMChart} />
              )}
            </SwiperSlide>
          </Swiper>
        </SwiperLayout>
      )}
    </>
  );
};

export default ChartContainer;

const ChartsLayout = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 944px;
  margin-bottom: 16px;
`;

const SwiperLayout = styled.div`
  width: 100%;
  height: 304px;

  &:nth-child(2n) {
    margin-right: 0;
  }
  .swiper {
    .swiper-slide {
      display: flex;
      justify-content: center;
    }

    .swiper-wrapper {
      height: 304px;
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
