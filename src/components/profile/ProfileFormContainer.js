import React, { useState, useContext, useEffect } from "react";
import { Formik, Form } from "formik";
import { initialValues } from "./data";
// import { FormDataContext } from "../../contexts/formDataContext";
import axios from "axios";
import "../../assets/styles.css";
import CompetencyList from "./CompetencyList";

export default function ProfileFormContainer() {
  // const [profileValuesDB, setProfileValuesDB] = useState(null);
  const [isReady, setIsReady] = useState(false);
  // const { formData, formDataError, getAllFormData } =
  //   useContext(FormDataContext);
  const [frameworks, setFrameworks] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [tools, setTools] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleResponse(response) {
    // console.log(response.data.res.frameworks);
    // console.log(response.data.res.languages);
    // console.log(response.data.res.tools);
    setFrameworks(response.data.res.frameworks);
    setLanguages(response.data.res.languages);
    setTools(response.data.res.tools);
    setIsReady(true);
  }

  if (isReady) {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          setFormSubmitted(true);

          const dataToSend = Object.entries(values).reduce(
            (acumulador, elementoActual) => {
              // ["react", { id: 1, level: 2}]
              const _key = elementoActual[0]; // react
              const values = elementoActual[1]; // { id: 1, level: 2}

              const newObject = {
                UserId: 1,
                FrameworkId: values["id"],
                level: values["level"],
              };

              acumulador.push(newObject);

              return acumulador;
            },
            []
          );

          console.log(dataToSend);
          axios
            .put("http://localhost:8080/api/1/profile/adduser", {
              frameworks: dataToSend,
            })
            .then(function (response) {
              alert(response);
              setFormSubmitted(false);
            })
            .catch(function (error) {
              alert(error.response.data.message);
              setFormSubmitted(false);
            });
          console.log("Profile Form Sent");
          console.log("ProfileFormValues:", values);
        }}
        // validationSchema={validationSchema}
        // enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <h1>Perfil Laboral</h1>
              <div>
                Selecciona tu nivel de dominio en cada competencia del listado.
                Déjala en blanco si no lo manejas.
              </div>
              <h1>Frameworks</h1>
              <CompetencyList
                initVals={frameworks}
                setFieldValue={formik.setFieldValue}
              />
              {/* <h1>Lenguajes</h1>
              <CompetencyList
                initVals={languages}
                setFieldValue={formik.setFieldValue}
              />
              <h1>Herramientas</h1>
              <CompetencyList
                initVals={tools}
                fieldValue={formik.setFieldValue}
              /> */}
              {/* <button
                type="button"
                onClick={() => setProfileValuesDB(valuesFromDB)}
              >
                Btn to get values from DB
              </button> */}
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    );
  } else {
    axios.get("http://localhost:8080/api/1/profile/form").then(handleResponse);
  }
}
