import React, { useState, useEffect } from "react";
import { Form, Container } from "semantic-ui-react";

import Postula from "./Postula";

import axios from "axios";

export default function EjemploForm() {
  const [languages, setLanguages] = useState([]);
  const [userLanguages, setUserLanguages] = useState([]);

  useEffect(() => {
    fetchData().then((res) => setLanguages(res.data.res.languages));
    //console.log(languages);
  }, []);

  async function fetchData() {
    let res = await axios.get("http://localhost:8080/api/1/profile/form");
    return res;
    //console.log(res);
  }
  const languageLevel = {
    userId: Number,
    languageId: Number,
    level: Number,
  };

  const setLanguageLevel = (userId, langId, level) => {
    let obj = Object.create(languageLevel);
    obj.LanguageId = langId;
    obj.UserId = userId;
    obj.level = level;
    userLanguages.push(obj);
    console.log(userLanguages);
    //Faltaría hacer que saque la propiedad al hacerle uncheck al input
    //porque así como está se duplican niveles al cambiar la opción
  };

  return (
    <Container>
      <Postula />
      <Container className="profile-form-wrapper"></Container>
      <Form>
        <div>
          {languages.map((language) => (
            <div>
              <p>{language.name}</p>
              <label for={language.name}>Nivel 1 </label>
              <input
                type="radio"
                id={language.id}
                value="1"
                name={language.name}
                onClick={() => setLanguageLevel(1, language.id, 1)}
              />

              <label for={language.name}>Nivel 2</label>
              <input
                type="radio"
                id={language.id}
                value="2"
                name={language.name}
                onClick={() => setLanguageLevel(1, language.id, 2)}
              />

              <label for={language.name}>Nivel 3</label>
              <input
                type="radio"
                id={language.id}
                value="3"
                name={language.name}
                onClick={() => setLanguageLevel(1, language.id, 3)}
              />
            </div>
          ))}
        </div>
      </Form>
    </Container>
  );
}
