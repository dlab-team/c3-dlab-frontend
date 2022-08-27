import React, { useState } from "react";
import {
  Form,
  Container,
} from "semantic-ui-react";
import ExperienciaTrabajo from "./ExperienciaTrabajo";
import InfoPersonal from "./InfoPersonal";
import Postula from "./Postula";
import PerfilEducacional from "./PerfilEducacional"
import PerfilLaboral from "./PerfilLaboral";

export default function ProfileForm() {
  return (
    <Container>
      <Postula/>
      <Container className="profile-form-wrapper">
        <InfoPersonal/>
        <br />
        <PerfilEducacional/>
        <br />
        <PerfilLaboral/>          
        <br />
        <ExperienciaTrabajo/>
      </Container>
    </Container>
  );
}
