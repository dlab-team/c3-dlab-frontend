import React from "react";
import { Image, ListItem, List, Header, Container } from "semantic-ui-react";
import { companies } from "../../pages/home/data";

const renderCompanies = () => {
  return companies.map((company, index) => {
    return (
      <>
        <ListItem key={index}>
          <Image size="small" src={company.src} />
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
          content="Aprende con los mejores"
          textAlign="center"
          className="section-title"
        />
        <Header.Subheader
          as="h4"
          content="Nuestras alianzas incluyen a las empresas tecnológicas más reconocidas del mercado."
          textAlign="center"
        />
        <List horizontal>{renderCompanies(companies)}</List>
      </Container>
    </>
  );
};

export default Companies;
