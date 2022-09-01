import React, { useState, useContext, useEffect } from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import FrameworkLevel from "./FrameworkLevel";
import { Accordion, Icon, Container } from "semantic-ui-react";
import {
  frameworkList,
  profileRadioOptions,
  valuesFromDB,
  validationSchema,
  onSubmit,
} from "./data";
import { FormDataContext } from "../../contexts/formDataContext";

function ProfileFormContainer() {
  const [profileValuesDB, setProfileValuesDB] = useState(null);
  const { formData, formDataError, getAllFormData } =
    useContext(FormDataContext);

  console.log(formData.frameworks);

  useEffect(() => {
    getAllFormData();
    console.log("useEffect");
  }, []);

  const renderFrameworks = () => {
    return frameworkList.map((item, key) => {
      return (
        <FrameworkLevel
          control="radio"
          label={item.name}
          name={item.name}
          options={profileRadioOptions}
        />
      );
    });
  };

  return (
    <Formik
      initialValues={{
        level: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      // initialValues={initialValues}
      // validationSchema={validationSchema}
      enableReinitialize
    >
      {(formik) => (
        <Form>
          {renderFrameworks(frameworkList)}
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
}

export default ProfileFormContainer;
