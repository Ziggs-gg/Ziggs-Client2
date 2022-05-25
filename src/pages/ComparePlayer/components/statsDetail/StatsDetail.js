import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { API } from '../../../../config';
import HeatMapContainer from './HeatMapContainer';
import Championful from './Championful';

const StatsDetail = ({ selectedPlayers }) => {
  const [statsData, setStatsData] = useState([]);
  const queryString = '';
  useEffect(() => {
    axios
      .get(`${API.STATS_DETAIL}`)
      .then(Response => {
        console.log(Response.data);
      })
      .catch(Error => {
        console.error('err:', Error);
      });
  }, []);

  return (
    <>
      <HeatMapContainer />
      <Championful />
    </>
  );
};

export default StatsDetail;
