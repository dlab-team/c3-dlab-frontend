import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import FrameworkLevel from "./FrameworkLevel";
import { Accordion, Icon, Container } from "semantic-ui-react";
import {
  initialValues,
  profileRadioOptions,
  ValuesFromDB,
  validationSchema,
  onSubmit,
} from "./data";

const renderFrameworks = (initVals, setFieldValue) => {
  return Object.entries(initVals).map((item, i) => {
    return (
      <FrameworkLevel
        key={i}
        control="radio"
        label={item[0]}
        name={item[0]}
        options={profileRadioOptions}
        setFieldValue={setFieldValue}
      />
    );
  });
};

function ProfileFormContainer() {
  const [profileValuesDB, setProfileValuesDB] = useState(null);

  return (
    <Formik
      // initialValues={profileValuesDB || initialValues}
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
      // enableReinitialize
    >
      {(formik) => {
        return (
        <Form>
      {renderFrameworks(initialValues, formik.setFieldValue)}
      {/* <button
            type="button"
            onClick={() => setProfileValuesDB(ValuesFromDB)}
          >
            Btn to get values from DB
          </button> */}
        <button type="submit">Submit</button>
        </Form>
        )
      }

      }
    </Formik>
  );
}

export default ProfileFormContainer;
