import * as Yup from "yup";
import axios from "axios";

export const initialValues = [
  { id: 1, level: 0 },
  {
    id: 2,
    level: 0,
  },
  { id: 3, level: 0 },
  {
    id: 4,
    level: 0,
  },
];

export const valuesFromDB = [
  { id: 1, level: 1 },
  {
    id: 2,
    level: 2,
  },
  { id: 3, level: 3 },
  {
    id: 4,
    level: 1,
  },
];

export const frameworkList = [
  {
    id: 1,
    name: "Oracle",
  },
  {
    id: 2,
    name: "Cassandra",
  },
  {
    id: 3,
    name: "SQLite",
  },
  {
    id: 4,
    name: "Redis",
  },
  // {
  //   id: 5,
  //   name: "MongoDB",
  // },
  // {
  //   id: 6,
  //   name: "PostgreSQL",
  // },
  // {
  //   id: 7,
  //   name: "MySQL",
  // },
  // {
  //   id: 8,
  //   name: "Firebase Realtime Database",
  // },
  // {
  //   id: 9,
  //   name: "MariaDB",
  // },
  // {
  //   id: 10,
  //   name: "Microsoft SQL Server",
  // },
  // {
  //   id: 11,
  //   name: "JQuery",
  // },
  // {
  //   id: 12,
  //   name: "React",
  // },
  // {
  //   id: 13,
  //   name: "Spring",
  // },
  // {
  //   id: 14,
  //   name: "Angular",
  // },
  // {
  //   id: 15,
  //   name: "Vue.js",
  // },
  // {
  //   id: 16,
  //   name: "Laravel",
  // },
  // {
  //   id: 17,
  //   name: "Django",
  // },
  // {
  //   id: 18,
  //   name: "Ruby On Rails",
  // },
  // {
  //   id: 19,
  //   name: "ASP.NET o ASP.NETCore",
  // },
  // {
  //   id: 20,
  //   name: "Flask",
  // },
  // {
  //   id: 21,
  //   name: "Express.js",
  // },
  // {
  //   id: 22,
  //   name: "FastAPI",
  // },
  // {
  //   id: 23,
  //   name: ".NET",
  // },
  // {
  //   id: 24,
  //   name: "Node.js",
  // },
];

export const profileRadioOptions = [
  { key: "Nivel 1", value: "1" },
  { key: "Nivel 2", value: "2" },
  { key: "Nivel 3", value: "3" },
];

// export const ValuesFromDB = {
//   react: "1",
//   django: "2",
//   html: "3",
// };

// export const validationSchema = Yup.object({
//   react: Yup.string().required("Required"),
//   django: Yup.string().required("Required"),
//   html: Yup.string().required("Required"),
// });

// const frameworkIdSelected = (props) => {
//   Object.keys();
// };
// export const onSubmit = (values) => {
//   console.log("Form data", values);
//   console.log("Saved data stringify", JSON.parse(JSON.stringify(values)));
// };

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
