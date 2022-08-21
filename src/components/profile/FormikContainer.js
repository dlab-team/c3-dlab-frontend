import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import FrameworkLevel from "./FrameworkLevel";

const frameworksList = [
  { key: "react", frameworkId: 1 },
  { key: "django", frameworkId: 2 },
];

function FormikContainer() {
  //   const checkboxOptions = [
  //     {
  //       id: 1,
  //       frameworkName: "React",
  //       frameworkLevels: [
  //         { key: "key-level-Option1-react", value: "value-Option1" },
  //         { key: "key--level-Option2-react", value: "value-Option2" },
  //         { key: "key-level-Option3-react", value: "value-Option3" },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       frameworkName: "Django",
  //       frameworkLevels: [
  //         { key: "key-level-Option1-django", value: "value-Option1" },
  //         { key: "key--level-Option2-django", value: "value-Option2" },
  //         { key: "key-level-Option3-django", value: "value-Option3" },
  //       ],
  //     },
  //   ];

  const profileRadioOptions = [
    { key: "Nivel 1", value: "1" },
    { key: "Nivel 2", value: "2" },
    { key: "Nivel 3", value: "3" },
  ];

  const initialValues = {
    react: "",
    django: "",
    html: "",
  };
  const validationSchema = Yup.object({
    react: Yup.string().required("Required"),
    django: Yup.string().required("Required"),
    html: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data stringify", JSON.parse(JSON.stringify(values)));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FrameworkLevel
            control="radio"
            label="React"
            name="react"
            options={profileRadioOptions}
          />
          <FrameworkLevel
            control="radio"
            label="Django"
            name="django"
            options={profileRadioOptions}
          />
          <FrameworkLevel
            control="radio"
            label="HTML"
            name="html"
            options={profileRadioOptions}
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
