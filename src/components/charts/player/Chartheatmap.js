import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme.js';

const Chartheatmap = ({ heatMapData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>게임</td>
            <td>킬</td>
            <td>데스</td>
            <td>어시스트</td>
            <td>KDA</td>
            <td>KP%</td>
            <td>DTH%</td>
            <td>CSM</td>
            <td>GPM</td>
            <td>GOLD%</td>
            <td>VSPM</td>
            <td>WPM</td>
            <td>WCPM</td>
            <td>VS%</td>
            <td>DPM</td>
            <td>DMG%</td>
            <td>DPG</td>
            <td>DTPM</td>
            <td>DT%</td>
            <td>GD@15</td>
            <td>CSD@15</td>
            <td>XPD@15</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>phid</td>
            <td>gameCount</td>
            <td>AVG_kills</td>
            <td>AVG_deaths</td>
            <td>AVG_assists</td>
            <td>AVG_KDA</td>
            <td>AVG_KPPCT</td>
            <td>AVG_DTHPCT</td>
            <td>AVG_CSM</td>
            <td>AVG_GPM</td>
            <td>AVG_goldPCT</td>
            <td>AVG_VSPM</td>
            <td>AVG_WPM</td>
            <td>AVG_WCPM</td>
            <td>AVG_VSPCT</td>
            <td>AVG_DPM</td>
            <td>AVG_DMGPCT</td>
            <td>AVG_DPG</td>
            <td>AVG_DTPM</td>
            <td>AVG_DTPCT</td>
            <td>AVG_GDat15</td>
            <td>AVG_CSDat15</td>
            <td>AVG_XPDat15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Chartheatmap;
