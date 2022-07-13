import React from "react";
import { Card, Image, Header, GridColumn, Button } from "semantic-ui-react";
import { mentorsImg } from "../../pages/home/data";

const renderMentors = (mentorsImg) => {
  return mentorsImg.map((mentor, index) => {
    return (
      <>
        <GridColumn index={index}>
          <Card>
            <Image src={mentor.src} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{mentor.mentorName}</Card.Header>
              <Card.Meta>
                {mentor.position}, {mentor.company}
              </Card.Meta>
            </Card.Content>
          </Card>
        </GridColumn>
      </>
    );
  });
};

const Mentors = () => {
  return (
    <>
      <Header
        as="h1"
        content="Nuestra red de mentores/as"
        style={{ marginTop: "80px" }}
      />
      <Card.Group stackable container columns={4}>
        {renderMentors(mentorsImg)}
      </Card.Group>
      <Button
        content="Ver Más"
        size="massive"
        style={{ backgroundColor: "#16104A", color: "white", margin: "40px" }}
      />
    </>
  );
};

export default Mentors;
