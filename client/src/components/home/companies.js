import React from "react";
import { Image, ListItem, List, Header, Container } from "semantic-ui-react";
import { companies } from "../../pages/home/data";

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
