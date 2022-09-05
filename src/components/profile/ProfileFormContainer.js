import React, { useState, useContext, useEffect } from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import CompetencyLevel from "./CompetencyLevel";
import { Accordion, Icon, Container } from "semantic-ui-react";
import {
  frameworkList,
  profileRadioOptions,
  valuesFromDB,
  validationSchema,
  onSubmit,
} from "./data";
import { FormDataContext } from "../../contexts/formDataContext";
import axios from "axios";
import "../../assets/styles.css";

export default function ProfileFormContainer() {
  const [profileValuesDB, setProfileValuesDB] = useState(null);
  const [isReady, setIsReady] = useState(false);
  // const { formData, formDataError, getAllFormData } =
  //   useContext(FormDataContext);
  const [frameworks, setFrameworks] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [tools, setTools] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setIsReady(false);
  }, []);

  function handleResponse(response) {
    setFrameworks(response.data.res.frameworks);
    setLanguages(response.data.res.languages);
    setTools(response.data.res.tools);
    setIsReady(true);
  }

  const renderFrameworks = () => {
    const sortedFrameworks = frameworks.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    return sortedFrameworks.sort().map((item, key) => {
      return (
        <CompetencyLevel
          control="radio"
          label={item.name}
          name={item.name}
          options={profileRadioOptions}
        />
      );
    });
  };

  const renderLanguages = () => {
    const sortedLanguages = languages.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    return sortedLanguages.map((item, key) => {
      return (
        <CompetencyLevel
          control="radio"
          label={item.name}
          name={item.name}
          options={profileRadioOptions}
        />
      );
    });
  };

  const renderTools = () => {
    const sortedTools = tools.sort((a, b) => (a.name > b.name ? 1 : -1));
    return sortedTools.map((item, key) => {
      return (
        <CompetencyLevel
          control="radio"
          label={item.name}
          name={item.name}
          options={profileRadioOptions}
        />
      );
    });
  };

  if (isReady) {
    return (
      <Formik
        initialValues={{
          level: "",
        }}
        onSubmit={async (profileFormInfo) => {
          axios
            .put("http://localhost:8080/api/1/profile/adduser", {
              level: profileFormInfo.level,
            })
            .then(function (response) {
              alert(response);
            })
            .catch(function (error) {
              alert(error.response.data.message);
            });
          console.log("Formulario enviado");
          console.log(profileFormInfo);
          setFormSubmitted(true);
          setTimeout(() => setFormSubmitted(false), 5000);
        }}
        // validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => (
          <Form>
            <h1>Perfil Laboral</h1>
            <div>
              Selecciona tu nivel de dominio en cada competencia del listado.
              Déjala en blanco si no lo manejas.
            </div>
            <div className="list-wrapper-test">
              <h1>Frameworks</h1>
              {renderFrameworks(frameworks)}
            </div>
            <div className="list-wrapper-test">
              <h1>Lenguajes</h1>
              {renderLanguages(languages)}
            </div>
            <div className="list-wrapper-test">
              <h1>Herramientas</h1>
              {renderTools(tools)}
            </div>

            {/* <button
              type="button"
              onClick={() => setProfileValuesDB(valuesFromDB)}
            >
              Btn to get values from DB
            </button> */}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
  } else {
    axios.get("http://localhost:8080/api/1/profile/form").then(handleResponse);
  }
}
