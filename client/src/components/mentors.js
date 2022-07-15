import React from "react";
import {
  Card,
  Icon,
  Image,
  Header,
  Grid,
  GridColumn,
  Button,
} from "semantic-ui-react";

const mentorsImg = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/4476618/pexels-photo-4476618.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Julieta",
    position: "Full Stack Developer",
    company: "Microsoft",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Pablo",
    position: "Senior UX/UI Designer",
    company: "Oracle",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Miguel",
    position: "Front End Developer",
    company: "Mercado Libre",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Fernanda",
    position: "Back End Developer",
    company: "Google",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3747462/pexels-photo-3747462.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Rocio",
    position: "Web Developer",
    company: "Uber",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/5257553/pexels-photo-5257553.jpeg?auto=compress&cs=tinysrgb&w=800",
    mentorName: "Valeria",
    position: "Lead Designer",
    company: "Microsoft",
  },
];

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
