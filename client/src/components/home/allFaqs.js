import React from "react";
import { Accordion, Container, Header } from "semantic-ui-react";
import { aboutDesafioFaqs } from "../../pages/home/data";

const AllFaqs = () => {
  return (
    <>
      <Container className="all-faqs-wrapper">
        <Header
          as="h3"
          content="Aquí podrás encontrar las preguntas más frecuentes. Si tienes alguna pregunta adicional o quieres saber sobre tus postulaciones, escríbenos a contacto@devsafio.com!"
        />
        <Accordion
          // inverted
          className="all-faqs-accordion"
          fluid
          styled
          // defaultActiveIndex={0}
          panels={aboutDesafioFaqs}
          color="#fff"
        />
      </Container>
    </>
  );
};

export default AllFaqs;
