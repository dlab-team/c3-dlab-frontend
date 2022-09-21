import React from "react";
import {
  Container,
  Header,
  HeaderSubheader,
  List,
  ListItem,
} from "semantic-ui-react";
import TestList from "../../components/tests/testList";

const TestContainer = () => {
  return (
    <>
      <Container>
        <Header as="h2" content="Test Técnicos" className="section-title" />
        <HeaderSubheader
          as="h4"
          content="Demuestra lo que sabes respondiendo los test técnicos que hemos elegido para ti."
        />
        <br />
        <HeaderSubheader
          as="h5"
          content="Qué esperar luego de responder:"
          style={{ marginBottom: "20px" }}
        />
        <List>
          <ListItem>
            <List.Icon name="phone" />
            <List.Content>
              Serás contactado para participar de entrevistas y Show The Code.
            </List.Content>
          </ListItem>
          <ListItem>
            <List.Icon name="group" />
            <List.Content>
              Te presentaremos ante empresas que buscan personas con esos
              conocimientos.
            </List.Content>
          </ListItem>
          <ListItem>
            <List.Icon name="list" />
            <List.Content>
              Podrás responder nuevamente los tests cuántas veces quieras.
            </List.Content>
          </ListItem>
        </List>
        <TestList />
      </Container>
    </>
  );
};

export default TestContainer;
