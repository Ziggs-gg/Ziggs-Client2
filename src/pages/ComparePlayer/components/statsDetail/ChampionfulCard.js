import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../../../config';

const ChampionfulCard = ({ player }) => {
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API.SELECTED_PLAYER}phRole=${player}`)
      .then(Response => {
        setPlayerData(Response.data);
      })
      .catch(Error => {
        console.error('err:', Error);
      });
  }, [player]);

  return <div></div>;
};

export default ChampionfulCard;
