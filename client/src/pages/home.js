import React from "react";
import Navbar from "../components/navbar";
import {
  Grid,
  GridColumn,
  GridRow,
  Image,
  Header,
  Segment,
  Icon,
} from "semantic-ui-react";
import "../assets/styles.css";
import mainIlustration from "../assets/img/Humaaans - 3 Characters.png";

const home = () => {
  return (
    <div class="home">
      <Navbar />
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <GridRow>
            <GridColumn width={8}>
              <Header as="h1" style={{ fontSize: "3em", color: "white" }}>
                Encuentra tu primer empleo en tecnología
              </Header>
              <p style={{ fontSize: "1.33em", color: "white" }}>
                Realizamos el match perfecto entre perfiles TI y las áreas
                tecnológicas de las empresas para potenciar, desarrollar y
                crecer sus áreas.
              </p>
            </GridColumn>
            <GridColumn width={8}>
              <Image src={mainIlustration} />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Segment style={{ padding: "0em", backgroundColor: "#EFF3FF" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                <Icon name="signup" size="big" />
                Regístrate
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Crea una cuenta y completa tu perfil. Esto nos ayudará a hacer
                el match
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Realiza Pruebas Técnicas
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Demuestra tus conocimientos y habilidades en pocos minutos
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Muestra Tu Código
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Demuestra lo que sabes a través de los Show The Code
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Conoce Potenciales Empleadores
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Participa en entrevistas con compañias reconocidas
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default home;
