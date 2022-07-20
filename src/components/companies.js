import React from "react";
import {
  Image,
  ListItem,
  List,
  Segment,
  Header,
  Container,
  Grid,
} from "semantic-ui-react";

const companies = [
  {
    id: 1,
    src: "https://www.logogenio.es/images/articles/tech-logos4.jpg",
  },
  {
    id: 2,
    src: "https://www.logogenio.es/images/articles/tech-logos3.jpg",
  },
  { id: 3, src: "https://www.logogenio.es/images/articles/tech-logos5.jpg" },
  {
    id: 4,
    src: "https://www.logogenio.es/images/articles/tech-logos6.jpg",
  },
  {
    id: 5,
    src: "https://www.logogenio.es/images/articles/tech-logos7.jpg",
  },
  { id: 6, src: "https://www.logogenio.es/images/articles/tech-logos8.jpg" },
];

const renderCompanies = (companies) => {
  return companies.map((company, index) => {
    return (
      <>
        <ListItem>
          <Image size="medium" index={index} src={company.src} />
        </ListItem>
      </>
    );
  });
};

const Companies = () => {
  return (
    <>
      <Container class="company-wrapper">
        <Header
          as="h1"
          content="Aprende con los mejores del mercado"
          textAlign="center"
        />
        <Header.Subheader
          as="h4"
          content="Nuestras alianzas incluyen a las empresas tecnológicas más reconocidas del mercado. Todos nuestros mentores/as son de nivel senior y trabajan en empresas de vanguardia."
        />
        <List horizontal>{renderCompanies(companies)}</List>
      </Container>
    </>
  );
};

export default Companies;
