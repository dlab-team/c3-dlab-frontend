import React from "react";
import { Statistic, Segment } from "semantic-ui-react";
import SignUp from "./signUp";

const Stats = () => {
  return (
    <>
      <Segment inverted className="stats">
        <Statistic.Group inverted widths={3}>
          <Statistic>
            <Statistic.Value>+110</Statistic.Value>
            <Statistic.Label>Contratos Junior/Trainee</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>+50</Statistic.Value>
            <Statistic.Label>Empresas Asociadas</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>+400</Statistic.Value>
            <Statistic.Label>Show The Code</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
      <SignUp />
    </>
  );
};

export default Stats;
