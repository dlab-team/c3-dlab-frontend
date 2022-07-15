import React from "react";
import OneStep from "../components/oneStep";
import {
  List,
  ListItem,
  Image,
  ListContent,
  ListHeader,
  Grid,
  GridColumn,
  GridRow,
  Segment,
  Header,
  SegmentGroup,
  Container,
  Button,
  HeaderSubheader,
  Icon,
} from "semantic-ui-react";
import "../assets/styles.css";

const programSteps = [
  {
    id: 1,
    stepNumber: 1,
    title: "Conecta con empresas",
    subtitle:
      "Completa tu perfil y rinde test técnicos. Nosotros te conectamos con empresas top. ",
    color: "purple",
    icon: "find",
  },
  {
    id: 2,
    stepNumber: 2,
    title: "Demuestra tu valor",
    subtitle:
      "Participa en entrevistas grupales y muestra un proyecto en los Show The Code.",
    color: "orange",
    icon: "code",
  },
  {
    id: 3,
    stepNumber: 3,
    title: "Se contratado",
    subtitle:
      "Trabaja para una empresa. Un mentor/a te dará soporte técnico y validará tus competencias.",
    color: "green",
    icon: "handshake",
  },
];

const renderSteps = (programSteps) => {
  return programSteps.map((step, index) => {
    return (
      <>
        <GridColumn index={index}>
          <Header as="h1" icon textAlign="center">
            <Icon name={step.icon} circular inverted color={step.color} />
            <Header.Content>{step.title}</Header.Content>
          </Header>
          <HeaderSubheader as="h5" content={step.subtitle} />
        </GridColumn>
      </>
    );
  });
};

const StepsList = () => {
  return (
    <Grid stackable container columns={3}>
      {renderSteps(programSteps)}
    </Grid>
  );
};

export default StepsList;
