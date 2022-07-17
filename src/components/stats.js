import React from "react";
import { Statistic, Icon, Image } from "semantic-ui-react";

const Stats = () => {
  return (
    <div class="stats">
      <Statistic.Group widths="three">
        <Statistic>
          <Statistic.Value>+300</Statistic.Value>
          <Statistic.Label>Contratos de Junior o Trainees</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>55</Statistic.Value>
          <Statistic.Label>Empresas Asociadas</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>+1500</Statistic.Value>
          <Statistic.Label>Show The Code Organizados</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </div>
  );
};

export default Stats;
