import * as Yup from "yup";
import axios from "axios";

export const initialValues = { oracle: "", cassandra: "" };

export const profileRadioOptions = [
  { key: "Nivel 1", value: "1" },
  { key: "Nivel 2", value: "2" },
  { key: "Nivel 3", value: "3" },
];

// export const validationSchema = Yup.object({
//   react: Yup.string().required("Required"),
//   django: Yup.string().required("Required"),
//   html: Yup.string().required("Required"),
// });

export const onSubmit = (values) => {
  console.log("Form data", values);
  console.log("Saved data stringify", JSON.parse(JSON.stringify(values)));
  console.log(Object.values(values));
};

export const profileAccordionPanels = [
  {
    key: 1,
    title: {
      content: "Frameworks",
      icon: "dropdown",
    },
    content: {
      content: (
        <span>
          DEVsafio es una iniciativa que une talento junior Latinoamericano
          (trainee, bootcamp, entre otros) con mentores senior TI para potenciar
          su empleabilidad inicial e impactar la industria tecnológica.
        </span>
      ),
    },
  },
  {
    key: 2,
    title: {
      content: "Tools",
      icon: "dropdown",
    },
    content: {
      content: (
        <span>
          En DEVsafio apoyamos a quienes buscan empleo como Junior o Trainee en
          las áreas de Desarrollo, Diseño UX/UI y Data Science.
        </span>
      ),
    },
  },
];
