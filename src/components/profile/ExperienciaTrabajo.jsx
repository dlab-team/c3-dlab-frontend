import React from "react";
import { Container, Header, Form, Checkbox } from "semantic-ui-react";

export default function ExperienciaTrabajo() {
  return (
    <Container>
      <Header as="h2">Experiencia y Trabajo</Header>
      <Header as="h3">¿Qué tipo de trabajo estás buscando?</Header>
      <Form.Field>
        <h3>Indícanos tu disponibilidad laboral</h3>
        <Checkbox label={{ children: "Full Time" }} />
        <Checkbox label={{ children: "Part Time" }} />
        <Checkbox label={{ children: "Freelancer" }} />
      </Form.Field>
      <Form.Field>
        <Header as="h3">Qué describe mejor tu situación actual</Header>
        <Checkbox
          radio
          label="Quiero trabajar desde mi cuidad actual"
          value=""
          name=""
          id=""
          htmlFor=""
        />
        <Checkbox radio label="Disponible para migrar dentro de mi pais" />
        <Checkbox radio label="Disponible para migrar a otro país" />
      </Form.Field>
      <Form.Field>
        <Header as="h3">Cuentas con Visa de trabajo activa en: </Header>
        <Checkbox label={{ children: "Mi pais de residencia actual" }} />
        <Checkbox label={{ children: "Unión Europea" }} />
        <Checkbox label={{ children: "Estados Unidos" }} />
        <Checkbox label={{ children: "Otros Países" }} />
      </Form.Field>
    </Container>
  );
}
