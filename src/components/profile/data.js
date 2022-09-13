import * as Yup from "yup";

export const initialValues = {
  oracle: { id: 1, level: 0 },
  cassandra: { id: 2, level: 0 },
  sqlite: { id: 3, level: 0 },
  redis: { id: 4, level: 0 },
  mongodb: { id: 5, level: 0 },
  postgresql: { id: 6, level: 0 },
  mysql: { id: 7, level: 0 },

  python: { id: 7, level: 0 },
  javascript: { id: 7, level: 0 },
};

// Firebase Realtime Database: { id: 8, level: 0 },
// MariaDB: { id: 9, level: 0 },
// Microsoft SQL Server: { id: 10, level: 0 },
// JQuery: { id: 11, level: 0 },
// React: { id: 12, level: 0 },
// Spring: { id: 13, level: 0 },
// Angular: { id: 14, level: 0 },
// Vuejs: { id: 15, level: 0 },
// Laravel: { id: 16, level: 0 },
// Django: { id: 17, level: 0 },
// Ruby On Rails: { id: 18, level: 0 },
// ASPNET o ASPNETCore: { id: 19, level: 0 },
// Flask: { id: 20, level: 0 },
// Expressjs: { id: 21, level: 0 },
// FastAPI: { id: 22, level: 0 },
// NET: { id: 23, level: 0 },
// Nodejs: { id: 24, level: 0 },

export const profileRadioOptions = [
  { key: "Nivel 1", value: "1" },
  { key: "Nivel 2", value: "2" },
  { key: "Nivel 3", value: "3" },
];

export const validationSchema = Yup.object({
  oracle: Yup.string().required("Required"),
  cassandra: Yup.string().required("Required"),
});

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
