import React from "react";
import { Header, HeaderSubheader, List, ListItem } from "semantic-ui-react";

const TestExpectations = () => {
  return (
    <>
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
            Si no te gustó tu puntaje, no hay problema!. Puedes rendirlos
            cuántas veces quieras.
          </List.Content>
        </ListItem>
      </List>
    </>
  );
};

export default TestExpectations;
