import React from "react";
import { Card, Image } from "semantic-ui-react";

const Mentors = ({ mentorsToRender }) => {
  return (
    <>
      {mentorsToRender.map((mentor, index) => (
        <Card key={index}>
          <Image src={mentor.src} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{mentor.mentorName}</Card.Header>
            <Card.Meta>
              {mentor.position}, {mentor.company}
            </Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </>
  );
};
export default Mentors;
