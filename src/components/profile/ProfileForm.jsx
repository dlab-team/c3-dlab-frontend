import React, { Fragment, useState } from "react";
import Frameworks from "./Frameworks";
import Herramientas from "./Herramientas";
import Lenguage from "./Lenguage";
import {
  Form,
  Select,
  Checkbox,
  TextArea,
  Header,
  FormButton,
  Container,
} from "semantic-ui-react";
import ExperienciaTrabajo from "./ExperienciaTrabajo";
import InfoPersonal from "./InfoPersonal";
import Postula from "./Postula";
import PerfilEducacional from "./PerfilEducacional"
import PerfilLaboral from "./PerfilLaboral";
import Niveles from "./Niveles";


export default function ProfileForm() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const addInstitute = () => {};
  return (
    <Container>
      <Postula/>
      <Container className="profile-form-wrapper">
        <InfoPersonal/>
        <PerfilEducacional/>
        <PerfilLaboral/>
        <br />
        <ExperienciaTrabajo/>
        <Form.Button content="Enviar" primary />
      
    </Container>
    </Container>
    
   
    
  );
}
