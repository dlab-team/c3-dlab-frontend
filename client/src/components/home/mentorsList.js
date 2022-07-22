import React, { useState, useEffect } from "react";
import Mentors from "./mentors";
import {
  Card,
  Header,
  Button,
  Container,
  HeaderSubheader,
} from "semantic-ui-react";
import { mentorsData } from "../../pages/home/data";

export default function MentorsList() {
  const [mentorsToShow, setMentorsToShow] = useState([]);
  const [mentorsPerInstance, setMentorsPerInstance] = useState(4);

  function loopWithSlice(start, end) {
    const slicedMentors = mentorsData.slice(start, end);
    setMentorsToShow(slicedMentors);
  }

  useEffect(() => {
    loopWithSlice(0, mentorsPerInstance);
  }, [mentorsPerInstance]);

  function handleShowMoreMentors() {
    setMentorsPerInstance(
      (prevMentorsPerInstance) => prevMentorsPerInstance + 4
    );
  }

  return (
    <>
      <Container>
        <Header
          as="h1"
          content="Nuestra red de mentores y mentoras"
          className="section-title"
        />
        <HeaderSubheader
          as="h4"
          content="Un mentor senior te apoyará y guiará a nivel técnico para que lo hagas excelente"
        />
        <Card.Group stackable container itemsPerRow={4} className="mentor-card">
          <Mentors mentorsToRender={mentorsToShow} />
        </Card.Group>
      </Container>
      <Button
        className="landingPage-btns"
        content="Ver Más"
        size="massive"
        onClick={handleShowMoreMentors}
      />
    </>
  );
}
