import React from "react";
import { Card, Image, Label } from "semantic-ui-react";
import { testData } from "../../pages/tests/data.js";

const OneTest = () => {
  return (
    <>
      {testData.map((testItem, index) => (
        <Card key={index}>
          <Image
            src={testItem.logo}
            wrapped
            ui={false}
            style={{ padding: "25px", minHeight: "50px" }}
          />

          <Card.Content>
            <Label color="teal" ribbon>
              {testItem.role}
            </Label>
            <Card.Header style={{ marginTop: "10px" }}>
              {testItem.name}
            </Card.Header>
            <Card.Meta>{`${testItem.time} min.`}</Card.Meta>
            <a href={testItem.testLink} target="_blank" rel="noreferrer">
              Ir al test
            </a>
          </Card.Content>
        </Card>
      ))}
    </>
  );
};
export default OneTest;
